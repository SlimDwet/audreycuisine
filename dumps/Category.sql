-- phpMyAdmin SQL Dump
-- version 4.7.5
-- https://www.phpmyadmin.net/
--
-- Hôte : mariadb:3306
-- Généré le :  ven. 03 nov. 2017 à 17:57
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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;