<?php

namespace AudreyCuisineBundle\Repository;

use AudreyCuisineBundle\Entity\Post;

/**
 * SelectionRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class SelectionRepository extends \Doctrine\ORM\EntityRepository
{

    /**
     * Récupération des sélections ainsi que les articles associés
     * @param  int   $expectedSelections [Nombre de sélections attendu]
     * @param  int   $postsPerSelection  [Nombre d'articles par sélection attendu]
     * @return array                     [Liste des sélections et articles]
     */
    public function getSelectionPosts(int $expectedSelections, int $postsPerSelection): array {
        $result = [];
        // Récupération des sélections ainsi que leurs articles associés
        $selections = $this->getSelections($expectedSelections);
        foreach ($selections as $keySelection => $Selection) {
            $result[$keySelection]['selection'] = $Selection;
            // ID catégorie
            $categoryId = $Selection->getCategory()->getId();
            // On récupère les articles associés à la catégorie de la sélection
            $postRepository = $this->getEntityManager()->getRepository(Post::class);
            $qb = $postRepository->createQueryBuilder('p');
            $query = $qb->join('p.category', 'c')
                ->where('c.id = :categoryId')
                ->orderBy('p.updated', 'DESC')
                ->setMaxResults($postsPerSelection)
                ->setParameter('categoryId', $categoryId)
                ->getQuery();
            $result[$keySelection]['posts'] = $query->getResult();
        }
        return $result;
    }

    /**
     * Retourne la liste des sélections
     * @param  integer $expectedSelections [Nombre de sélections attendu]
     * @return Selection[]                       [Liste des entités Sélection]
     */
    public function getSelections(int $expectedSelections): array {
        return $this->findBy([], ['selectionOrder' => 'ASC'], $expectedSelections);
    }

}
