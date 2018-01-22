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
use AudreyCuisineBundle\Entity\Category;
use AudreyCuisineBundle\Entity\User;
use AudreyCuisineBundle\Entity\Tag;

class FeedPostCommand extends ContainerAwareCommand {

    private $output;
    private $xmlFile = '/tmp/audreyCuisineFeedPost.xml';
    private $doctrine = null;
    private $postRepo = null;
    private $categoryRepo = null;
    private $userRepo = null;
    private $tagRepo = null;
    private $postIdentifier = null;
    const SITE_BASE_URL = 'https://www.audreycuisine.fr/';
    const POST_AUTHOR = 'AudreyCuisine';
    const SLUG_INDEX = 2;
    // Matching catégories
    private $categoriesMapping = [
        'Sans Gluten' => 'Recettes sans gluten',
        "Recettes d'Italie" => 'Italie'
    ];
    // Liste des catégories/tags existantes en BDD
    private $existedCategoriesTags = [];

    protected function configure() {
        $this
            ->setName('feed:post')
            ->setDescription("Looking for specific post")
            ->setHelp("This command check the atom feed looking for import a specific post (exemple : 2017/12/slug-de-larticle)")
            ->addArgument('postIdentifier', InputArgument::REQUIRED, "The year, month and slug of the post")
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output) {
        $this->output = $output;
        $this->postIdentifier = $input->getArgument('postIdentifier');
        $output->writeln("<info>Check de la configuration...</info>");
        if($this->getContainer()->hasParameter('base_url')) {
            // On récupère le flux RSS de l'article
            $output->writeln("<info>Lecture du flux...</info>");
            $rssContent = file_get_contents($this->getContainer()->getParameter('base_url').$this->postIdentifier.'/feed/?withoutcomments=1');
            // On le clean et on l'écrit dans un fichier
            $cleanedRssContent = $this->cleanString(substr($rssContent, 0, strpos($rssContent, '</rss>')+6));
            // Suppression des tags analytics
            $cleanedRssContent = $this->removeAnalytics($cleanedRssContent);
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
            $this->tagRepo = $this->doctrine->getRepository(Tag::class);
            $output->writeln("<info>Parsing du XML...</info>");
            // Parsing du fichier
            $this->parseFeed();
            $this->output->writeln('<comment>Traitement du flux terminé</comment>');
            unlink($this->xmlFile);
        } else $output->writeln("<error>L'URL du site est manquante</error>");
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
                // On parcourt l'article
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
        $this->output->writeln('<comment>'.$isCreated.' article créé</comment>');
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
     * Création de l'article
     * @param  SimpleXMLElement $post [Article à créer]
     * @return []                 []
     */
    private function insertNewPost(SimpleXMLElement $post) {
        // On vérifie si la/les catégories/tags existant
        foreach ($post->category as $cat) {
            $cat = $this->cleanString($cat);
            if(!isset($this->existedCategoriesTags[$cat])) {
                if(
                    !isset($this->categoriesMapping[$cat]) &&
                    (is_null($this->categoryRepo->findOneBy(['name' => $cat])) && is_null($this->tagRepo->findOneBy(['name' => $cat])))
                ) {
                    // Catégorie non existante
                    $this->output->writeln('<error>La catégorie/tag "'.$cat.'" n\'existe pas<error>');
                    exit();
                } else {
                    $this->existedCategoriesTags[] = $cat;
                }
            }
        }
        // On crée l'article
        $newPost = new Post();
        $newPost->setTitle($this->cleanString($post->title));
        // Extraction du slug
        $postIdentifier = explode('/', $this->postIdentifier);
        $newPost->setSlug($postIdentifier[self::SLUG_INDEX]);
        $newPost->setContent($this->cleanString(html_entity_decode(strval($post->content))));
        $newPost->setIsVisible(1);
        $newPost->setViews(0);
        $publishedDate = strtotime(strval($post->pubDate));
        $newPost->setUpdated(new DateTime("@$publishedDate"));
        $newPost->setUser($this->userRepo->findOneBy(['fullName' => self::POST_AUTHOR]));
        foreach ($post->category as $cat) {
            $cat = isset($this->categoriesMapping[strval($cat)]) ? $this->categoriesMapping[strval($cat)] : $this->cleanString(strval($cat));
            // Ajout de la catégorie/tag
            if($CategoryEntity = $this->categoryRepo->findOneBy(['name' => $cat])) {
                $newPost->addCategory($CategoryEntity);
            } elseif($TagEntity = $this->tagRepo->findOneBy(['name' => $cat])) {
                $newPost->addTag($TagEntity);
            }
        }
        // On insère l'article en BDD
        $em = $this->doctrine->getManager();
        $em->persist($newPost);
        $em->flush();
    }

    /**
     * Clean une string en remplacant les caractères non désirés
     * @param  string $str [String à cleaner]
     * @return string      [String cleanée]
     */
    private function cleanString(string $str): string {
        $search = ['’', '<content:encoded>', '</content:encoded>', '&#8217;', '🙂', '…'];
        $replace = ["'", '<content>', '</content>', "'", "", '...'];
        return str_replace($search, $replace, $str);
    }

    /**
     * Supprime les tags analytics
     * @param  string $str [Chaine contenant les tags analytics]
     * @return string      [Chaine sans les tags analytics]
     */
    private function removeAnalytics(string $str): string {
        $start = strpos($str, '<script async');
        if($start === false) return $str;
        $length = strpos($str, '</script></p>')+9 - $start;
        $analytics = substr($str, $start, $length);
        return str_replace($analytics, "", $str, $count);
    }

}
