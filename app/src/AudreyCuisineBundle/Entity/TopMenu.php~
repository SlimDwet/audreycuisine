<?php

namespace AudreyCuisineBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * TopMenu
 *
 * @ORM\Table(name="TopMenu")
 * @ORM\Entity(repositoryClass="AudreyCuisineBundle\Repository\TopMenuRepository")
 */
class TopMenu
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
     * @ORM\Column(name="name", type="string", length=100, options={"comment": "Nom de l'entrée du menu tel qu'il sera affiché sur le site"})
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="slug", type="string", length=100, nullable=true, options={"comment": "Slug pour l'URL"})
     */
    private $slug;

    /**
     * @var int
     *
     * @ORM\Column(name="order_item", type="smallint", unique=true, options={"comment": "Ordre d'affichage"})
     */
    private $orderItem;

    /**
     * @var bool
     *
     * @ORM\Column(name="is_visible", type="boolean", options={"comment": "Affiche ou non cette item dans le top menu"})
     */
    private $isVisible;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="updated", type="datetime", options={"comment": "Date de la dernière modification de l'item"})
     */
    private $updated;


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
     * @return TopMenu
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
     * @return TopMenu
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
     * Set orderItem
     *
     * @param integer $orderItem
     *
     * @return TopMenu
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
     * @return TopMenu
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
     * @return TopMenu
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
}
