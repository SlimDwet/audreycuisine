-- phpMyAdmin SQL Dump
-- version 4.7.5
-- https://www.phpmyadmin.net/
--
-- Hôte : mariadb:3306
-- Généré le :  Dim 29 oct. 2017 à 15:06
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
-- Déchargement des données de la table `TopMenu`
--

INSERT INTO `TopMenu` (`id`, `name`, `slug`, `order_item`, `is_visible`, `updated`) VALUES
(1, 'Accueil', NULL, 1, 1, '2017-10-29 14:42:02'),
(2, 'Présentation', 'a-propos', 2, 1, '2017-10-29 14:47:00'),
(3, 'Références', 'a-propos/references', 3, 1, '2017-10-29 14:47:00'),
(4, 'Mes livres', 'mes-livres', 4, 1, '2017-10-29 14:47:00'),
(5, 'Prestations', 'prestations', 5, 1, '2017-10-29 14:47:00'),
(6, 'Index', 'index', 6, 1, '2017-10-29 14:47:00'),
(7, 'Contact', 'contact', 7, 1, '2017-10-29 14:47:38');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
