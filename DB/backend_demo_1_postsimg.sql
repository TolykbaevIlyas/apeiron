-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: backend_demo_1
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `postsimg`
--

DROP TABLE IF EXISTS `postsimg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `postsimg` (
  `id` int NOT NULL AUTO_INCREMENT,
  `path` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `userID` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userID` (`userID`),
  CONSTRAINT `postsimg_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postsimg`
--

LOCK TABLES `postsimg` WRITE;
/*!40000 ALTER TABLE `postsimg` DISABLE KEYS */;
INSERT INTO `postsimg` VALUES (6,'uploads/upload_1680166698_photo_2023-03-23_15-33-13.jpg',7),(7,'uploads/upload_1680167246_photo_2023-03-23_15-33-13.jpg',7),(8,'uploads/upload_1680167291_photo_2023-03-23_15-33-13.jpg',7),(9,'uploads/upload_1680167323_photo_2023-03-23_15-33-13.jpg',7),(33,'uploads/upload_1680169748_Скан_20221215.png',7),(34,'uploads/upload_1680169869_Скан_20221215.png',7),(35,'uploads/upload_1680169941_Скан_20221215.png',7),(36,'uploads/upload_1680189076_Скан_20221215.png',7),(37,'uploads/upload_1680189081_Скан_20221215.png',7),(38,'uploads/upload_1680189137_Скан_20221215.png',7),(40,'uploads/upload_1680191892_',7),(41,'uploads/upload_1680272698_',30),(42,'uploads/upload_1680272790_',30),(43,'uploads/upload_1680272813_',30),(44,'uploads/upload_1680272877_photo_2023-03-23_15-33-13.jpg',30),(45,'uploads/upload_1680273908_',30),(46,'uploads/upload_1680273936_',30),(47,'uploads/upload_1680273937_',30),(48,'uploads/upload_1680273990_',30),(49,'uploads/upload_1680274014_',30),(50,'uploads/upload_1680274227_',30),(51,'uploads/upload_1680274325_',30),(52,'uploads/upload_1680274461_',30),(53,'uploads/upload_1680274489_',30),(54,'uploads/upload_1680274513_',30),(55,'uploads/upload_1680274519_',30),(56,'uploads/upload_1680274785_',30),(57,'uploads/upload_1680275293_',30),(58,'uploads/upload_1680275311_',30),(59,'uploads/upload_1680275888_users-vector-icon-png_260862.jpg',30),(60,'uploads/upload_1680512447_',30),(61,'uploads/upload_1680690902_',30),(62,'uploads/upload_1680690980_',30),(63,'uploads/upload_1680691010_',30),(64,'uploads/upload_1680691072_',30),(65,'uploads/upload_1680691135_',30),(66,'uploads/upload_1680691151_',30),(67,'uploads/upload_1680691174_Микрофон.png',30),(68,'uploads/upload_1680863437_',7),(69,'uploads/upload_1681275367_',30),(70,'uploads/upload_1682424040_',7),(71,'uploads/upload_1682424071_',7),(72,'uploads/upload_1682424073_',7),(73,'uploads/upload_1682424073_',7),(74,'uploads/upload_1682424213_',7),(75,'uploads/upload_1682424473_',7),(76,'uploads/upload_1682783341_users-vector-icon-png_260862.jpg',30);
/*!40000 ALTER TABLE `postsimg` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-22 13:55:48
