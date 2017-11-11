-- phpMyAdmin SQL Dump
-- version 4.7.5
-- https://www.phpmyadmin.net/
--
-- Hôte : mariadb:3306
-- Généré le :  sam. 11 nov. 2017 à 12:27
-- Version du serveur :  10.2.9-MariaDB-10.2.9+maria~jessie
-- Version de PHP :  7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `audreycuisine.fr`
--

-- --------------------------------------------------------

--
-- Structure de la table `Category`
--

CREATE TABLE `Category` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Nom de la catégorie tel qu''il sera affiché',
  `slug` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Slug pour l''URL',
  `level` smallint(6) NOT NULL COMMENT 'Niveau de la catégorie dans l''arborescence',
  `order_item` smallint(6) NOT NULL COMMENT 'Ordre d''affichage de la catégorie',
  `is_visible` tinyint(1) NOT NULL COMMENT 'Affiche ou non cette catégorie',
  `parent_id` int(11) DEFAULT NULL COMMENT 'ID de la catégorie parente',
  `updated` datetime NOT NULL COMMENT 'Date de la dernière mise à jour de la catégorie'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `Category`
--

INSERT INTO `Category` (`id`, `name`, `slug`, `level`, `order_item`, `is_visible`, `parent_id`, `updated`) VALUES
(1, 'Brunchs', 'brunchs', 1, 1, 1, NULL, '2017-10-29 15:32:33'),
(2, 'Sucré', 'recettes-sucrees', 1, 2, 1, NULL, '2017-10-29 15:32:33'),
(3, 'Salé', 'recettes-salees', 1, 3, 1, NULL, '2017-10-29 15:32:33'),
(4, 'Exotique', 'recettes-du-monde', 1, 4, 1, NULL, '2017-10-29 15:32:33'),
(5, 'Bio & végé', 'bio-vege', 1, 5, 1, NULL, '2017-10-29 15:32:33'),
(6, 'Autres recettes', 'recettes-salees/autres-recettes', 1, 6, 1, NULL, '2017-10-29 15:32:33'),
(7, 'Dans ma cuisine', 'dans-ma-cuisine', 1, 7, 1, NULL, '2017-10-29 15:32:33'),
(8, 'Voyages', 'voyages', 1, 8, 1, NULL, '2017-10-29 15:32:33'),
(9, 'Bonnes adresses', 'adresses-gourmandes', 1, 9, 1, NULL, '2017-10-29 15:32:33'),
(19, 'Brunch salé', 'brunch-sale', 2, 1, 1, 1, '2017-10-29 15:44:36'),
(20, 'Brunch sucré', 'brunch-sucre', 2, 2, 1, 1, '2017-10-29 15:44:36'),
(21, 'Crêpes, gaufres & pancakes', 'crepes', 2, 3, 1, 1, '2017-10-29 15:44:36'),
(22, 'Porridges, muesli et granolas', 'muesli-granola', 2, 4, 1, 1, '2017-10-29 15:44:36'),
(23, 'Viennoiseries', 'viennoiseries', 2, 5, 1, 1, '2017-10-29 15:44:36'),
(24, 'Yaourts', 'yaourts', 2, 6, 1, 1, '2017-10-29 15:44:36'),
(25, 'Smoothies et jus de fruits', 'smoothies', 2, 7, 1, 1, '2017-10-29 15:44:36'),
(26, 'Boissons chaudes', 'boissons-chaudes', 2, 8, 1, 1, '2017-10-29 15:44:36'),
(27, 'Thés', 'thes', 2, 9, 1, 1, '2017-10-29 15:44:36'),
(28, 'Gateaux', 'desserts-partager/gateaux-desserts-partager', 2, 1, 1, 2, '2017-11-03 15:29:11'),
(29, 'Bavarrois', 'desserts-partager/bavarrois', 2, 2, 1, 2, '2017-11-03 15:29:11'),
(30, 'Cheesecake', 'desserts-partager/cheesecake', 2, 3, 1, 2, '2017-11-03 15:29:11'),
(31, 'Tarte sucrées', 'desserts-partager/tartes-sucrees', 2, 4, 1, 2, '2017-11-03 15:29:11'),
(32, 'Desserts à partager', 'desserts-partager', 2, 5, 1, 2, '2017-11-03 15:29:11'),
(33, 'Desserts individuelles', 'desserts-individuels', 2, 6, 1, 2, '2017-11-03 15:29:11'),
(34, 'Goûters', 'gouters', 2, 7, 1, 2, '2017-11-03 15:29:11'),
(35, 'Galette des rois', 'galettes-des-rois', 3, 1, 1, 32, '2017-11-03 15:32:24'),
(36, 'Gâteaux au chocolat', 'gateaux-chocolats', 3, 2, 1, 32, '2017-11-03 15:32:24'),
(37, 'Gâteaux d\'anniversaire', 'gateaux-danniversaire', 3, 3, 1, 32, '2017-11-03 15:32:24'),
(38, 'Desserts servis à l\'assiette', 'dessert-assiette', 3, 1, 1, 33, '2017-11-03 15:37:46'),
(39, 'Crèmes, mousses, flans', 'cremes-mousses', 3, 2, 1, 33, '2017-11-03 15:37:46'),
(40, 'Desserts à base de fruits', 'desserts-a-base-de-fruits', 3, 3, 1, 33, '2017-11-03 15:37:46'),
(41, 'Desserts végétaux', 'desserts-vegetaux', 3, 4, 1, 33, '2017-11-03 15:37:46'),
(42, 'Glaces et sorbets', 'glaces', 3, 5, 1, 33, '2017-11-03 15:37:46'),
(43, 'Muffins, cupcakes, mini-cakes', 'muffins-cupcakes-mini-cakes', 3, 1, 1, 34, '2017-11-03 15:40:52'),
(44, 'Biscuits', 'biscuits', 3, 2, 1, 34, '2017-11-03 15:40:52'),
(45, 'Cakes sucrés', 'cakes-sucres', 3, 3, 1, 34, '2017-11-03 15:40:52'),
(46, 'Confiseries', 'confiseries', 3, 4, 1, 34, '2017-11-03 15:40:52'),
(47, 'Début de repas', 'debug-de-repas', 2, 1, 1, 2, '2017-11-03 15:43:49'),
(48, 'Viande ou poisson', 'viande-ou-poisson', 2, 2, 1, 2, '2017-11-03 15:43:49'),
(49, 'Accompagnements', 'accompagnements', 2, 3, 1, 2, '2017-11-03 15:43:49'),
(50, 'Plats complets', 'plats-complets', 2, 4, 1, 2, '2017-11-03 15:43:49'),
(51, 'Pains', 'pains', 2, 5, 1, 2, '2017-11-03 15:43:49'),
(52, 'Apéro', 'apero', 3, 1, 1, 47, '2017-11-03 15:47:15'),
(53, 'Cocktails', 'cocktails', 3, 2, 1, 47, '2017-11-03 15:47:15'),
(54, 'Cakes salés', 'cakes-sales', 3, 3, 1, 47, '2017-11-03 15:47:15'),
(55, 'Entrée', 'entree', 3, 4, 1, 47, '2017-11-03 15:47:15'),
(56, 'Soupes', 'soupes', 3, 5, 1, 47, '2017-11-03 15:47:15'),
(57, 'Terrine', 'terrine', 3, 6, 1, 47, '2017-11-03 15:47:15'),
(58, 'Viande', 'viande', 3, 1, 1, 48, '2017-11-03 16:47:27'),
(59, 'Volaille', 'volaille', 3, 2, 1, 48, '2017-11-03 16:47:27'),
(60, 'Poisson', 'poisson', 3, 3, 1, 48, '2017-11-03 16:47:27'),
(61, 'Avec des oeufs', 'avec-des-oeufs', 3, 4, 1, 48, '2017-11-03 16:47:27'),
(62, 'Légumes', 'legumes', 3, 1, 1, 49, '2017-11-03 16:51:05'),
(63, 'Légumineuses', 'legumineuses', 3, 2, 1, 49, '2017-11-03 16:51:05'),
(64, 'Féculents et céréales', 'feculents-et-cereales', 3, 3, 1, 49, '2017-11-03 16:51:05'),
(65, 'Pâtes', 'pates', 3, 4, 1, 49, '2017-11-03 16:51:05'),
(66, 'Pommes de terre', 'pommes-de-terre', 3, 5, 1, 49, '2017-11-03 16:51:05'),
(67, 'Autres céréales', 'autres-cereales', 3, 6, 1, 49, '2017-11-03 16:51:05'),
(68, 'Riz', 'riz', 3, 7, 1, 49, '2017-11-03 16:51:05'),
(69, 'Sauces', 'sauces', 3, 8, 1, 49, '2017-11-03 16:51:05'),
(70, 'Salades composées', 'salades-composees', 3, 1, 1, 50, '2017-11-03 16:53:38'),
(71, 'Quiches', 'quiches', 3, 2, 1, 50, '2017-11-03 16:53:38'),
(72, 'Plat complet', 'plat-complet', 3, 3, 1, 50, '2017-11-03 16:53:38'),
(73, 'Tartines & croques', 'tartines-croques', 3, 4, 1, 50, '2017-11-03 16:53:38'),
(74, 'Recettes d\'Afrique du Nord', 'recettes-dafrique-du-nord', 2, 1, 1, 4, '2017-11-03 17:00:10'),
(75, 'Recettes d\'Amérique du Nord', 'recettes-damerique-du-nord', 2, 2, 1, 4, '2017-11-03 17:00:10'),
(76, 'Recettes d\'Amérique du Nord', 'recettes-damerique-du-sud', 2, 3, 1, 4, '2017-11-03 17:00:10'),
(77, 'Asie', 'asie', 2, 4, 1, 4, '2017-11-03 17:00:10'),
(78, 'Recettes créoles', 'recettes-creoles', 2, 5, 1, 4, '2017-11-03 17:00:10'),
(79, 'Moyen Orient', 'moyen-orient', 2, 6, 1, 4, '2017-11-03 17:00:10'),
(80, 'Europe', 'europe', 2, 7, 1, 4, '2017-11-03 17:00:10'),
(81, 'Cuisine Canadienne', 'cuisine-canadienne', 3, 1, 1, 76, '2017-11-03 17:02:21'),
(82, 'Cuisine des Etats-Unis', 'cuisine-des-etats-unis', 3, 2, 1, 76, '2017-11-03 17:02:21'),
(83, 'Cuisine Cambodgienne', 'cuisine-cambodgienne', 3, 1, 1, 77, '2017-11-03 17:07:41'),
(84, 'Cuisine Coréenne', 'cuisine-coreenne', 3, 2, 1, 77, '2017-11-03 17:07:41'),
(85, 'Cuisine indienne', 'cuisine-indienne', 3, 3, 1, 77, '2017-11-03 17:07:41'),
(86, 'Cuisine indonésienne', 'cuisine-indonesienne', 3, 4, 1, 77, '2017-11-03 17:07:41'),
(87, 'Cuisine japonaise', 'cuisine-japonaise', 3, 5, 1, 77, '2017-11-03 17:07:41'),
(88, 'Cuisine thaï', 'cuisine-thai', 3, 6, 1, 77, '2017-11-03 17:07:41'),
(89, 'Cuisine vietnamienne', 'cuisine-vietnamienne', 3, 7, 1, 77, '2017-11-03 17:07:41'),
(90, 'Cuisine de Grèce', 'cuisine-de-grece', 3, 1, 1, 80, '2017-11-03 17:12:15'),
(91, 'Cuisine espagnole', 'cuisine-espagnole', 3, 2, 1, 80, '2017-11-03 17:12:15'),
(92, 'Cuisine irlandaise', 'cuisine-irlandaise', 3, 3, 1, 80, '2017-11-03 17:12:15'),
(93, 'Cuisine islandaise', 'cuisine-islandaise', 3, 4, 1, 80, '2017-11-03 17:12:15'),
(94, 'Cuisine italienne', 'cuisine-italienne', 3, 5, 1, 80, '2017-11-03 17:12:15'),
(95, 'Cuisine portugaise', 'cuisine-portugaise', 3, 6, 1, 80, '2017-11-03 17:12:15'),
(96, 'Royaume-Uni', 'royaume-uni', 3, 7, 1, 80, '2017-11-03 17:12:15'),
(97, 'Recettes végétariennes', 'recettes-vegetariennes', 2, 1, 1, 5, '2017-11-03 17:16:47'),
(98, 'Recettes sans gluten', 'recettes-sans-gluten', 2, 2, 1, 5, '2017-11-03 17:16:47'),
(99, 'Recettes saines & healthy food', 'recettes-saines-healthy-food', 2, 3, 1, 5, '2017-11-03 17:16:47'),
(100, 'Produits bio', 'produits-bio', 2, 4, 1, 5, '2017-11-03 17:16:47'),
(101, 'Produits équitables', 'produits-equitables', 2, 5, 1, 5, '2017-11-03 17:16:47'),
(102, 'A emporter au bureau', 'a-emporter-au-bureau', 2, 1, 1, 6, '2017-11-03 17:20:45'),
(103, 'Vite fait bien fait', 'vite-fait-bien-fait', 2, 2, 1, 6, '2017-11-03 17:20:45'),
(104, 'Recettes économiques', 'recettes-economiques', 2, 3, 1, 6, '2017-11-03 17:20:45'),
(105, 'Bébés et enfants', 'bebes-et-enfants', 2, 4, 1, 6, '2017-11-03 17:20:45'),
(106, 'Par ustensiles', 'par-ustensiles', 2, 5, 1, 6, '2017-11-03 17:20:45'),
(107, 'Par fêtes', 'par-fetes', 2, 6, 1, 6, '2017-11-03 17:20:45'),
(108, 'Multicuiseur', 'multicuiser', 3, 1, 1, 106, '2017-11-03 17:23:35'),
(109, 'Robot cuiseur', 'robot-cuiseur', 3, 2, 1, 106, '2017-11-03 17:23:35'),
(110, 'Super Blender', 'super-blender', 3, 3, 1, 106, '2017-11-03 17:23:35'),
(111, 'Produits tupperware', 'produits-tupperware', 3, 4, 1, 106, '2017-11-03 17:23:35'),
(112, 'Chandeleur', 'chandeleur', 3, 1, 1, 107, '2017-11-03 17:24:40'),
(113, 'Nouvel an chinois', 'nouvel-an-chinois', 3, 2, 1, 107, '2017-11-03 17:24:40'),
(114, 'Je découvre...', 'je-decouvre', 2, 1, 1, 7, '2017-11-03 17:30:58'),
(115, 'Nouveaux produits', 'nouveaux-produits', 2, 2, 1, 7, '2017-11-03 17:30:58'),
(116, 'Mes livres de cuisine', 'mes-livres-de-cuisine', 2, 3, 1, 7, '2017-11-03 17:30:58'),
(117, 'Ingrédients', 'ingredients', 2, 4, 1, 7, '2017-11-03 17:30:58'),
(118, 'Mon matériel pour cuisiner', 'mon-materiel-pour-cuisiner', 2, 5, 1, 7, '2017-11-03 17:30:58'),
(119, 'Vins', 'vins', 2, 6, 1, 7, '2017-11-03 17:30:58'),
(120, 'Box', 'box', 2, 7, 1, 7, '2017-11-03 17:30:58'),
(121, 'Bavardages', 'bavardages', 2, 8, 1, 7, '2017-11-03 17:30:58'),
(122, 'Récap de tous mes voyages', 'recap-de-tous-mes-voyages', 2, 1, 1, 8, '2017-11-03 17:34:13'),
(123, 'France', 'france', 2, 2, 1, 8, '2017-11-03 17:34:13'),
(124, 'Europe', 'europe', 2, 3, 1, 8, '2017-11-03 17:34:13'),
(125, 'Amériques', 'ameriques', 2, 4, 1, 8, '2017-11-03 17:34:13'),
(126, 'Afrique', 'afrique', 2, 5, 1, 8, '2017-11-03 17:34:13'),
(127, 'Asie', 'asie', 2, 6, 1, 8, '2017-11-03 17:34:13'),
(128, 'Outre Mer', 'outre-mer', 2, 7, 1, 8, '2017-11-03 17:34:13'),
(147, 'Aquitaine Limousin Poitou Charentes', 'aquitaine-limousin-poitou-charentes', 3, 1, 1, 123, '2017-11-03 17:40:48'),
(148, 'Bourgogne Franche Comté', 'bourgogne-franche-comte', 3, 2, 1, 123, '2017-11-03 17:40:48'),
(149, 'Bregagne', 'bretagne', 3, 3, 1, 123, '2017-11-03 17:40:48'),
(150, 'Corse', 'corse', 3, 4, 1, 123, '2017-11-03 17:40:48'),
(151, 'Occitanie', 'occitanie', 3, 5, 1, 123, '2017-11-03 17:40:48'),
(152, 'Pays de la Loire', 'pays-de-la-loire', 3, 6, 1, 123, '2017-11-03 17:40:48'),
(153, 'Provences Alpes Côte d\'Azur', 'provences-alpes-cotes-dazur', 3, 7, 1, 123, '2017-11-03 17:40:48'),
(154, 'Rhône Alpes', 'rhone-alpes', 3, 8, 1, 123, '2017-11-03 17:40:48'),
(155, 'Ile de France', 'ile-de-france', 3, 9, 1, 123, '2017-11-03 17:40:48'),
(156, 'Amsterdam (City Guid)', 'amsterdam', 3, 1, 1, 124, '2017-11-03 17:45:15'),
(157, 'Barcelone (City Guid)', 'barcelone', 3, 2, 1, 124, '2017-11-03 17:45:15'),
(158, 'Irlande', 'irlande', 3, 3, 1, 124, '2017-11-03 17:45:15'),
(159, 'Islande', 'islande', 3, 4, 1, 124, '2017-11-03 17:45:15'),
(160, 'Italie', 'italie', 3, 5, 1, 124, '2017-11-03 17:45:15'),
(161, 'Londres (City Guid)', 'londres', 3, 6, 1, 124, '2017-11-03 17:45:15'),
(162, 'Malte', 'malter', 3, 7, 1, 124, '2017-11-03 17:45:15'),
(163, 'Royaume-Uni', 'royaume-uni', 3, 8, 1, 124, '2017-11-03 17:45:15'),
(164, 'USA-OUEST', 'usa-ouest', 3, 1, 1, 125, '2017-11-03 17:48:23'),
(165, 'USA-EST', 'usa-est', 3, 2, 1, 125, '2017-11-03 17:48:23'),
(166, 'Canada-Ouest', 'canada-ouest', 3, 3, 1, 125, '2017-11-03 17:48:23'),
(167, 'Canada-Est', 'canada-est', 3, 4, 1, 125, '2017-11-03 17:48:23'),
(168, 'Brésil', 'bresil', 3, 5, 1, 125, '2017-11-03 17:48:23'),
(169, 'USA-Whashington DC', 'usa-washington-dc', 4, 4, 1, 165, '2017-11-03 17:49:24'),
(170, 'Maroc', 'maroc', 3, 1, 1, 126, '2017-11-03 17:50:51'),
(171, 'Sénégal', 'senegal', 3, 2, 1, 126, '2017-11-03 17:50:51'),
(172, 'Bali', 'bali', 3, 1, 1, 127, '2017-11-03 17:51:34'),
(173, 'Guadeloupe', 'guadeloupe', 3, 1, 1, 128, '2017-11-03 17:52:43'),
(174, 'Ile de la Réunion', 'ile-de-la-reunion', 3, 2, 1, 128, '2017-11-03 17:52:43'),
(175, 'Restaurants sur Bordeaux', 'restaurants-sur-bordeaux', 2, 1, 1, 9, '2017-11-03 17:57:27'),
(176, 'Restaurants en Gironde', 'restaurants-en-gironde', 2, 2, 1, 9, '2017-11-03 17:57:27'),
(177, 'Autres restaurants en France', 'autres-restaurants-en-france', 2, 3, 1, 9, '2017-11-03 17:57:27'),
(178, 'Adresses gourmandes', 'adresses-gourmandes', 2, 4, 1, 9, '2017-11-03 17:57:27'),
(179, 'Oenotourisme', 'oenotourisme', 2, 5, 1, 9, '2017-11-03 17:57:27'),
(180, 'Hôtels, maisons d\'hôtes, résidences de vacances', 'hebergements', 2, 6, 1, 9, '2017-11-03 17:57:27'),
(181, 'SPA & Thalasso', 'spa-thalasso', 2, 7, 1, 9, '2017-11-03 17:57:27');

