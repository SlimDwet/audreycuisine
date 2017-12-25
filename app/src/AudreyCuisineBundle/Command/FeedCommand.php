<?php

namespace AudreyCuisineBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use \XMLReader;
use \DOMDocument;
use \DateTime;
use \SimpleXMLElement;
use AudreyCuisineBundle\Entity\Post;
use AudreyCuisineBundle\Entity\Category;
use AudreyCuisineBundle\Entity\User;

class FeedCommand extends ContainerAwareCommand {

    private $output;
    private $xmlFile = '/tmp/audreyCuisineFeed.xml';
    private $doctrine = null;
    private $postRepo = null;
    private $categoryRepo = null;
    private $userRepo = null;
    // Liste des catégories existantes en BDD
    private $existedCategories = [];
    const YEAR_INDEX = 1;
    const MONTH_INDEX = 2;
    const SLUG_INDEX = 3;
    const SITE_URL_IMG = 'https://www.audreycuisine.fr/wp-content/uploads/';
    const POST_AUTHOR = 'Audrey Bourdin';

    protected function configure() {
        $this
            ->setName('feed:start')
            ->setDescription("Looking for new posts")
            ->setHelp("This command check the atom feed looking for new posts...")
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output) {
        $this->output = $output;
        $output->writeln("<info>Check de la configuration...</info>");
        if($this->getContainer()->hasParameter('feed_url')) {
            // On récupère le flux RSS
            $output->writeln("<info>Lecture du flux...</info>");
            $rssContent = file_get_contents($this->getContainer()->getParameter('feed_url'));
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
            $this->categoryRepo = $this->doctrine->getRepository(Category::class);
            $this->userRepo = $this->doctrine->getRepository(User::class);
            $output->writeln("<info>Parsing du XML...</info>");
            // Parsing du fichier
            $this->parseFeed();
            $this->output->writeln('<comment>Traitement du flux terminé</comment>');
        } else $output->writeln("<error>L'URL de feed est manquante</error>");
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
                // On parcourt les articles
                $totalPosts = count($channels->item);
                foreach ($channels->item as $post) {
                    // Cet article est déjà en BDD ?
                    $postTitle = $this->cleanString(strval($post->title));
                    if(!$this->isPostTitleExists($postTitle)) {
                        // On le crée
                        $this->insertNewPost($post);
                        $isCreated++;
                    }
                    $isTreated++;
                    $this->output->writeln('<info>'.$isTreated.'/'.$totalPosts.' article(s) traités</info>');
                }
            }
        }
        $this->output->writeln('<comment>'.$isCreated.' article(s) créés</comment>');
    }

    /**
     * Indique si un article portant le même nom existe déjà
     * @param  string $title [Article à rechercher]
     * @return bool          []
     */
    private function isPostTitleExists(string $title): bool {
        return $this->postRepo->findOneBy(['title' => $this->cleanString($title)]) !== null;
    }

    /**
     * Clean une string en remplacant les caractères non désirés
     * @param  string $str [String à cleaner]
     * @return string      [String cleanée]
     */
    private function cleanString(string $str): string {
        $search = ['’', '<content:encoded>', '</content:encoded>', '&#8217;'];
        $replace = ["'", '<content>', '</content>', "'"];
        return str_replace($search, $replace, $str);
    }

    /**
     * Création d'un article
     * @param  SimpleXMLElement $post [Article à créer]
     * @return []                 []
     */
    private function insertNewPost(SimpleXMLElement $post) {
        // On vérifie si la/les catégories existant
        foreach ($post->category as $cat) {
            $cat = $this->cleanString($cat);
            if(!isset($this->existedCategories[$cat])) {
                if(is_null($this->categoryRepo->findOneBy(['name' => $cat]))) {
                    // Catégorie non existante
                    $this->output->writeln('<error>La catégorie "'.$cat.'" n\'existe pas<error>');
                    exit();
                } else {
                    $this->existedCategories[] = $cat;
                }
            }
        }
        // On crée l'article
        $newPost = new Post();
        $newPost->setTitle($this->cleanString($post->title));
        preg_match('#\/(\d+)\/(\d+)\/(.+)\/#', strval($post->link), $matches);
        if(empty($matches)) {
            $this->output->writeln("<error>Impossible d'extraire le slug du lien</error>");
            exit();
        }
        $newPost->setSlug($matches[self::SLUG_INDEX]);
        $newPost->setContent(strval($post->content));
        $newPost->setIsVisible(1);
        $newPost->setViews(0);
        $publishedDate = strtotime(strval($post->pubDate));
        $newPost->setUpdated(new DateTime("@$publishedDate"));
        $newPost->setUser($this->userRepo->findOneBy(['fullName' => self::POST_AUTHOR]));
        foreach ($post->category as $cat) {
            $cat = $this->cleanString($cat);
            $CategoryEntity = $this->categoryRepo->findOneBy(['name' => $cat]);
            $newPost->addCategory($CategoryEntity);
        }
        // On build l'URL de l'illustration de l'article
        preg_match('#uploads\/(\d+)\/(\d+)\/([\w]+)_z#', strval($post->content), $matches);
        $postImgUrl = self::SITE_URL_IMG.$matches[self::YEAR_INDEX].'/'.$matches[self::MONTH_INDEX].'/'.$matches[self::SLUG_INDEX].'_z-860x450_c.jpg';
        // On check l'existance de l'image
        if(curl_init($postImgUrl) !== false) {
            $newPost->setUrlPostPicture($postImgUrl);
        }
        $postThumbnailImgUrl = self::SITE_URL_IMG.$matches[self::YEAR_INDEX].'/'.$matches[self::MONTH_INDEX].'/'.$matches[self::SLUG_INDEX].'_z-300x225.jpg';
        // On check l'existance de la miniature
        if(curl_init($postThumbnailImgUrl) !== false) {
            $newPost->setUrlPostThumbnail($postThumbnailImgUrl);
        }
        // On insère l'article en BDD
        $em = $this->doctrine->getManager();
        $em->persist($newPost);
        $em->flush();
    }

}
