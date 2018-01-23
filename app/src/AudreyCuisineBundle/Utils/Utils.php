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
     * Tri par ordre croissant les dates des articles
     * @param  array $post1 [Article 1]
     * @param  array $post2 [Article 2]
     * @return int           [Résultat de la comparaison]
     */
    public static function orderPostPublishedDate(array $post1, array $post2): int {
        return strcmp($post1['date'], $post2['date']);
    }
}
