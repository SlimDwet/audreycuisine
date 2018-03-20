<?php

namespace AudreyCuisineBundle\Manager;

use Doctrine\ORM\EntityManager as DoctrineEntityManager;
use AudreyCuisineBundle\Utils\Utils;
use \Datetime;
use JsonSchema\Validator;
use Exception;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
// Entities
use AudreyCuisineBundle\Entity\Selection;
use AudreyCuisineBundle\Entity\Post;
use AudreyCuisineBundle\Entity\Newsletter;

class EntityManager {

    private $em;
    const NEWSLETTER_SCHEMA_FILENAME = 'newsletterSchema.json';

    public function __construct(DoctrineEntityManager $em) {
        $this->em = $em;
    }

    /**
     * Retourne les X premières sélection
     * @param  integer $expectedSelections [Nombre de sélections à retourner]
     * @param  integer $postsPerSelection      [Nombre d'article par sélection]
     * @return array                 [Liste des sélections]
     */
    public function getSelections(int $expectedSelections = 8, int $postsPerSelection = 4): array {
        $result = [];
        $repository = $this->em->getRepository(Selection::class);
        $selections = $repository->getSelectionPosts($expectedSelections, $postsPerSelection);
        foreach ($selections as $keySel => $sel) {
            // Extraction des articles de la sélection
            $selectionPosts = [];
            foreach ($sel['posts'] as $Post) {
                $selectionPosts[] = array(
                    'title' => $Post->getTitle(),
                    'thumbnail' => $Post->getUrlPostThumbnail(),
                    'date' => $Post->getUpdated()->format(Datetime::ISO8601),
                    'slug' => $Post->getSlug()
                );
            }
            // On récupère le nom de la sélection ou, à défaut, le nom de la catégorie
            $selectionName = is_null($sel['selection']->getName()) ? $sel['selection']->getCategory()->getName() : $sel['selection']->getName();
            $result[$keySel] = array(
                'name' => $selectionName,
                'posts' => $selectionPosts
            );
        }
        return $result;
    }

    /**
     * Retourne les X derniers articles postés
     * @param  integer $total [Nombre d'articles à retourner]
     * @return array          [Liste des derniers articles]
     */
    public function getLastPosts(int $total = 4): array {
        $repository = $this->em->getRepository(Post::class);
        $posts = $repository->findBy(
            ['isVisible' => 1],
            ['updated' => 'DESC'],
            $total
        );
        $result = [];
        // Mise en forme du résultat
        foreach ($posts as $keyPost => $Post) {
            // Récupération des catégories de l'article
            $categories = [];
            foreach ($Post->getCategory() as $keyCat => $Category) {
                $categories[] = array(
                    'name' => $Category->getName()
                );
            }

            // Mise en forme d'un article
            $result[$keyPost] = array(
                'title' => $Post->getTitle(),
                'category' => $categories,
                'content' => $Post->getContent(),
                'contentNoHtml' => strip_tags($Post->getContent()),
                'slug' => $Post->getSlug(),
                'updated' => $Post->getUpdated()->format(Datetime::ISO8601), // Date au format ISO
                'urlPostThumbnail' => $Post->getUrlPostThumbnail()
            );
        }
        return $result;
    }

    /**
     * Retourne un article à partir de son slug
     * @param  string $slug [Slug de l'article]
     * @return array|null       [Article ou null]
     */
    public function getPostBySlug(string $slug): ?array {
        $repository = $this->em->getRepository(Post::class);
        $Post = $repository->findOneBy(['slug' => $slug, 'isVisible' => 1]);
        return array(
            'title' => $Post->getTitle(),
            'categories' => Utils::getPostCategories($Post->getCategory()),
            'content' => $Post->getContent(),
            'slug' => $Post->getSlug(),
            'published' => $Post->getUpdated()->format(\Datetime::ISO8601), // Date au format ISO
            'urlPostPicture' => $Post->getUrlPostPicture(),
            'views' => $Post->getViews(),
            'author'=> array(
                'name' => $Post->getUser()->getFullName(),
                'url' => $Post->getUser()->getSlug()
            ),
            'comments' => Utils::getPostComments($Post->getComments()),
            'tags' => Utils::getPostTags($Post->getTags())
        );
    }

