<?php

namespace AudreyCuisineBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Selection
 *
 * @ORM\Table(name="Selection")
 * @ORM\Entity(repositoryClass="AudreyCuisineBundle\Repository\SelectionRepository")
 */
class Selection
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=100, options={"comment": "Nom de la sélection"})
     */
    private $name;

    /**
     * @var int
     *
     * @ORM\Column(name="selectionOrder", type="integer", options={"comment": "Order de la sélection dans l'affichage"})
     */
    private $selectionOrder;

    /**
     * @var [type]
     *
     * @ORM\ManyToMany(targetEntity="Post")
     * @ORM\JoinTable(name="selection_post",
     *      joinColumns={@ORM\JoinColumn(name="selection_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="post_id", referencedColumnName="id", unique=true)}
     * )
     */
    private $posts;

    public function __construct() {
        $this->posts = new \Doctrine\Common\Collections\ArrayCollection();
    }


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return Selection
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set selectionOrder
     *
     * @param integer $selectionOrder
     *
     * @return Selection
     */
    public function setSelectionOrder($selectionOrder)
    {
        $this->selectionOrder = $selectionOrder;

        return $this;
    }

    /**
     * Get selectionOrder
     *
     * @return int
     */
    public function getSelectionOrder()
    {
        return $this->selectionOrder;
    }

    /**
     * Add post
     *
     * @param \AudreyCuisineBundle\Entity\Post $post
     *
     * @return Selection
     */
    public function addPost(\AudreyCuisineBundle\Entity\Post $post)
    {
        $this->posts[] = $post;

        return $this;
    }

    /**
     * Remove post
     *
     * @param \AudreyCuisineBundle\Entity\Post $post
     */
    public function removePost(\AudreyCuisineBundle\Entity\Post $post)
    {
        $this->posts->removeElement($post);
    }

    /**
     * Get posts
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getPosts()
    {
        return $this->posts;
    }
}
