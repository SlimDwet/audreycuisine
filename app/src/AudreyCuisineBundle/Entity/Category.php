<?php

namespace AudreyCuisineBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Categories
 *
 * @ORM\Table(name="Category")
 * @ORM\Entity(repositoryClass="AudreyCuisineBundle\Repository\CategoriesRepository")
 */
class Category
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
     * @ORM\Column(name="name", type="string", length=100, options={"comment": "Nom de la catégorie tel qu'il sera affiché"})
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="slug", type="string", length=100, unique=true, options={"comment": "Slug pour l'URL"})
     */
    private $slug;

    /**
     * @var int
     *
     * @ORM\Column(name="level", type="smallint", options={"comment": "Niveau de la catégorie dans l'arborescence"})
     */
    private $level;

    /**
     * @var int
     *
     * @ORM\Column(name="order_item", type="smallint", options={"comment": "Ordre d'affichage de la catégorie"})
     */
    private $orderItem;

    /**
     * @var bool
     *
     * @ORM\Column(name="is_visible", type="boolean", options={"comment": "Affiche ou non cette catégorie"})
     */
    private $isVisible;

    /**
     * @var int
     *
     * @ORM\Column(name="parent_id", type="integer", nullable=true, options={"comment": "ID de la catégorie parente"})
     */
    private $parent_id;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="updated", type="datetime", options={"comment": "Date de la dernière mise à jour de la catégorie"})
     */
    private $updated;

    /**
     * @var [type]
     *
     * @ORM\ManyToMany(targetEntity="Post", mappedBy="category", indexBy="id")
     */
    private $posts;


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
     * @return Categories
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
     * Set slug
     *
     * @param string $slug
     *
     * @return Categories
     */
    public function setSlug($slug)
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * Get slug
     *
     * @return string
     */
    public function getSlug()
    {
        return $this->slug;
    }

    /**
     * Set level
     *
     * @param integer $level
     *
     * @return Categories
     */
    public function setLevel($level)
    {
        $this->level = $level;

        return $this;
    }

    /**
     * Get level
     *
     * @return int
     */
    public function getLevel()
    {
        return $this->level;
    }

    /**
     * Set orderItem
     *
     * @param integer $orderItem
     *
     * @return Categories
     */
    public function setOrderItem($orderItem)
    {
        $this->orderItem = $orderItem;

        return $this;
    }

    /**
     * Get orderItem
     *
     * @return int
     */
    public function getOrderItem()
    {
        return $this->orderItem;
    }

    /**
     * Set isVisible
     *
     * @param boolean $isVisible
     *
     * @return Categories
     */
    public function setIsVisible($isVisible)
    {
        $this->isVisible = $isVisible;

        return $this;
    }

    /**
     * Get isVisible
     *
     * @return bool
     */
    public function getIsVisible()
    {
        return $this->isVisible;
    }

    /**
     * Set updated
     *
     * @param \DateTime $updated
     *
     * @return Categories
     */
    public function setUpdated($updated)
    {
        $this->updated = $updated;

        return $this;
    }

    /**
     * Get updated
     *
     * @return \DateTime
     */
    public function getUpdated()
    {
        return $this->updated;
    }

    /**
     * Set parentId
     *
     * @param integer $parentId
     *
     * @return Categories
     */
    public function setParentId($parentId)
    {
        $this->parent_id = $parentId;

        return $this;
    }

    /**
     * Get parentId
     *
     * @return integer
     */
    public function getParentId()
    {
        return $this->parent_id;
    }
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->posts = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add post
     *
     * @param \AudreyCuisineBundle\Entity\Post $post
     *
     * @return Category
     */
    public function addPost(\AudreyCuisineBundle\Entity\Post $post)
    {
        $this->posts[$post->getId()] = $post;

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
