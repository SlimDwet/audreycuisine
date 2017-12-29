<?php

namespace AudreyCuisineBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Output\OutputInterface;
use \XMLReader;
use \DOMDocument;
use \DateTime;
use \SimpleXMLElement;
use AudreyCuisineBundle\Entity\Post;
use AudreyCuisineBundle\Entity\Comment;

class FeedCommentsCommand extends ContainerAwareCommand {

    private $output;
    private $xmlFile = '/tmp/audreyCuisineFeedComments.xml';
    private $doctrine = null;
    private $postRepo = null;
    private $commentRepo = null;
    const POST_TITLE_INDEX = 1;

    protected function configure() {
        $this
            ->setName('feed:comments')
            ->setDescription("Looking for post's comments")
            ->setHelp("This command check the atom feed looking for import comments")
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output) {
        $this->output = $output;
        $output->writeln("<info>Check de la configuration...</info>");
        if($this->getContainer()->hasParameter('feed_comments_url')) {
            // On récupère le flux RSS des commentaires
            $output->writeln("<info>Lecture du flux...</info>");
            $rssContent = file_get_contents($this->getContainer()->getParameter('feed_comments_url'));
            // On le clean et on l'écrit dans un fichier
            $cleanedRssContent = $this->cleanString(substr($rssContent, 0, strpos($rssContent, '</rss>')+6));
            if(file_put_contents($this->xmlFile, $cleanedRssContent) === false) {
                $output->writeln("<error>Erreur à l'écriture du flux dans le fichier</error>");
                exit();
            }
            $output->writeln("<comment>Flux écrit avec succès</comment>");

            // Instance doctrine
            $this->doctrine = $this->getContainer()->get('doctrine');
            $this->postRepo = $this->doctrine->getRepository(Post::class);
            $this->commentRepo = $this->doctrine->getRepository(Comment::class);
            $output->writeln("<info>Parsing du XML...</info>");
            // Parsing du fichier
            $this->parseFeed();
            $this->output->writeln('<comment>Traitement du flux terminé</comment>');
            unlink($this->xmlFile);
        } else $output->writeln("<error>L'URL de commentaires est manquante</error>");
    }

    /**
     * Parsing du XML
     * @return [type] [description]
     */
    private function parseFeed() {
        $xmlReader = new XMLReader();
        // Ouverture du fichier XML
        $xmlReader->open($this->xmlFile);
        $doc = new DOMDocument();
        $isTreated = $isCreated = 0;
        while($xmlReader->read()) {
            if($xmlReader->name === 'channel') {
                $channels = simplexml_import_dom($doc->importNode($xmlReader->expand(), true));
                // On parcourt les commentaires
                $totalComments = count($channels->item);
                foreach ($channels->item as $comment) {
                    // Ce commentaire est déjà en BDD ?
                    $commentDesc = $this->cleanString(strval($comment->description));
                    if(!$this->isCommentExists($commentDesc)) {
                        // On le crée
                        $this->insertNewComment($comment);
                        $isCreated++;
                    }
                    $isTreated++;
                    $this->output->writeln('<info>'.$isTreated.'/'.$totalComments.' commentaire(s) traités</info>');
                }
            }
        }
        $this->output->writeln('<comment>'.$isCreated.' commentaire(s) créés</comment>');
    }

    /**
     * Indique si un commentaire existe déjà
     * @param  string $content [Commentaire à rechercher]
     * @return bool          []
     */
    private function isCommentExists(string $content): bool {
        return $this->commentRepo->findOneBy(['content' => $this->cleanString($content)]) !== null;
    }

    /**
     * Création du commentaire
     * @param  SimpleXMLElement $comment [Commentaire à créer]
     * @return []                 []
     */
    private function insertNewComment(SimpleXMLElement $comment) {
        // On vérifie l'article
        preg_match('#Commentaires sur (.+) par#', $this->cleanString($comment->title), $matches);
        $postTitle = $matches[self::POST_TITLE_INDEX];
        $post = $this->postRepo->findOneBy(['title' => $postTitle]);
        if(is_null($post)) {
            $this->output->writeln("<error>L'article \"".$postTitle."\" n'existe pas.</error>");
            exit();
        }

        // On crée le commentaire
        $newComment = new Comment();
        $newComment->setName($this->cleanString(strval($comment->creator)));
        $newComment->setContent($this->cleanString(strval($comment->description)));
        $publishedDate = strtotime(strval($comment->pubDate));
        $newComment->setPublished(new DateTime("@$publishedDate"));
        $newComment->setPost($post);
        $newComment->setMailPost(0);
        $newComment->setMailAlert(0);
        // On insère le commentaire en BDD
        $em = $this->doctrine->getManager();
        $em->persist($newComment);
        $em->flush();
    }

    /**
     * Clean une string en remplacant les caractères non désirés
     * @param  string $str [String à cleaner]
     * @return string      [String cleanée]
     */
    private function cleanString(string $str): string {
        $search = ['’', '<content:encoded>', '</content:encoded>', '&#8217;', '🙂', '&#039;', '<dc:creator>', '</dc:creator>'];
        $replace = ["'", '<content>', '</content>', "'", "", "'", '<creator>', '</creator>'];
        return str_replace($search, $replace, $str);
    }

}
