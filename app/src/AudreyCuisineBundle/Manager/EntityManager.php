<?php

namespace AudreyCuisineBundle\Manager;

use Doctrine\Bundle\DoctrineBundle\Registry;
use AudreyCuisineBundle\Utils\Utils;
use \Datetime;
// Entities
use AudreyCuisineBundle\Entity\Selection;
use AudreyCuisineBundle\Entity\Post;

class EntityManager {

    private $doctrine;

    public function __construct(Registry $doctrine) {
        $this->doctrine = $doctrine;
    }

    /**
     * Retourne les X premières sélection
     * @param  integer $expectedSelections [Nombre de sélections à retourner]
     * @param  integer $postsPerSelection      [Nombre d'article par sélection]
     * @return array                 [Liste des sélections]
     */
    public function getSelections(int $expectedSelections = 8, int $postsPerSelection = 4): array {
        $result = [];
        $repository = $this->doctrine->getRepository(Selection::class);
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
        $repository = $this->doctrine->getRepository(Post::class);
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
        $repository = $this->doctrine->getRepository(Post::class);
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
        $repository = $this->doctrine->getRepository(Post::class);
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

}
