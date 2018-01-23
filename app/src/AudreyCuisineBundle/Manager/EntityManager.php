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
        $repository = $this->doctrine->getRepository(Selection::class);
        $selections = $repository->findBy([], ['selectionOrder' => 'ASC'], $expectedSelections);
        $result = [];
        foreach ($selections as $Selection) {
            // Récupération des articles de la sélection
            $selectionPosts = [];
            foreach ($Selection->getPosts() as $Post) {
                $selectionPosts[] = array(
                    'title' => $Post->getTitle(),
                    'date' => $Post->getUpdated()->format(Datetime::ISO8601),
                    'thumbnail' => $Post->getUrlPostThumbnail(),
                    'slug' => $Post->getSlug()
                );
            }
            // Tri des articles du plus récent au plus ancien
            usort($selectionPosts, [Utils::class, 'orderPostPublishedDate']);
            $sortedPostsSelection = array_reverse($selectionPosts);
            $result[] = array(
                'name' => $Selection->getName(),
                'posts' => array_slice($sortedPostsSelection, 0, $postsPerSelection)
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

}
