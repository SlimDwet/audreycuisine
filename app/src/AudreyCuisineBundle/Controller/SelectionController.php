<?php

namespace AudreyCuisineBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

use AudreyCuisineBundle\Entity\Selection;

class SelectionController extends Controller
{

    /**
     * Retourne les 4 derniers articles postés
     * @Route("/selections", name="all_selections")
     */
    public function getSelections(Request $request) {
        $response = new JsonResponse();
        $repository = $this->getDoctrine()->getRepository(Selection::class);
        // On récupère les sélections
        $selections = array('data' => $repository->getSelections());
        $response->setData($selections);
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }

}
