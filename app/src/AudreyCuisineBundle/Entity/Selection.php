<?php

namespace AudreyCuisineBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Category;

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
     * @ORM\Column(name="name", type="string", length=100, nullable=true, options={"comment": "Nom de la sélection"})
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
     * @ORM\OneToOne(targetEntity="Category")
     * @ORM\JoinColumn(name="category_id", referencedColumnName="id")
     */
    private $category;

    public function __construct() {
        //
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
     * Set category
     *
     * @param Category $category
     *
     * @return Selection
     */
    public function setCategory(Category $category = null)
    {
        $this->category = $category;

        return $this;
    }

    /**
     * Get category
     *
     * @return Category
     */
    public function getCategory()
    {
        return $this->category;
    }
}
