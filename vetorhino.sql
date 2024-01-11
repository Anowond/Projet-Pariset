-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 11, 2024 at 05:02 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vetorhino`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `image` varchar(2048) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `image`) VALUES
(1, 'Jouets', './img/pet-toys.jpeg'),
(2, 'Nourriture', './img/pet-food.jpeg'),
(3, 'Utilitaire', './img/pet-utilities.jpeg'),
(4, 'Toilettage', './img/pet-grooming.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `image` varchar(2048) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `num_category` bigint UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `image`, `price`, `num_category`) VALUES
(1, NULL, 'Souris en peluche pour chat', NULL, NULL, NULL),
(2, 'Os en peluche', 'Os en peluche pour chien', '../img/dog-toy.jpg', '8.00', NULL),
(3, 'Jouet à plumes', 'Jouet à plumes pour chat', '../img/cat-toy2.jpg', '6.00', NULL),
(4, 'Os en cahoutchouc', 'Os en cahoutchouc pour chien', '../img/dog-toy2.jpg', '10.00', NULL),
(5, 'Hill\'s Prescription Diet', 'Croquettes de régime pour chat', '../img/cat-food.jpg', '25.00', NULL),
(6, 'Royal Canin Veterinary Diet', 'Croquettes de régime pour chien', '../img/dog-food.jpg', '20.00', NULL),
(7, 'Purina Pro Plan Veterinary Diets', 'Aliment de convalescence pour chien', '../img/dog-food2.jpg', '30.00', NULL),
(8, 'Eukanuba Puppy Food', 'Aliment de croissance pour chien', '../img/dog-food3.jpg', '25.00', NULL),
(9, 'Souris en peluche', 'Souris en peluche pour chat', '../img/cat-toy.jpg', '10.00', NULL),
(10, 'Os en peluche', 'Os en peluche pour chien', '../img/dog-toy.jpg', '8.00', NULL),
(11, 'Jouet à plumes', 'Jouet à plumes pour chat', '../img/cat-toy2.jpg', '6.00', NULL),
(12, 'Os en cahoutchouc', 'Os en cahoutchouc pour chien', '../img/dog-toy2.jpg', '10.00', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_ibfk_1` (`num_category`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`num_category`) REFERENCES `categories` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
