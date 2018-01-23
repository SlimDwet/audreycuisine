<?php

namespace AudreyCuisineBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

use AudreyCuisineBundle\Manager\EntityManager;
use AudreyCuisineBundle\Utils\Utils;

class SelectionController extends Controller
{

    /**
     * Retourne les 4 derniers articles postés
     * @Rest\Get("/selections", name="all_selections")
     */
    public function getSelections(Request $request) {
        $response = new JsonResponse();
        $em = new EntityManager($this->getDoctrine());
        // On récupère les sélections
        $selections = $em->getSelections();
        $response->setData(Utils::formateToOutput($selections));
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }

}
