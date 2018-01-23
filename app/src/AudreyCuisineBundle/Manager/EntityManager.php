<?php

namespace AudreyCuisineBundle\Manager;

use Doctrine\Bundle\DoctrineBundle\Registry;
use AudreyCuisineBundle\Utils\Utils;
// Entities
use AudreyCuisineBundle\Entity\Selection;

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
                    'thumbnail' => $Post->getUrlPostThumbnail()
                );
            }
            // Tri des articles du plus récent au plus ancien
            usort($selectionPosts, [$this, ['Utils', 'orderPostPublishedDate']]);
            $sortedPostsSelection = array_reverse($selectionPosts);
            $result[] = array(
                'name' => $Selection->getName(),
                'posts' => array_slice($sortedPostsSelection, 0, $postsPerSelection)
            );
        }
        return $result;
    }

}