    /**
     * Retourne le résultat de la recherche d'articles par termes
     * @param  string $terms [Termes recherchés]
     * @return array        [description]
     */
    public function getPostsBySearchedTerms(string $terms): array {
        $repository = $this->em->getRepository(Post::class);
        $result = [];
        // Liste des articles de la recherche
        $queryResult = $repository->searchPostsByTerms($terms);
        foreach ($queryResult as $Post) {
            $result[] = array(
                'title' => $Post->getTitle(),
                'content' => strip_tags($Post->getContent()),
                'slug' => $Post->getSlug(),
                'thumbnail' => $Post->getUrlPostThumbnail(),
                'published' => $Post->getUpdated(),
                'comments' => Utils::getPostComments($Post->getComments()),
                'author' => $Post->getUser()->getFullName()
            );
        }
        return $result;
    }

    /**
     * Retourne la liste des articles appartenant à une catégorie
     * @param  string $slug [Slug de la catégorie]
     * @return array        [Liste des articles]
     */
    public function getPostsInCategory(string $slug): array {
        $repository = $this->em->getRepository(Post::class);
        $posts = $repository->getPostsInCategory($slug);
        $result = [];
        foreach ($posts as $Post) {
            if(!isset($result['category'])) $result['category'] = $Post['category'];
            $result['posts'][] = [
                'title' => $Post['post']->getTitle(),
                'slug' => $Post['post']->getSlug(),
                'content' => strip_tags($Post['post']->getContent()),
                'comments' => count(Utils::getPostComments($Post['post']->getComments())),
                'author' => $Post['post']->getUser()->getFullName(),
                'thumbnail' => $Post['post']->getUrlPostThumbnail(),
                'updated' => $Post['post']->getUpdated()
            ];
        }
        return $result;
    }

    /**
     * Retourne la liste d'articles correspondant aux ingrédients
     * @param  [string] $ingredient1 [Ingrédient 1]
     * @param  [string|null] $ingredient2 [Ingrédient 2]
     * @param  [string|null] $ingredient3 [Ingrédient 3]
     * @return array               [Liste des articles]
     */
    public function getPostsByIngredients(string $ingredient1 = null, string $ingredient2 = null, string $ingredient3 = null): array {
        $result = [];
        if(!is_null($ingredient1)) {
            // Récupération des articles
            $repository = $this->em->getRepository(Post::class);
            $posts = $repository->getPostsByIngredients($ingredient1, $ingredient2, $ingredient3);
            foreach ($posts as $Post) {
                $result[] = [
                    'title' => $Post->getTitle(),
                    'slug' => $Post->getSlug(),
                    'content' => strip_tags($Post->getContent()),
                    'thumbnail' => $Post->getUrlPostThumbnail(),
                    'comments' => Utils::getPostComments($Post->getComments()),
                    'updated' => $Post->getUpdated()
                ];
            }
        }
        return $result;
    }

    /**
     * Ajoute une adresse mail à la newsletter
     * @param  string $data [Contenu du POST]
     * @return array        [Résultat de l'ajout]
     */
    public function addNewsletterMail(string $data): array {
        $data = json_decode($data);
        if(empty($data)) return ['success' => false, "errors" => "Aucune adresse mail renseignée"];
        $validator = new Validator();
        $validator->validate($data, (object)['$ref' => 'file://' . realpath(__DIR__.'/../Utils/'.self::NEWSLETTER_SCHEMA_FILENAME)]);
        if($validator->isValid()) {
            try {
                // Ajout de l'adresse mail en BDD
                $newsletter = new Newsletter();
                $newsletter->setMail($data->mail);
                $newsletter->setActive(true);
                $this->em->persist($newsletter);
                $this->em->flush();
                return ['success' => true, "message" => "L'adresse mail a bien été ajoutée à la newsletter"];
            } catch(Exception $e) {
                // Email déjà existante
                if($e instanceof UniqueConstraintViolationException) {
                    return ['success' => false, 'errors' => "Cette adresse mail est déjà existante"];
                }
                return ['success' => false, 'errors' => "Une erreur s'est produite lors de l'ajout du mail"];
            }
        }
        // Le JSON est invalide
        $errors = [];
        foreach ($validator->getErrors() as $error) {
            $errors[] = "Le champs ".$error['property']." contient l'erreur suivante => ".$error['message'];
        }
        return ['success' => false, 'errors' => $errors];
    }

}
