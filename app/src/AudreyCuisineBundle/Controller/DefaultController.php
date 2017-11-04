<?php

namespace AudreyCuisineBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

use AudreyCuisineBundle\Entity\TopMenu;
use AudreyCuisineBundle\Entity\Categories;

class DefaultController extends Controller
{
    /**
     * @Route("/")
     */
    public function indexAction()
    {
        $repository = $this->getDoctrine()->getRepository(Categories::class);
        $repository->getTree();
        return $this->render('AudreyCuisineBundle:Default:index.html.twig');
    }
}
