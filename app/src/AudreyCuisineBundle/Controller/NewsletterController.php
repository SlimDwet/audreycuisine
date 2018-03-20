<?php

namespace AudreyCuisineBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

use AudreyCuisineBundle\Manager\EntityManager;
use AudreyCuisineBundle\Utils\Utils;

class NewsletterController extends Controller
{

    /**
     * Ajoute une adresse mail dans la newsletter
     * @Rest\Post("/newsletter", name="add_newsletter_mail")
     */
    public function addNewsletterMailAction(Request $request) {
        $response = new JsonResponse();
        $em = $this->get('audrey_cuisine.entity_manager');
        // On valide le JSON
        $data = $request->getContent();
        $isValid = $em->addNewsletterMail($data);
        if($isValid['success']) {
            $response->setStatusCode(201);
        } else {
            // Erreur à l'ajout
            $response->setStatusCode(400);
        }
        $response->setData(Utils::formateToOutput($isValid));
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }

}
