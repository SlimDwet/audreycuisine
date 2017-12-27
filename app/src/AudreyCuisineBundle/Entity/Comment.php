<?php

namespace AudreyCuisineBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Comment
 *
 * @ORM\Table(name="Comment")
 * @ORM\Entity(repositoryClass="AudreyCuisineBundle\Repository\CommentRepository")
 */
class Comment
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
     * @ORM\Column(name="content", type="text", options={"comment": "Contenu du commentaire"})
     */
    private $content;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255, options={"comment": "Nom complet de l'auteur du commentaire"})
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=255, options={"comment": "Email de l'auteur du commentaire"})
     */
    private $email;

    /**
     * @var [type]
     *
     * @ORM\ManyToOne(targetEntity="Post", inversedBy="comments")
     */
    private $post;

    /**
     * Etre prévenu de tous les nouveaux commentaires par mail
     * @var [type]
     *
     * @ORM\Column(name="mailAlert", type="boolean", options={"comment": "Etre prévenu des nouveaux commentaires par mail"})
     */
    private $mailAlert;

    /**
     * Etre prévenu de tous les articles par mail
     * @var [type]
     *
     * @ORM\Column(name="mailPost", type="boolean", options={"comment": "Etre prévenu des nouveaux articles par mail"})
     */
    private $mailPost;

    /**
     * Date de publication du commentaire
     * @var [type]
     *
     * @ORM\Column(name="published", type="date", options={"comment": "Date de publication"})
     */
    private $published;


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
     * Set content
     *
     * @param string $content
     *
     * @return Comment
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
     * Set name
     *
     * @param string $name
     *
     * @return Comment
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
     * Set email
     *
     * @param string $email
     *
     * @return Comment
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set post
     *
     * @param \AudreyCuisineBundle\Entity\Post $post
     *
     * @return Comment
     */
    public function setPost(\AudreyCuisineBundle\Entity\Post $post = null)
    {
        $this->post = $post;

        return $this;
    }

    /**
     * Get post
     *
     * @return \AudreyCuisineBundle\Entity\Post
     */
    public function getPost()
    {
        return $this->post;
    }

    /**
     * Set mailAlert
     *
     * @param boolean $mailAlert
     *
     * @return Comment
     */
    public function setMailAlert($mailAlert)
    {
        $this->mailAlert = $mailAlert;

        return $this;
    }

    /**
     * Get mailAlert
     *
     * @return boolean
     */
    public function getMailAlert()
    {
        return $this->mailAlert;
    }

    /**
     * Set mailPost
     *
     * @param boolean $mailPost
     *
     * @return Comment
     */
    public function setMailPost($mailPost)
    {
        $this->mailPost = $mailPost;

        return $this;
    }

    /**
     * Get mailPost
     *
     * @return boolean
     */
    public function getMailPost()
    {
        return $this->mailPost;
    }

    /**
     * Set published
     *
     * @param \DateTime $published
     *
     * @return Comment
     */
    public function setPublished($published)
    {
        $this->published = $published;

        return $this;
    }

    /**
     * Get published
     *
     * @return \DateTime
     */
    public function getPublished()
    {
        return $this->published;
    }
}
