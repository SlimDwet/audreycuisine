<?php

namespace AudreyCuisineBundle\Repository;

/**
 * PostRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class PostRepository extends \Doctrine\ORM\EntityRepository
{

    /**
     * Retourne les X derniers articles postés
     * @param  integer $nb [Nombre d'articles à retourner]
     * @return Category[]       [Tableau d'entité Category]
     */
    public function getLastPosts(int $nb = 4): array {
        $posts = $this->findBy(
            ['isVisible' => 1],
            ['updated' => 'DESC'],
            $nb
        );
        return $this->toArray($posts);
    }

    private function toArray(array $posts): array {
        $result = [];
        foreach ($posts as $key => $Post) {
            $result[$key] = array(
                'title' => $Post->getTitle(),
                'content' => $Post->getContent(),
                'updated' => $Post->getUpdated()->format(\Datetime::ISO8601), // Date au format ISO
                'category' => $Post->getCategory()->getName()
            );
        }
        return $result;
    }
}
