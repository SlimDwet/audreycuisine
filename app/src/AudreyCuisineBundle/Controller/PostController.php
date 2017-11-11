<?php

namespace AudreyCuisineBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

use AudreyCuisineBundle\Entity\Post;

class PostController extends Controller
{

    /**
     * Retourne les 4 derniers articles postés
     * @Route("/category/last-posts", name="last_posts")
     */
    public function getLastPosts(Request $request) {
        $response = new JsonResponse();
        $repository = $this->getDoctrine()->getRepository(Post::class);
        // On récupère les derniers articles postés
        $lastPosts = array('data' => $repository->getLastPosts());
        $response->setData($lastPosts);
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }

}
