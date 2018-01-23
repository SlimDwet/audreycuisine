<?php

namespace AudreyCuisineBundle\Utils;

use \DateTime;

/**
 * Classe regroupant des fonctions utilitaires
 */
class Utils {

    /**
     * Transforme un tableau pour un affichage direct
     * @param  array $data [Données à afficher]
     * @return array       [Données prêtes pour l'affichage]
     */
    public static function formateToOutput(array $data): array {
        return ['data' => $data];
    }

    /**
     * Affiche un message d'erreur
     * @param  string $errorMessage [Message d'erreur à afficher]
     * @return array                [Contenu de l'affichage]
     */
    public static function formateToErrorOutput(string $errorMessage): array {
        return ['error' => $errorMessage];
    }

    /**
     * Tri par ordre croissant les dates des articles
     * @param  array $post1 [Article 1]
     * @param  array $post2 [Article 2]
     * @return int           [Résultat de la comparaison]
     */
    public static function orderPostPublishedDate(array $post1, array $post2): int {
        return strcmp($post1['date'], $post2['date']);
    }

    /**
     * Retourne les catégories d'un article
     * @param  Category[] $categories [Liste des entités Category]
     * @return array             [Liste des catégories]
     */
    public static function getPostCategories($categories): array {
        $result = [];
        foreach ($categories as $Category) {
            $result[] = array(
                'name' => $Category->getName(),
                'slug' => $Category->getSlug()
            );
        }
        return $result;
    }

    /**
     * Retourne les commentaires d'un article
     * @param  Comment[] $comments [Liste des entités Comment]
     * @return array             [Liste des commentaires]
     */
    public static function getPostComments($comments): array {
        $result = [];
        foreach ($comments as $Comment) {
            $result[] = array(
                'author' => $Comment->getName(),
                'content' => $Comment->getContent(),
                'published' => $Comment->getPublished()->format(Datetime::ISO8601)
            );
        }
        return $result;
    }

    /**
     * Retourne les tags d'un article
     * @param  Tag[] $tags [Liste des entités Tag]
     * @return array             [Liste des tags]
     */
    public static function getPostTags($tags): array {
        $result = [];
        foreach ($tags as $Tag) {
            $result[] = array(
                'name' => $Tag->getName(),
                'slug' => $Tag->getSlug()
            );
        }
        return $result;
    }
}
