<?php

namespace AudreyCuisineBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\JsonResponse;

use AudreyCuisineBundle\Manager\EntityManager;
use AudreyCuisineBundle\Utils\Utils;
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
        $em = new EntityManager($this->getDoctrine());
        // On récupère les derniers articles postés
        $lastPosts = $em->getLastPosts();
        $response->setData(Utils::formateToOutput($lastPosts));
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
        $em = new EntityManager($this->getDoctrine());
        if(!is_null($post = $em->getPostBySlug($slug))) {
            $response->setData(Utils::formateToOutput($post));
            $response->headers->set('Access-Control-Allow-Origin', '*');
        } else {
            $response->setData(Utils::formateToErrorOutput("Impossible de retrouver cet article"));
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

    /**
     * Recherche d'articles
     * @Rest\Get("/search/{terms}.{_format}", name="post_search", defaults={"_format": "json"})
     *
     * @param  Request      $request [Objet Request]
     * @param  string       $terms   [Termes recherchés]
     * @return JsonResponse          [description]
     */
    public function searchTermsAction(Request $request, string $terms): JsonResponse {
        $response = new JsonResponse();
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $em = new EntityManager($this->getDoctrine());
        $searchResult = $em->getPostsBySearchedTerms($terms);
        if(!empty($searchResult)) {
            $response->setData(Utils::formateToOutput($searchResult));
        } else {
            $response->setData(Utils::formateToErrorOutput("Aucun article correspond à la recherche"));
            $response->setStatusCode(404);
        }
        return $response;
    }

    /**
     * Retourne les articles d'une catégorie
     *
     * @Rest\Get("/category/{slug}.{_format}", name="get_posts_category", defaults={"_format": "json"}, requirements={"slug": "[\w-]+"})
     * @param  Request      $request      [description]
     * @param  string       $categorySlug [description]
     * @return JsonResponse               [description]
     */
    public function getPostsInCategoryAction(Request $request, string $slug): JsonResponse {
        $response = new JsonResponse();
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $em = new EntityManager($this->getDoctrine());
        // Récupération des articles
        $postResult = $em->getPostsInCategory($slug);
        if(!empty($postResult)) {
            $response->setData(Utils::formateToOutput($postResult));
        } else {
            $response->setData(Utils::formateToErrorOutput("Aucun article trouvé dans cette catégorie"));
            $response->setStatusCode(404);
        }
        return $response;
    }

    /**
     * Retourne les articles correspondant aux ingrédients
     * @Rest\Get("/ingredients.{_format}",
     *      defaults={"_format": "json"}
     * )
     *
     * @param  Request      $request     [description]
     * @return JsonResponse              [description]
     */
    public function getPostsByIngredients(Request $request): JsonResponse {
        $response = new JsonResponse();
        $ingredient1 = $request->query->get('ingredient1');
        $ingredient2 = $request->query->get('ingredient2');
        $ingredient3 = $request->query->get('ingredient3');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $em = new EntityManager($this->getDoctrine());
        // Récupération des articles
        $posts = $em->getPostsByIngredients($ingredient1, $ingredient2, $ingredient3);
        $response->setData(Utils::formateToOutput($posts));
        return $response;
    }

}
