<?php

namespace AudreyCuisineBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Post
 *
 * @ORM\Table(name="Post")
 * @ORM\Entity(repositoryClass="AudreyCuisineBundle\Repository\PostRepository")
 */
class Post
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
     * @ORM\Column(name="title", type="string", length=255, unique=true, options={"comment": "Titre de l'article"})
     */
    private $title;

    /**
     * @var string
     *
     * @ORM\Column(name="slug", type="string", length=255, unique=true, options={"comment": "Slug pour l'URL"})
     */
    private $slug;

    /**
     * @var string
     *
     * @ORM\Column(name="content", type="text", nullable=true, options={"comment": "Contenu de l'article"})
     */
    private $content;

    /**
     * @var bool
     *
     * @ORM\Column(name="is_visible", type="boolean", options={"comment": "Affiche ou non l'article"})
     */
    private $isVisible;

    /**
     * @var string
     *
     * @ORM\Column(name="urlPostPicture", type="string", length=255, nullable=true, options={"comment": "URL vers la photo d'illustration de l'article"})
     */
    private $urlPostPicture;

    /**
     * @var string
     *
     * @ORM\Column(name="urlPostThumbnail", type="string", length=255, nullable=true, options={"comment": "URL vers la photo miniature de l'article"})
     */
    private $urlPostThumbnail;

    /**
     * @var int
     *
     * @ORM\ManyToOne(targetEntity="User", inversedBy="posts")
     */
    private $user;

    /**
     * @var [type]
     *
     * @ORM\ManyToMany(targetEntity="Category", inversedBy="posts", indexBy="id")
     */
    private $category;

    /**
     * @var [type]
     *
     * @ORM\ManyToMany(targetEntity="Tag", inversedBy="tags")
     */
    private $tags;

    /**
     * @var [type]
     *
     * @ORM\OneToMany(targetEntity="Comment", mappedBy="post")
     * @ORM\OrderBy({"published": "ASC", "id": "ASC"})
     */
    private $comments;

    /**
     * @var int
     *
     * @ORM\Column(name="views", type="integer", options={"comment": "Nombre de consultations de l'article"})
     */
    private $views;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="updated", type="datetimetz", options={"comment": "Date de la dernière mise à jour de l'article"})
     */
    private $updated;

    public function __construct() {
        $this->tags = new ArrayCollection();
        $this->comments = new ArrayCollection();
        $this->category = new ArrayCollection();
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
     * Set title
     *
     * @param string $title
     *
     * @return Post
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set slug
     *
     * @param string $slug
     *
     * @return Post
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
     * Set content
     *
     * @param string $content
     *
     * @return Post
     */
    public function setContent($content)
    {
        $this->content = $content;

        return $this;
    }

    /**
     * Get content
     *
     * @return string
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * Set isVisible
     *
     * @param boolean $isVisible
     *
     * @return Post
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
     * Set views
     *
     * @param integer $views
     *
     * @return Post
     */
    public function setViews($views)
    {
        $this->views = $views;

        return $this;
    }

    /**
     * Get views
     *
     * @return int
     */
    public function getViews()
    {
        return $this->views;
    }

    /**
     * Set updated
     *
     * @param \DateTime $updated
     *
     * @return Post
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
     * Set user
     *
     * @param \AudreyCuisineBundle\Entity\User $user
     *
     * @return Post
     */
    public function setUser(\AudreyCuisineBundle\Entity\User $user = null)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get user
     *
     * @return \AudreyCuisineBundle\Entity\User
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * Add tag
     *
     * @param \AudreyCuisineBundle\Entity\Tag $tag
     *
     * @return Post
     */
    public function addTag(\AudreyCuisineBundle\Entity\Tag $tag)
    {
        $this->tags[] = $tag;

        return $this;
    }

    /**
     * Remove tag
     *
     * @param \AudreyCuisineBundle\Entity\Tag $tag
     */
    public function removeTag(\AudreyCuisineBundle\Entity\Tag $tag)
    {
        $this->tags->removeElement($tag);
    }

    /**
     * Get tags
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getTags()
    {
        return $this->tags;
    }

    /**
     * Add comment
     *
     * @param \AudreyCuisineBundle\Entity\Comment $comment
     *
     * @return Post
     */
    public function addComment(\AudreyCuisineBundle\Entity\Comment $comment)
    {
        $this->comments[] = $comment;

        return $this;
    }

    /**
     * Remove comment
     *
     * @param \AudreyCuisineBundle\Entity\Comment $comment
     */
    public function removeComment(\AudreyCuisineBundle\Entity\Comment $comment)
    {
        $this->comments->removeElement($comment);
    }

    /**
     * Get comments
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getComments()
    {
        return $this->comments;
    }

    /**
     * Add category
     *
     * @param \AudreyCuisineBundle\Entity\Category $category
     *
     * @return Post
     */
    public function addCategory(\AudreyCuisineBundle\Entity\Category $category)
    {
        $this->category[$category->getId()] = $category;

        return $this;
    }

    /**
     * Remove category
     *
     * @param \AudreyCuisineBundle\Entity\Category $category
     */
    public function removeCategory(\AudreyCuisineBundle\Entity\Category $category)
    {
        $this->category->removeElement($category);
    }

    /**
     * Get category
     *
     * @return \AudreyCuisineBundle\Entity\Category
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * Set urlPostPicture
     *
     * @param string $urlPostPicture
     *
     * @return Post
     */
    public function setUrlPostPicture($urlPostPicture)
    {
        $this->urlPostPicture = $urlPostPicture;

        return $this;
    }

    /**
     * Get urlPostPicture
     *
     * @return string
     */
    public function getUrlPostPicture()
    {
        return $this->urlPostPicture;
    }

    /**
     * Set urlPostThumbnail
     *
     * @param string $urlPostThumbnail
     *
     * @return Post
     */
    public function setUrlPostThumbnail($urlPostThumbnail)
    {
        $this->urlPostThumbnail = $urlPostThumbnail;

        return $this;
    }

    /**
     * Get urlPostThumbnail
     *
     * @return string
     */
    public function getUrlPostThumbnail()
    {
        return $this->urlPostThumbnail;
    }
}
