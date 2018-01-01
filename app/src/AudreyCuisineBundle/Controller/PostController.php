<?php

namespace AudreyCuisineBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\JsonResponse;

use AudreyCuisineBundle\Entity\Post;

class PostController extends Controller
{

    /**
     * Retourne les 4 derniers articles postés
     * @Rest\Get("/posts/last-posts.{_format}", name="last_posts", defaults={"_format": "json"})
     *
     * @param  Request $request [Objet Request]
     * @return JsonResponse           [description]
     */
    public function getLastPostsAction(Request $request): JsonResponse {
        $response = new JsonResponse();
        $repository = $this->getDoctrine()->getRepository(Post::class);
        // On récupère les derniers articles postés
        $lastPosts = array('data' => $repository->getLastPosts());
        $response->setData($lastPosts);
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }

    /**
     * Récupère un article à partir de son slug
     * @Rest\Get("/posts/{slug}.{_format}", name="get_post", defaults={"_format": "json"}, requirements={"slug": "[\w-]+"})
     * @param  Request $request [Objet Request]
     * @param  string $slug [Slug de l'article]
     * @return JsonResponse           [description]
     */
    public function getPostAction(Request $request, string $slug): JsonResponse {
        $response = new JsonResponse();
        $postRepository = $this->getDoctrine()->getRepository(Post::class);
        // On récupère l'article
        $post = $postRepository->getPostBySlug($slug);
        if(!is_null($post)) {
            $response->setData(['data' => $post]);
            $response->headers->set('Access-Control-Allow-Origin', '*');
        } else {
            $response->setData(['Erreur' => "Impossible de retrouver cet article"]);
            $response->setStatusCode(404);
        }
        return $response;
    }

    /**
     * Retourne les archives
     * @Rest\Get("/archives/{page}.{_format}", name="get_archives", defaults={"_format": "json", "page": 1}, requirements={"page": "\d+"})
     *
     * @param  Request $request [Objet Request]
     * @return JsonResponse           [description]
     */
    public function getArchivesAction(Request $request, int $page): JsonResponse {
        $response = new JsonResponse();
        $response->setData(['data' => "archives page $page"]);
        return $response;
    }

}