-- --------------------------------------------------------

--
-- Structure de la table `Comment`
--

CREATE TABLE `Comment` (
  `id` int(11) NOT NULL,
  `post_id` int(11) DEFAULT NULL,
  `content` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT 'Contenu du commentaire',
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Nom complet de l''auteur du commentaire',
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Email de l''auteur du commentaire'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Post`
--

CREATE TABLE `Post` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Titre de l''article',
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Slug pour l''URL',
  `content` longtext COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Contenu de l''article',
  `is_visible` tinyint(1) NOT NULL COMMENT 'Affiche ou non l''article',
  `views` int(11) NOT NULL COMMENT 'Nombre de consultations de l''article',
  `updated` datetime NOT NULL COMMENT 'Date de la dernière mise à jour de l''article',
  `urlPostPicture` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'URL vers la photo d''illustration de l''article'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `Post`
--

INSERT INTO `Post` (`id`, `user_id`, `title`, `slug`, `content`, `is_visible`, `views`, `updated`, `urlPostPicture`) VALUES
(1, 1, 'Grand Canyon National Park [Arizona, USA]', 'grand-canyon-arizona', '<p style=\"text-align: justify;\">La semaine dernière je vous ai fait découvrir <strong><a href=\"https://www.audreycuisine.fr/2017/11/sedona-red-rock-state-park/\" target=\"_blank\" rel=\"noopener\">Red Rock State Park &amp; Sedona</a></strong> en Arizona. Aujourd’hui on continue la route vers le Nord pour arriver à <strong>Grand Canyon</strong>, un parc National mythique de l’Ouest Américain, qui est le Parc le plus visité dans l’Ouest avec pas moins de 4 millions de visiteurs. J’avais peur avant d’y arriver de ne pas être impressionnée car les images de Grand Canyon sont vues et revues.</p>\r\n<p style=\"text-align: justify;\"><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/37501436234/in/album-72157662337895248/\" data-flickr-embed=\"true\"></a><a href=\"https://www.flickr.com/photos/audreybourdincuisine/37501436234/in/album-72157662337895248/\"><img class=\"alignnone\" title=\"Grand Canyon blog voyage USA\" src=\"https://farm5.staticflickr.com/4541/37501436234_3fd8f506bd_z.jpg\" alt=\"Grand Canyon National Park blog de voyage\" width=\"640\" height=\"479\"></a></p>\r\n<p style=\"text-align: justify;\"><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/38180390442/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img class=\"alignnone\" src=\"https://farm5.staticflickr.com/4578/38180390442_21b396362f_z.jpg\" alt=\"Grand Canyon blog voyage USA\" width=\"640\" height=\"427\"></a></p>\r\n<p><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/24367599648/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img class=\"alignnone\" title=\"Grand Canyon blog voyage USA\" src=\"https://farm5.staticflickr.com/4556/24367599648_86801d02c2_z.jpg\" alt=\"Grand Canyon blog voyage USA Audreycuisine\" width=\"640\" height=\"479\"></a></p>\r\n<p style=\"text-align: justify;\">Et pourtant <strong>c’était magique.</strong>&nbsp;On s’est demandé longtemps sur la route ou il pouvait être, car on a traversé pendant quelques minutes la foret sans même l’apercevoir. Une fois garés on prend la direction du Rim et on se retrouve au pied du Canyon, devant cette immensité et ce silence, c’était une énorme surprise avec un effet whaouu des plus impressionnant.</p>\r\n<p><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/38212548491/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img src=\"https://farm5.staticflickr.com/4578/38212548491_449e6f33aa_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a></p>\r\n<p><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/38188371692/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img class=\"alignnone\" title=\"Grand Canyon blog voyage USA\" src=\"https://farm5.staticflickr.com/4545/38188371692_3094dee942_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a></p>\r\n<p><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/37509622754/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img class=\"alignnone\" title=\"Grand Canyon blog voyage USA\" src=\"https://farm5.staticflickr.com/4526/37509622754_c773c6f0f7_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"427\"></a><script async=\"\" src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script><br>\r\n<br>\r\n<ins class=\"adsbygoogle\" style=\"display: block;\" data-ad-client=\"ca-pub-2792766411009425\" data-ad-slot=\"4022354083\" data-ad-format=\"auto\"></ins><br>\r\n<script>(adsbygoogle=window.adsbygoogle||[]).push({});</script></p>\r\n<h2 style=\"text-align: justify;\"><span style=\"color: #993366;\">Grand Canyon National Park</span></h2>\r\n<p style=\"text-align: justify;\">Ce Parc National est l’un&nbsp;des <strong>plus anciens des Etats-Unis</strong>, il a été créé en 1908, il est depuis inscrit au&nbsp;Patrimoine Mondial de l’Humanité. Situé en Arizona, c’est un incontournable de tous les circuits dans l’Ouest des USA, car les paysages y sont grandioses. Les roches ont été creusées par le&nbsp;<strong>fleuve Colorado</strong> depuis 1,7 milliard d’année et se sont façonnées au fil du temps, pour aboutir à cette configuration du site et à&nbsp;ces paysages vertigineux absolument uniques aux couleurs éclatantes.&nbsp; Les&nbsp;falaises sont profondes de plus de 1,5 km de profondeur et le canyon s’étend sur 446 km de long et 29 km de large.</p>\r\n<p><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/26436075379/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img class=\"alignnone\" title=\"Grand Canyon blog voyage USA\" src=\"https://farm5.staticflickr.com/4443/26436075379_2112f2a2ed_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/37501457074/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img src=\"https://farm5.staticflickr.com/4499/37501457074_020de1c0a2_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a></p>\r\n<p style=\"text-align: justify;\">On se sent vraiment tout petit quand on arrive face au Canyon ! Le Parc est tellement grand qu’il est compliqué de tout voir.</p>\r\n<p><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/37509186834/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img src=\"https://farm5.staticflickr.com/4545/37509186834_339d24b1d3_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a></p>\r\n<p><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/38164570396/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img src=\"https://farm5.staticflickr.com/4549/38164570396_a3d709db86_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a></p>\r\n<p style=\"text-align: justify;\"><strong>La rive sud</strong> (South Rim) est accessible toute l’année et c’est la plus visitée. Elle offre des vues splendides sur la rive Nord (North Rim) qui elle est beaucoup moins accessible (a 100 km de la première ville) et dont la route en cul de sac est fermée en hiver à cause de la neige.</p>\r\n<p><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/38164560326/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img src=\"https://farm5.staticflickr.com/4527/38164560326_2565029ac5_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a></p>\r\n<p><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/26443913999/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img src=\"https://farm5.staticflickr.com/4455/26443913999_8e85791030_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a><script async=\"\" src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script><br>\r\n<br>\r\n<ins class=\"adsbygoogle\" style=\"display: block;\" data-ad-client=\"ca-pub-2792766411009425\" data-ad-slot=\"4022354083\" data-ad-format=\"auto\"></ins><br>\r\n<script>(adsbygoogle=window.adsbygoogle||[]).push({});</script></p>\r\n<h2 style=\"text-align: justify;\"><span style=\"color: #993366;\">S’organiser</span></h2>\r\n<p style=\"text-align: justify;\">Quand nous avons préparé notre itinéraire, nous avons opté pour la visite de la rive sud de Grand Canyon, plus facile d’accès et offrant plus de possibilités de découvertes et d’hébergement que l’autre rive. Nous sommes arrivés en fin de journée à <strong>Tusayan</strong>, la ville située au Sud de Grand Canyon Village et qui est à 10 minutes en voiture de l’entrée du Parc National. C’était un excellent point de chute pour nous loger à moindre coût que dans le Parc National, faire nos p’tites courses et nous restaurer. Je vous ai donné <a href=\"https://www.audreycuisine.fr/2017/11/sedona-red-rock-state-park/\" target=\"_blank\" rel=\"noopener\">toutes les infos ici sur l’hôtel choisi et les possibilités de restaurations</a>.</p>\r\n<p style=\"text-align: justify;\">Pour rentrer dans le Parc National il faut acquitter <strong>des droits d’entrée</strong> : 30 dollars par véhicule et par jour. Si vous venez la veille pour voir le coucher de soleil puis le lendemain, vous êtes déjà à 60 dollars, alors il vaut mieux acheter le <a href=\"https://www.nps.gov/planyourvisit/passes.htm\" target=\"_blank\" rel=\"noopener\"><strong>Pass America The Beautifull</strong></a> à 80 dollars qui vous permettra d’accéder aux autres Parcs Nationaux pendant la durée de votre séjour (je vous en ai parlé <a href=\"https://www.audreycuisine.fr/category/voyages/continent-ameriques/usa-ouest/\" target=\"_blank\" rel=\"noopener\"><strong>ici</strong></a>).</p>\r\n<p style=\"text-align: justify;\">Nous avons pu voir le coucher de soleil sur Grand Canyon le soir de notre arrivée à Mather Point et avions toute la journée du lendemain pour profiter du parc avant de repartir direction le Lac Powell. Le soir il y avait beaucoup de monde !</p>\r\n<p style=\"text-align: justify;\"><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/38212577461/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img class=\"\" src=\"https://farm5.staticflickr.com/4571/38212577461_554003334f_z.jpg\" alt=\"Sans titre\" width=\"306\" height=\"229\"></a>&nbsp;<a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/38188340102/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img class=\"\" src=\"https://farm5.staticflickr.com/4495/38188340102_82711d0e66_z.jpg\" alt=\"Sans titre\" width=\"341\" height=\"228\"></a></p>\r\n<p style=\"text-align: justify;\"><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/26436114159/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img class=\"alignnone\" title=\"Biche Grand Canyon\" src=\"https://farm5.staticflickr.com/4584/26436114159_90f45e886b_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"427\"></a></p>\r\n<p style=\"text-align: justify;\">Alors nous sommes arrivés tôt matin pour profiter du parc avant l’arrivée en masse des touristes, nous garer facilement et éviter la queue pour le bus. Ce timming était nickel ! Nous avons même vu quelques animaux sur notre chemin ! L’avantage est qu’on avait quasiment personne sur le Rim sur Hermits Road car les gens se contentent en majorité de la vue depuis le Village / Visitor Center et continuent leur route vers d’autres destinations. Nous avons nous préféré prendre le temps de nous promener et nous en mettre plein les yeux plutôt que faire une rapide pose photo.</p>\r\n<p><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/26443921349/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img src=\"https://farm5.staticflickr.com/4540/26443921349_ef6c4f92f8_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a></p>\r\n<p style=\"text-align: justify;\">Voici la carte de notre itinéraire du jour, tout en profitant de la journée sur Grand Canyon :</p>\r\n<p style=\"text-align: justify;\"><iframe style=\"border: 0;\" src=\"https://www.google.com/maps/embed?pb=!1m64!1m12!1m3!1d822276.5784067841!2d-112.32842890370743!3d36.38456108312738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m49!3e0!4m5!1s0x87331befabb7f305%3A0x43f17c4b8843e783!2sBest+Western+Premier+Grand+Canyon+Squire+Inn%2C+74+AZ-64%2C+Grand+Canyon+Village%2C+AZ+86023%2C+%C3%89tats-Unis!3m2!1d35.9695666!2d-112.1293992!4m5!1s0x873310b5704fd4db%3A0xa8b2e3656ce3ef8c!2sBright+Angel+Lodge%2C+Village+Loop+Drive%2C+Grand+Canyon+Village%2C+Arizona%2C+%C3%89tats-Unis!3m2!1d36.0568738!2d-112.1406471!4m5!1s0x8733109224db22ad%3A0xc96303cc4e475ee2!2sGrand+Canyon+Visitor+Center%2C+South+Entrance+Road%2C+Grand+Canyon+Village%2C+Arizona%2C+%C3%89tats-Unis!3m2!1d36.059155!2d-112.1092692!4m5!1s0x8733046f5f02b3a3%3A0x8ba03dfd7c969c10!2sGrandview+Point%2C+Grand+Canyon+Village%2C+Arizona%2C+%C3%89tats-Unis!3m2!1d35.9984755!2d-111.98775069999999!4m5!1s0x8733a9ba161d0431%3A0x9af0f5028f24e21e!2sDesert+View+Watchtower%2C+Grand+Canyon+Village%2C+Arizona%2C+%C3%89tats-Unis!3m2!1d36.0440834!2d-111.8261464!4m5!1s0x87324b8cadc070db%3A0x2208aec36e1511b0!2sLittle+Colorado+River+Gorge+Overlook%2C+Cameron%2C+Arizona%2C+%C3%89tats-Unis!3m2!1d35.919014!2d-111.5640725!4m5!1s0x87346cebcfca8c6f%3A0xf5ea4ba5cf964dcc!2sHorseshoe+Bend%2C+Hwy+89+S%2C+Page%2C+Arizona%2C+%C3%89tats-Unis!3m2!1d36.8791588!2d-111.51051299999999!4m5!1s0x8734135bfdcd758f%3A0x6e982f5153384e39!2sPage%2C+Arizona%2C+%C3%89tats-Unis!3m2!1d36.9147222!2d-111.4558333!5e0!3m2!1sfr!2sfr!4v1509960557360\" width=\"600\" height=\"450\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"></iframe></p>\r\n<p style=\"text-align: justify;\">Pour visiter la rive sud de Grand Canyon, il y a pour moi 3 points importants à découvrir (d’Ouest en Est)</p>\r\n<ul style=\"text-align: justify;\">\r\n<li><strong><span style=\"color: #993366;\">Village / Visitor Center</span> :</strong> on accède depuis Tusayan à Grand Canyon Village, qui est la zone centrale de la rive sud avec ses parkings, le visitor center et les commerces et logements. C’est l’endroit que j’ai le moins aimé du Parc, il y a trop de monde ! Comme je disais plus haut, certains visiteurs ne se contentent que de cette partir du parc, c’est bien dommage il y a de plus belles expériences à vivre ailleurs dans Grand Canyon.</li>\r\n<li><strong><span style=\"color: #993366;\">Hermits Road</span> :</strong> cette route située à gauche du village permet d’avoir accès aux plus beaux points de vue sur le Canyon. C’est une route panoramique, longue de 11 km. Comme elle est très populaire, son accès se fait en Shuttle Bus de mars à novembre pour éviter les voitures partout. Elle est accessible les mois d’hiver en voiture car il y a moins de visiteurs dans le Parc National à ce moment là. On a adoré cette partie du parc, faite tôt le matin pour profiter du Grand Canyon sans trop de monde dans le bus ni sur le sentier au bord du Canyon. On était souvent seuls car les gens font en majorité la balade en bus en remontant à chaque arrêt alors que nous en avons profité pour marcher entre les points de vue.</li>\r\n<li><strong><span style=\"color: #993366;\">Desert View</span> :</strong> cette route part sur la droite du village pour découvrir encore d’autres points de vue et à l’extrémité Est du Parc la tour du même nom.</li>\r\n</ul>\r\n<p style=\"text-align: justify;\"><span style=\"color: #990000;\"><img class=\"alignnone wp-image-59046\" src=\"https://www.audreycuisine.fr/wp-content/uploads/2017/11/3-2-1024x641.jpg\" alt=\"\" width=\"708\" height=\"443\" srcset=\"https://www.audreycuisine.fr/wp-content/uploads/2017/11/3-2-1024x641.jpg 1024w, https://www.audreycuisine.fr/wp-content/uploads/2017/11/3-2-300x188.jpg 300w, https://www.audreycuisine.fr/wp-content/uploads/2017/11/3-2-768x481.jpg 768w, https://www.audreycuisine.fr/wp-content/uploads/2017/11/3-2-600x376.jpg 600w, https://www.audreycuisine.fr/wp-content/uploads/2017/11/3-2.jpg 1376w\" sizes=\"(max-width: 708px) 100vw, 708px\"></span></p>\r\n<p style=\"text-align: justify;\">Toutes les sections du parc peuvent être découvertes à l’aide des bus shuttle pour éviter de prendre la voiture : ligne rouge pour Hermits Road, ligne bleue pour Grand Canyon Village, ligne jaune pour aller vers l’Est. Nous avons utilisé uniquement la ligne rouge, le reste était pour nous plus pratique en voiture.</p>\r\n<p><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/24359591368/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img class=\"alignnone\" title=\"Grand Canyon Hermit Road blog voyage USA\" src=\"https://farm5.staticflickr.com/4505/24359591368_ff9bdb1008_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a></p>\r\n<p style=\"text-align: justify;\">P’tit truc tout bête : faites le plein d’essence à Tusayan, il n’y a pas de station essence à Grand Canyon Village, uniquement à Desert View à 40 km à l’Est du village.</p>\r\n<p><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/38164578956/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img src=\"https://farm5.staticflickr.com/4534/38164578956_6812f0327a_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a></p>\r\n<p style=\"text-align: justify;\">Il est possible de faire un survol en hélicoptère du Canyon depuis Tusayan. C’est assez cher, il faut compter 250 euros par personne en moyenne, et à nous 3 c’était hors budget, surtout que notre fils à 6 ans n’en aurait pas gardé un souvenir impérissable. On a préféré nous faire plaisir pour d’autres activités pendant notre voyage dans l’Ouest.</p>\r\n<p><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/38220123871/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img src=\"https://farm5.staticflickr.com/4566/38220123871_a46ce301df_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/37509223444/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img src=\"https://farm5.staticflickr.com/4527/37509223444_ed0bd57523_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a></p>\r\n<h2 style=\"text-align: justify;\"><span style=\"color: #993366;\">Hermits Road</span></h2>\r\n<p style=\"text-align: justify;\">Nous nous sommes garés tout proche de la première station de bus située sur <strong>Hermits Road</strong>&nbsp;(11 km) pour profiter d’une belle matinée sur cette portion du Parc. Voici le chemin rouge que nous avons fait, nous nous sommes arrêtés à tous les arrêts pour profiter des différents points de vue :</p>\r\n<p style=\"text-align: justify;\"><img class=\"alignnone size-full wp-image-59044\" src=\"https://www.audreycuisine.fr/wp-content/uploads/2017/11/1-1.jpg\" alt=\"\" width=\"556\" height=\"217\" srcset=\"https://www.audreycuisine.fr/wp-content/uploads/2017/11/1-1.jpg 556w, https://www.audreycuisine.fr/wp-content/uploads/2017/11/1-1-300x117.jpg 300w\" sizes=\"(max-width: 556px) 100vw, 556px\"></p>\r\n<p style=\"text-align: justify;\">Il est possible de reprendre le bus à chaque arrêt dans la direction Hermits Rest, par contre sur le retour ce n’est pas possible il y a des arrêts qui ne sont pas desservis. Il est également possible de faire le trajet entre les arrêts à pied en se promenant sur le sentier qui borde le Grand Canyon et c’est super agréable (et relativement plat).</p>\r\n<p style=\"text-align: justify;\"><img class=\"alignnone size-large wp-image-59045\" src=\"https://www.audreycuisine.fr/wp-content/uploads/2017/11/2-1.jpg\" alt=\"\" width=\"640\" height=\"129\" srcset=\"https://www.audreycuisine.fr/wp-content/uploads/2017/11/2-1.jpg 640w, https://www.audreycuisine.fr/wp-content/uploads/2017/11/2-1-300x60.jpg 300w, https://www.audreycuisine.fr/wp-content/uploads/2017/11/2-1-600x121.jpg 600w\" sizes=\"(max-width: 640px) 100vw, 640px\"><br>\r\nIl faut compter 1 h 30 de bus pour faire le tour de la ligne rouge sans s’arrêter. Il y a des <strong>navettes tout au long de la journée</strong>, elles commencent une heure avant le lever de soleil (toutes les 30 minutes) et passent à toutes les 15 minutes de 9 h 30 au coucher de soleil avant de repasser toutes les 30 minutes jusqu’à une heure après le coucher de soleil.</p>\r\n<p><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/38164584136/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img src=\"https://farm5.staticflickr.com/4514/38164584136_3d3a2d8105_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a></p>\r\n<p style=\"text-align: justify;\">Nous avons passé presque <strong>4 heures sur cette section</strong>, entre navette et sections à pied sur le <strong>Rim Trail</strong> pour profiter de la grandeur du Canyon. Nous ne sommes pas descendus dans le Canyon pour y faire de la randonnée, nous sommes juste restés sur le Rim Trail. Le dénivelé y est important et pas vraiment adapté avec un enfant côté sécurité. Il est possible de trouver toutes les infos randonnées et sentiers au visitor center.</p>\r\n<p style=\"text-align: justify;\">Concernant le Rim Trail, il est par sections goudronné et large, parfois en terre, parfois assez étroit. Attention aux enfants, on est en bordure du Canyon tout n’est pas sécurisé.</p>\r\n<p><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/38164922276/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img src=\"https://farm5.staticflickr.com/4491/38164922276_a4d18c3ef8_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/38164925246/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img src=\"https://farm5.staticflickr.com/4528/38164925246_6357e08b09_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a></p>\r\n<p style=\"text-align: justify;\">Mais ce que nous avons pu découvrir était superbe, on a adoré notre matinée sur la Hermit Road, les photos parlent d’elles même !</p>\r\n<p><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/37509180554/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img src=\"https://farm5.staticflickr.com/4534/37509180554_d9f416e56e_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/37509188934/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img src=\"https://farm5.staticflickr.com/4526/37509188934_bbe7ae1a92_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a></p>\r\n<p style=\"text-align: justify;\">Côté pratique, il y a à Hermits Rest une buvette et des toilettes, mais rien n’est prévu sur le reste de la route. Partez donc avec suffisamment d’eau pour les balades, de la crème solaire et de quoi vous couvrir la tête, le soleil tape fort en Arizona l’été.</p>\r\n<p><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/37509585904/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img src=\"https://farm5.staticflickr.com/4548/37509585904_d971642208_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a></p>\r\n<h2 style=\"text-align: justify;\"><span style=\"color: #993366;\">Desert View Drive</span></h2>\r\n<p>En fin d’après-midi, reprenez votre voiture, direction Est, sur la&nbsp;<strong>Desert View Drive</strong>, tronçon d’une quarantaine de kilomètres non desservi par la navette du parc.</p>\r\n<p><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/37509581244/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img src=\"https://farm5.staticflickr.com/4558/37509581244_991d25cced_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a></p>\r\n<p>On peut y voir les superbes points de vue de <strong>Grandview Point</strong> qui donne une vue à 180° sur le Canyon, mais également Lipan Point pour y voir les rapides d’Unkar et le Colorado.</p>\r\n<p><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/37509619664/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img src=\"https://farm5.staticflickr.com/4553/37509619664_79eb6760cb_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a></p>\r\n<p><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/37509613634/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img src=\"https://farm5.staticflickr.com/4467/37509613634_c08bfd696d_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a></p>\r\n<p>Nous sommes passés ensuite par <strong>Desert View</strong> et sa<strong> Watch Tower</strong> qui donne une vue panoramique sur le Canyon. C’est un point très touristique.</p>\r\n<p><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/37509588374/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img src=\"https://farm5.staticflickr.com/4489/37509588374_6547a43b81_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a></p>\r\n<p><a title=\"Sans titre\" href=\"https://www.flickr.com/photos/audreybourdincuisine/37509604444/in/album-72157662337895248/\" data-flickr-embed=\"true\"><img src=\"https://farm5.staticflickr.com/4505/37509604444_e9af350c7c_z.jpg\" alt=\"Sans titre\" width=\"640\" height=\"479\"></a></p>\r\n<p>A l’intérieur on y voit également des peintures indiennes et c’est le point le plus haut de Grand Canyon, super apprécié pour les couchers de soleil.<script async=\"\" src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script><br>\r\n<br>\r\n<ins class=\"adsbygoogle\" style=\"display: block;\" data-ad-client=\"ca-pub-2792766411009425\" data-ad-slot=\"4022354083\" data-ad-format=\"auto\"></ins><br>\r\n<script>(adsbygoogle=window.adsbygoogle||[]).push({});</script></p>\r\n<h2 style=\"text-align: justify;\"><span style=\"color: #993366;\">Que voir autour de Grand Canyon South Rim ?</span></h2>\r\n<ul>\r\n<li><span style=\"color: #000000;\"><strong>Little Colorado</strong> -&gt; 30 min (article à paraître)</span></li>\r\n<li><span style=\"color: #000000;\"><strong>Flagstaff &amp; route 66</strong> -&gt; à 1 h 20 (plus d’infos <a href=\"https://www.audreycuisine.fr/2017/11/sedona-red-rock-state-park/\" target=\"_blank\" rel=\"noopener\">ici</a>)</span></li>\r\n<li><span style=\"color: #000000;\"><strong>Horseshoe Bend</strong> -&gt; 1 h 40&nbsp;(article à paraître)</span></li>\r\n<li><span style=\"color: #000000;\"><strong>Meteor Crater</strong> -&gt; 2 h 00&nbsp; (plus d’infos <a href=\"https://www.audreycuisine.fr/2017/11/sedona-red-rock-state-park/\" target=\"_blank\" rel=\"noopener\">ici</a>)</span></li>\r\n<li><span style=\"color: #000000;\"><strong>Lac Powell / Page</strong> -&gt; 2 h 00&nbsp;&nbsp;(article à paraître)</span></li>\r\n<li><span style=\"color: #000000;\"><strong>Sedona</strong> -&gt; 2 h 00 (plus d’infos <a href=\"https://www.audreycuisine.fr/2017/11/sedona-red-rock-state-park/\" target=\"_blank\" rel=\"noopener\">ici</a>)</span></li>\r\n</ul>\r\n<h2 style=\"text-align: justify;\"><span style=\"color: #993366;\">Pour aller + loin …</span></h2>\r\n<p style=\"text-align: justify;\">Je vous ai mis pour chaque parc / endroit le lien vers le site officiel, le seul site ou vous trouverez les horaires à jour + infos tarifs. Il y a souvent sur les sites des plans d’accès, infos parking, bien pratiques pour planifier au mieux son voyage.</p>\r\n<p style=\"text-align: justify;\">Sinon, voici quelques sites internet utiles pour cette destination, pensez à les suivre également sur les réseaux sociaux il y a toujours des bons plans pour bien préparer son voyage :</p>\r\n<ul>\r\n<li style=\"text-align: justify;\"><a href=\"https://www.nps.gov/grca/learn/news/upload/grca_french.pdf\" target=\"_blank\" rel=\"noopener\">Guide Touristique NP Grand Canyon en Français</a>&nbsp;: super bien fait, toutes les infos utiles</li>\r\n<li style=\"text-align: justify;\"><a href=\"https://www.nps.gov/grca/index.htm\" target=\"_blank\" rel=\"noopener\">National Park Services, Grand Canyon</a> : site officiel avec toutes les mises à jour (fermeture / accès / travaux etc)</li>\r\n<li style=\"text-align: justify;\"><a href=\"http://aa.usno.navy.mil/data/docs/RS_OneDay.php\" target=\"_blank\" rel=\"noopener\">Heures de coucher / lever de soleil&nbsp;</a>&nbsp;aux USA</li>\r\n<li style=\"text-align: justify;\"><a href=\"https://www.roadtrippin.fr/arizona/grand-canyon/grand-canyon.php\" target=\"_blank\" rel=\"noopener\">Roadtrippin </a>: un site super bien fait avec toutes les infos sur les USA</li>\r\n</ul>', 1, 0, '2017-11-08 05:00:17', 'https://www.audreycuisine.fr/wp-content/uploads/2017/11/shutterstock_652472320-860x450_c.jpg'),
(2, 1, 'Ma P\'tite soupe potimarron courgettes', 'soupe-potimarron-courgette', '<p style=\"text-align: justify;\">Avec l’automne très doux que nous avons eu , il y avait encore des légumes de fin d’été au marché la semaine dernière et dans mon panier de l’Amap. J’aime bien mélanger les légumes quand les saisons se superposent comme ici, car la <strong>courgette</strong> permet d’avoir une soupe un peu moins marquée que si elle était faite uniquement avec du <strong>potimarron</strong>.</p>\r\n<p style=\"text-align: justify;\">En y ajoutant une belle branche de céleri j’ai eu une soupe délicieusement parfumée et très onctueuse. Elle était vraiment parfaite, surtout que je l’ai surmonté de croûtons maisons au jambon cru, la p’tite touche ultra gourmande pour transformer un bol de soupe en un plat complet, parfait à déguster devant une p’tite série.</p>\r\n<p><img class=\"alignnone size-full wp-image-58929\" src=\"https://www.audreycuisine.fr/wp-content/uploads/2017/10/36868876964_e4be227183_z.jpg\" alt=\"\" width=\"480\" height=\"640\" srcset=\"https://www.audreycuisine.fr/wp-content/uploads/2017/10/36868876964_e4be227183_z.jpg 480w, https://www.audreycuisine.fr/wp-content/uploads/2017/10/36868876964_e4be227183_z-225x300.jpg 225w\" sizes=\"(max-width: 480px) 100vw, 480px\" data-pagespeed-url-hash=\"221574572\" onload=\"pagespeed.CriticalImages.checkImageForCriticality(this);\"></p>\r\n<p><strong><em>Velouté de potimarron (4 personnes)</em></strong><br>\r\n<em>1 petit potimarron</em><br>\r\n<em>1 petite courgette jaune</em><br>\r\n<em>1 branche de céleri avec les feuilles</em><br>\r\n<em>10 cl de crème liquide&nbsp;</em><br>\r\n<em>Sel, poivre</em></p>\r\n<p>– Rincer les légumes, brosser le potimarron avec une brosse à légumes (comme cela, on conserve la peau).</p>\r\n<p>– Couper le potimarron en deux, enlever les graines. Le couper en morceaux, comme la courgette puis émincer le céleri.</p>\r\n<p>– Faire cuire les légumes à la vapeur pendant 20 minutes (vous pouvez utiliser un robot cuiseur).</p>\r\n<p>– Mixer les légumes cuits avec plus ou moins de bouillon de cuisson, saler, poivrer et ajouter la crème.</p>\r\n<p>-&gt; si vous ne trouvez plus de courgettes, utilisez les en surgelé, pour les soupes c’est nickel !</p>\r\n<p><strong><em>Croûtons maison au jambon cru (4 personnes)</em></strong><br>\r\n<em>1/2 baguette aux céréales de la veille</em><br>\r\n<em>1 gousse d’ail</em><br>\r\n<em>2 cuillères à soupe d’huile d’olive</em><br>\r\n<em>2 à 3 tranches de jambon cru</em><br>\r\n<em>Poivre du moulin</em></p>\r\n<p>– Couper la baguette en dés, puis le jambon en lamelles.</p>\r\n<p>– Peler la gousse d’ail.</p>\r\n<p>– Faire chauffer une sauteuse avec l’huile, quand elle est chaude ajouter l’ail et les morceaux de pain. Mélanger le tout pour faire dorer les croutons sur toutes les faces.</p>\r\n<p>– Quand ils sont dorés, ajouter les lamelles de jambon, enlever l’ail et arrêter au bout de quelques secondes (le jambon colore très vite).</p>\r\n<p>– Servir la soupe recouverte des croutons au jambon, ajouter un peu de persil si vous aimez.</p>', 1, 0, '2017-11-07 04:20:23', 'https://www.audreycuisine.fr/wp-content/uploads/2017/10/36868876964_e4be227183_z-860x450_c.jpg'),
(3, 1, 'Le lundi c\'est veggie : oeuf cocotte en nid de pain', 'oeuf-cocotte-en-nid-de-pain', '<p style=\"text-align: justify;\"><strong>Le lundi c’est veggie</strong> et le lundi on a pas toujours trop le temps de cuisiner. Alors aujourd’hui je vous propose une recette très simple, mais également très gourmande. L’idée est de faire cuire des oeufs dans des petits pains avec des p’tites choses pour les parfumer, sans pour autant rajouter des lardons ou du fromage, deux oeufs c’est largement suffisant côté protéines pour un dîner pour un adulte (pour un enfant, un petit pain c’est top).</p>\r\n<p style=\"text-align: justify;\">Pour en faire un dîner complet, je rajoute une p’tite soupe de légumes en entrée (qui a le don de nous réchauffer à cette saison !), un fruit en dessert et j’ai un repas équilibré et qui ne revient pas très cher.</p>\r\n<p style=\"text-align: justify;\"><img class=\"alignnone size-full wp-image-59012\" src=\"https://www.audreycuisine.fr/wp-content/uploads/2017/11/24243279198_fa23fbec83_z.jpg\" alt=\"\" width=\"480\" height=\"640\" srcset=\"https://www.audreycuisine.fr/wp-content/uploads/2017/11/24243279198_fa23fbec83_z.jpg 480w, https://www.audreycuisine.fr/wp-content/uploads/2017/11/24243279198_fa23fbec83_z-225x300.jpg 225w\" sizes=\"(max-width: 480px) 100vw, 480px\" data-pagespeed-url-hash=\"3575455945\" onload=\"pagespeed.CriticalImages.checkImageForCriticality(this);\"></p>\r\n<p style=\"text-align: justify;\"><strong>Ingré<em>dients (3 personnes, dont 1 enfant)</em></strong><br>\r\n<em> 5 petits pains ronds précuits (achetés en magasin bio)</em><br>\r\n<em> 5 oeufs</em><br>\r\n<em> 3 champignons de Paris</em><br>\r\n<em> 2 gousses d’ail</em><br>\r\n<em> 5 petites cuillères à café de crème épaisse</em><br>\r\n<em> Sel, poiv</em>re</p>\r\n<p style=\"text-align: justify;\">– Préchauffer le four à 160°. A l’aide d’une cuillère à soupe creuser les petits pains, les déposer sur la plaque du four.</p>\r\n<p style=\"text-align: justify;\">– Emincer les champignons de Paris ainsi que les gousses d’ail. Faire revenir le tout à feu vif dans une poêle avec un filet d’huile d’olive. Saler, poivrer et mélanger.</p>\r\n<p style=\"text-align: justify;\">– Répartir les champignons au fond des petits pains. Ajouter la crème, les oeufs. Saler et poivrer.</p>\r\n<p style=\"text-align: justify;\">– Enfourner pour 10 à 12 minutes de cuisson, surveillez bien pour que les jaunes ne cuisent pas trop. Là ils étaient coulants !</p>\r\n<blockquote><p><strong>Astuce en +</strong></p>\r\n<p>Voici mes variantes veggie pour parfumer les oeufs, à déposer dans le petit pain avant l’oeuf : une tomate confite coupée en dés, une cuillère à soupe de pesto, une cuillère à soupe de dés de potimarron rôtis.</p>\r\n<p>Avec les miettes des petits pains vous pouvez faire une chapelure pour un gratin maison</p></blockquote>', 1, 0, '2017-11-06 05:00:18', 'https://www.audreycuisine.fr/wp-content/uploads/2017/11/24243283878_6f2e0a446c_z-860x450_c.jpg'),
(4, 1, 'Les Halles de Bacalan à Bordeaux', 'les-halles-de-bacalan-a-bordeaux', '<p style=\"text-align: justify;\">Dans quelques jours vont ouvrir sur Bordeaux les <a href=\"https://biltoki.com/hallesbacalan/\" target=\"_blank\" rel=\"noopener\"><strong>Halles de Bacalan</strong></a>, un nouveau marché couvert, aux pieds de la <strong>Cité du Vin</strong>. Le <strong>quartier des Bassins à Flots</strong> ne cesse de se développer et dans ce nouveau bâtiment moderne de plus de 2600 mètres carrés on retrouvera 23 étals ainsi qu’une offre de restauration. Voici quelques informations sur ce lieux qui va intéresser les Bordelais, ceux qui y vivent mais aussi ceux qui visitent la ville car ce lieux sera bien plus qu’une Halle de marché.</p>\r\n<p style=\"text-align: justify;\">Il me tarde de les découvrir, surtout qu’elles sont situées tout proche de mon lieux de travail !</p>\r\n<p style=\"text-align: justify;\"><img class=\"alignnone wp-image-58995\" src=\"https://www.audreycuisine.fr/wp-content/uploads/2017/11/1-1024x655.jpg\" alt=\"\" width=\"666\" height=\"426\" srcset=\"https://www.audreycuisine.fr/wp-content/uploads/2017/11/1-1024x655.jpg 1024w, https://www.audreycuisine.fr/wp-content/uploads/2017/11/1-300x192.jpg 300w, https://www.audreycuisine.fr/wp-content/uploads/2017/11/1-768x492.jpg 768w, https://www.audreycuisine.fr/wp-content/uploads/2017/11/1-600x384.jpg 600w, https://www.audreycuisine.fr/wp-content/uploads/2017/11/1.jpg 1200w\" sizes=\"(max-width: 666px) 100vw, 666px\"></p>\r\n<h2 style=\"text-align: justify;\">On y trouve quoi ?</h2>\r\n<p style=\"text-align: justify;\">Pas moins de<strong> 23 étals de producteurs, commerçants et artisans</strong> seront présents dans les Halles de Bacalan. Il y a une volonté de mettre en avant les produits de la Nouvelle Aquitaine, de qualité et en circuit court. Il y aura toute l’année des animations pour mettre en valeur les produits et rendre le lieux attractif et sympa. Les Halles sont gérées par la société <a href=\"https://biltoki.com/hallesbacalan/\" target=\"_blank\" rel=\"noopener\">Biltoki </a>qui a réhabilité plusieurs halles dans le Sud Ouest à Mont-de-Marsan, Anglet et Dax.</p>\r\n<p style=\"text-align: justify;\"><script async=\"\" src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script><br>\r\n<br>\r\n<ins class=\"adsbygoogle\" style=\"display: block;\" data-ad-client=\"ca-pub-2792766411009425\" data-ad-slot=\"4022354083\" data-ad-format=\"auto\"></ins><br>\r\n<script>(adsbygoogle=window.adsbygoogle||[]).push({});</script></p>\r\n<p style=\"text-align: justify;\">Voici les différents stands :</p>\r\n<ul style=\"text-align: justify;\">\r\n<li><strong>Poissonneries&nbsp; :</strong> La mouette Rieuse – Les requins marteaux</li>\r\n<li><strong>Ostréiculteur &amp; bar à huîtres :</strong> L’huîtrier de Bacalan</li>\r\n<li><strong>Boucherie :</strong> La boucherie des Halles – Chez Marine et Greg</li>\r\n<li><strong>Volailler :</strong> la ferme de Marauli</li>\r\n<li><strong>Collectif d’agriculteurs :</strong> le Carreau des producteurs</li>\r\n<li><strong>Boissons :</strong> Vinimarche (Cave et Bar à vins) –&nbsp;Garg’Antoine (tout pour l’apéro, tartinades, boissons, poissons fumés, etc)</li>\r\n<li><strong>Epicerie fines :</strong> Balme (truffe) – l’étal Ibérique (charcuterie – produits ibériques) – Cosi si Mangia (produits Italiens) – Maison Paris (Foie Gras)</li>\r\n<li><strong>Primeurs :</strong> le maraîcher voyageur (bio) – les délices de la nature</li>\r\n<li><strong>Restauration &amp; bar :</strong> Hall’Taglio (Pizzeria) – Dose (traiteur végétal et bio) –&nbsp;Le café des Halles (bar, café) –&nbsp;L’échoppe des Halles (cuisine du marché)</li>\r\n<li><strong>Fromager :</strong> Fromagerie des Flots</li>\r\n<li><strong>Boulangerie :</strong> la p’tite boulangerie de Bacalan</li>\r\n</ul>\r\n<p style=\"text-align: justify;\">Le lieux est complété par un lieux gourmand <a href=\"https://www.familia-brasserie.fr/\" target=\"_blank\" rel=\"noopener\"><strong>Le Familia</strong></a>,&nbsp;géré par Nicolas Lascombes, lui-même bacalanais d’adoption. Cette nouvelle Brasserie gourmande, chic et populaire est baptisée FAMILIA en souvenir du Bar/Restaurant/Cinéma du même nom qui fit les grandes heures du quartier de 1929 à 1972.&nbsp;L’identité du lieu, son esprit, sa décoration font référence au quartier.</p>\r\n<p style=\"text-align: justify;\">Le design allie le chic de la traditionnelle brasserie à la française à des touches brutes et contemporaines.&nbsp;La carte a été pensée dans l’esprit d’une vraie cuisine de marché, pour toutes les bourses et tous les appétits. A découvrir très vite, je vous en reparlerai !</p>\r\n<p style=\"text-align: justify;\"><img class=\"alignnone wp-image-58996\" src=\"https://www.audreycuisine.fr/wp-content/uploads/2017/11/2-1024x576.jpg\" alt=\"\" width=\"667\" height=\"375\" srcset=\"https://www.audreycuisine.fr/wp-content/uploads/2017/11/2-1024x576.jpg 1024w, https://www.audreycuisine.fr/wp-content/uploads/2017/11/2-300x169.jpg 300w, https://www.audreycuisine.fr/wp-content/uploads/2017/11/2-768x432.jpg 768w, https://www.audreycuisine.fr/wp-content/uploads/2017/11/2-600x337.jpg 600w, https://i2.wp.com/www.audreycuisine.fr/wp-content/uploads/2017/11/2.jpg?w=1800&amp;ssl=1 1800w\" sizes=\"(max-width: 667px) 100vw, 667px\"></p>\r\n<h2 style=\"text-align: justify;\">On y va quand ?</h2>\r\n<p style=\"text-align: justify;\">Les Halles seront ouvertes dès jeudi 9 nobembre du mardi au dimanche (fermé le lundi). Voici les horaires :</p>\r\n<ul style=\"text-align: justify;\">\r\n<li>Mardi et mercredi : 08 h 00 à 14 h 30 et 17 h 30 à 20 h 30</li>\r\n<li>Jeudi et vendredi : 08 h 00 à 14 h 30 et 17 h 30 à 22 h 00</li>\r\n<li>Samedi : 8 h 00 à&nbsp; 22 h 00</li>\r\n<li>Dimanche : 8 h 00 à 15 h 00</li>\r\n</ul>\r\n<p style=\"text-align: justify;\">Le Familia sera ouvert&nbsp;tous les jours de 9 h 00 à 2 h 00 du matin. On s’y installe – selon son humeur et ses envies – dans les différents espaces : Comptoir, Brasserie ou Café.</p>\r\n<p style=\"text-align: justify;\"><img class=\"alignnone wp-image-58998\" src=\"https://www.audreycuisine.fr/wp-content/uploads/2017/11/3-1-1024x640.jpg\" alt=\"\" width=\"668\" height=\"418\" srcset=\"https://www.audreycuisine.fr/wp-content/uploads/2017/11/3-1-1024x640.jpg 1024w, https://www.audreycuisine.fr/wp-content/uploads/2017/11/3-1-300x188.jpg 300w, https://www.audreycuisine.fr/wp-content/uploads/2017/11/3-1-768x480.jpg 768w, https://www.audreycuisine.fr/wp-content/uploads/2017/11/3-1-600x375.jpg 600w, https://www.audreycuisine.fr/wp-content/uploads/2017/11/3-1.jpg 1440w\" sizes=\"(max-width: 668px) 100vw, 668px\"></p>\r\n<h2 style=\"text-align: justify;\">C’est ou ?<br>\r\n<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5655.857377151692!2d-0.5616780977770632!3d44.8637465134306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5528917c6cbfbd%3A0xaef9fdc00d5072a4!2sLes+Halles+de+Bacalan!5e0!3m2!1sfr!2sfr!4v1509694384271\" width=\"600\" height=\"450\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\" data-mce-fragment=\"1\"></iframe></h2>\r\n<p style=\"text-align: justify;\">Au pied de la cité du Vin, entre les Bassins à Flots et la Garonne.</p>\r\n<p style=\"text-align: justify;\"><img class=\"alignnone wp-image-58997\" src=\"https://www.audreycuisine.fr/wp-content/uploads/2017/11/3-1024x655.jpeg\" alt=\"\" width=\"668\" height=\"427\" srcset=\"https://www.audreycuisine.fr/wp-content/uploads/2017/11/3-1024x655.jpeg 1024w, https://www.audreycuisine.fr/wp-content/uploads/2017/11/3-300x192.jpeg 300w, https://www.audreycuisine.fr/wp-content/uploads/2017/11/3-768x492.jpeg 768w, https://www.audreycuisine.fr/wp-content/uploads/2017/11/3-600x384.jpeg 600w, https://www.audreycuisine.fr/wp-content/uploads/2017/11/3.jpeg 1200w\" sizes=\"(max-width: 668px) 100vw, 668px\"></p>\r\n<h2 style=\"text-align: justify;\">On y accède comment ?</h2>\r\n<ul style=\"text-align: justify;\">\r\n<li>En tram : ligne B, arrêt Cité du Vin</li>\r\n<li>En voiture : Parking de la Cité du Vin</li>\r\n<li>Garage à vélo prévu sur place</li>\r\n</ul>\r\n<p>Bonne découverte de ce nouveau lieux Bordelais !</p>', 1, 0, '2017-11-05 06:00:03', 'https://www.audreycuisine.fr/wp-content/uploads/2017/11/2-860x450_c.jpg'),
(5, 1, 'Gratin de courge spaghetti', 'gratin-de-courge-spaghetti-2', '<p><img class=\"alignnone size-full wp-image-58915\" src=\"https://www.audreycuisine.fr/wp-content/uploads/2017/10/36750003654_927617b27e_z.jpg\" alt=\"\" width=\"640\" height=\"427\" srcset=\"https://www.audreycuisine.fr/wp-content/uploads/2017/10/36750003654_927617b27e_z.jpg 640w, https://www.audreycuisine.fr/wp-content/uploads/2017/10/36750003654_927617b27e_z-300x200.jpg 300w, https://www.audreycuisine.fr/wp-content/uploads/2017/10/36750003654_927617b27e_z-600x400.jpg 600w\" sizes=\"(max-width: 640px) 100vw, 640px\" data-pagespeed-url-hash=\"2974085371\" onload=\"pagespeed.CriticalImages.checkImageForCriticality(this);\"></p>\r\n<p style=\"text-align: justify;\">Le week-end du changement d’heure annonce pour moi le début de l’hiver. Fini les journées à voir la lumière du jour depuis la maison, aussi bien le matin que le soir en rentrant du travail, fini mon p’tit bonhomme qui profite de quelques minutes avec ses copains à faire de la trottinette dans le lotissement après les devoirs du soir. On rentre dans la période ou l’on a envie de se blottir sous un plaid bien chaud le soir en rentrant avec un thé bien chaud et un programme télé sympathique.</p>\r\n<p>Dimanche après midi j’ai préparé pour la première fois des gaufres pour faire le goûter au chaud après une promenade dans les bois, et là je vous propose une autre version des plats de saison bien réconfortants comme il faut, le gratin de légumes de saison.</p>\r\n<p><img class=\"alignnone wp-image-58918\" src=\"https://www.audreycuisine.fr/wp-content/uploads/2017/10/shutterstock_496811113.jpg\" alt=\"\" width=\"703\" height=\"469\" srcset=\"https://www.audreycuisine.fr/wp-content/uploads/2017/10/shutterstock_496811113.jpg 1000w, https://www.audreycuisine.fr/wp-content/uploads/2017/10/shutterstock_496811113-300x200.jpg 300w, https://www.audreycuisine.fr/wp-content/uploads/2017/10/shutterstock_496811113-768x512.jpg 768w, https://www.audreycuisine.fr/wp-content/uploads/2017/10/shutterstock_496811113-600x400.jpg 600w\" sizes=\"(max-width: 703px) 100vw, 703px\" data-pagespeed-url-hash=\"523184988\" onload=\"pagespeed.CriticalImages.checkImageForCriticality(this);\"></p>\r\n<p>Pour cette recette, j’ai utilisé une courge spaghetti, qui a la particularité, une fois cuite, d’avoir une chair qui forme de véritables spaghettis. Cette courge d’hiver est très facile à trouver sur les marchés ou chez votre primeur. Elle est récoltée vers&nbsp;septembre-octobre et tient plusieurs mois dans de bonnes conditions de conservation. Une courge spaghetti pèse entre 2 et 4 kg, et mesure entre 20 et 30 cm de long. Sa forme est ovoïde, et son écorce est de couleur uniforme, plus ou moins jaune (de blanc crème à jaune orangé).</p>\r\n<p>Comme toutes les courges elle est très légère avec&nbsp;à peine 40 kcal pour 100 g de courge cuite ! Elle est riche en béta-carotène, en vitamines du groupe B et C et en oligo-éléments (fer, cuivre, manganèse). Côté cuisson, elle se fait soit cuire entière (avec la peau),&nbsp;à l’eau bouillante salée&nbsp;(environ 30 à 40 minutes) ou à l’auto-cuiseur (avec un fond d’eau ; 15 minutes environ en fonction de la taille de la courge).</p>\r\n<p>Par facilité, je préfère la cuisson au four :&nbsp;coupée en deux dans le sens de la longueur, j’enlève les graines et je badigeonne d’un peu d’huile d’olive pour éviter que la chair se dessèche je la pose sur une grille du four, face bombée vers le bas pour une cuisson de 35 à 45 minutes à 180°. Il ne reste plus qu’à récupérer la chair avec une fourchette pour la suite de la recette !</p>\r\n<p><img class=\"alignnone size-large wp-image-58916\" src=\"https://www.audreycuisine.fr/wp-content/uploads/2017/10/36750005014_71055187a5_z.jpg\" alt=\"\" width=\"427\" height=\"640\" srcset=\"https://www.audreycuisine.fr/wp-content/uploads/2017/10/36750005014_71055187a5_z.jpg 427w, https://www.audreycuisine.fr/wp-content/uploads/2017/10/36750005014_71055187a5_z-200x300.jpg 200w\" sizes=\"(max-width: 427px) 100vw, 427px\" data-pagespeed-url-hash=\"1532034893\" onload=\"pagespeed.CriticalImages.checkImageForCriticality(this);\"></p>\r\n<p><em>Ingrédients (4/5 personnes)</em><br>\r\n<em>1 petite courge spaghetti</em><br>\r\n<em>3 pommes de terre</em><br>\r\n<em>1 oignon</em><br>\r\n<em>1 branche de thym</em><br>\r\n<em>3 cuillères à soupe de crème épaisse<br>\r\n4 cuillères à soupe de chapelure</em><br>\r\n<em>1 gousse d’ail</em><br>\r\n<em>1 cuillère à soupe d’huile de noisette</em><br>\r\n<em>Noix de muscade</em><br>\r\n<em>Sel, poivre</em></p>\r\n<p>– Préparer la courge spaghetti : la rincer sous l’eau, la brosser pour enlever la terre puis la couper en deux. Enlever les graines, ajouter un filet d’huile d’olive et la faire cuire à 180° au four pour 45 minutes de cuisson.</p>\r\n<p>– Pendant ce temps faire cuire les pommes de terre pendant 20 minutes dans une casserole d’eau bouillante salée. Les peler et les écraser au presse purée en ajoutant la crème, la muscade un peu de sel et de poivre.</p>\r\n<p>– Peler et émincer finement l’oignon, le faire revenir dans une sauteuse pendant 5 minutes pour le faire légèrement colorer.</p>\r\n<p>– Mélanger la purée, l’oignon, les spaghetti de courge et répartir le tout dans un plat à gratin.</p>\r\n<p>– Mélanger l’ail haché, la chapelure et l’huile de noisette, répartir le tout sur le plat à gratin.</p>\r\n<p>– Enfourner à 190° pour 20 minutes de cuisson. Servir bien chaud avec une salade verte.</p>', 1, 0, '2017-10-31 05:00:40', 'https://www.audreycuisine.fr/wp-content/uploads/2017/10/36750003654_927617b27e_z-860x450_c.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `post_category`
--

CREATE TABLE `post_category` (
  `post_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `post_category`
--

INSERT INTO `post_category` (`post_id`, `category_id`) VALUES
(1, 164),
(2, 62),
(3, 97),
(4, 147),
(5, 62);

-- --------------------------------------------------------

--
-- Structure de la table `post_tag`
--

CREATE TABLE `post_tag` (
  `post_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Tag`
--

CREATE TABLE `Tag` (
  `id` int(11) NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Slug du mot-clé'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `TopMenu`
--

CREATE TABLE `TopMenu` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Nom de l''entrée du menu tel qu''il sera affiché sur le site',
  `slug` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Slug pour l''URL',
  `order_item` smallint(6) NOT NULL COMMENT 'Ordre d''affichage',
  `is_visible` tinyint(1) NOT NULL COMMENT 'Affiche ou non cette item dans le top menu',
  `updated` datetime NOT NULL COMMENT 'Date de la dernière modification de l''item'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `User`
--

CREATE TABLE `User` (
  `id` int(11) NOT NULL,
  `full_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Nom complet'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `User`
--

INSERT INTO `User` (`id`, `full_name`) VALUES
(1, 'Audrey Bourdin');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Comment`
--
ALTER TABLE `Comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_5BC96BF04B89032C` (`post_id`);

--
-- Index pour la table `Post`
--
ALTER TABLE `Post`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_FAB8C3B32B36786B` (`title`),
  ADD UNIQUE KEY `UNIQ_FAB8C3B3989D9B62` (`slug`),
  ADD KEY `IDX_FAB8C3B3A76ED395` (`user_id`);

--
-- Index pour la table `post_category`
--
ALTER TABLE `post_category`
  ADD PRIMARY KEY (`post_id`,`category_id`),
  ADD KEY `IDX_B9A190604B89032C` (`post_id`),
  ADD KEY `IDX_B9A1906012469DE2` (`category_id`);

--
-- Index pour la table `post_tag`
--
ALTER TABLE `post_tag`
  ADD PRIMARY KEY (`post_id`,`tag_id`),
  ADD KEY `IDX_5ACE3AF04B89032C` (`post_id`),
  ADD KEY `IDX_5ACE3AF0BAD26311` (`tag_id`);

--
-- Index pour la table `Tag`
--
ALTER TABLE `Tag`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `TopMenu`
--
ALTER TABLE `TopMenu`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_B6F5052B52EA1F09` (`order_item`);

--
-- Index pour la table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_2DA17977DBC463C4` (`full_name`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Category`
--
ALTER TABLE `Category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=182;

--
-- AUTO_INCREMENT pour la table `Comment`
--
ALTER TABLE `Comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Post`
--
ALTER TABLE `Post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `Tag`
--
ALTER TABLE `Tag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `TopMenu`
--
ALTER TABLE `TopMenu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `User`
--
ALTER TABLE `User`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Comment`
--
ALTER TABLE `Comment`
  ADD CONSTRAINT `FK_5BC96BF04B89032C` FOREIGN KEY (`post_id`) REFERENCES `Post` (`id`);

--
-- Contraintes pour la table `Post`
--
ALTER TABLE `Post`
  ADD CONSTRAINT `FK_FAB8C3B3A76ED395` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`);

--
-- Contraintes pour la table `post_category`
--
ALTER TABLE `post_category`
  ADD CONSTRAINT `FK_B9A1906012469DE2` FOREIGN KEY (`category_id`) REFERENCES `Category` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_B9A190604B89032C` FOREIGN KEY (`post_id`) REFERENCES `Post` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `post_tag`
--
ALTER TABLE `post_tag`
  ADD CONSTRAINT `FK_5ACE3AF04B89032C` FOREIGN KEY (`post_id`) REFERENCES `Post` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_5ACE3AF0BAD26311` FOREIGN KEY (`tag_id`) REFERENCES `Tag` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
