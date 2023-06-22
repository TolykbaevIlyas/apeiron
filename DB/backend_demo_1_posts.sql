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
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userID` int NOT NULL,
  `date` int DEFAULT NULL,
  `message` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `image` int DEFAULT NULL,
  `countOfLikes` int NOT NULL,
  `countOfComments` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userID` (`userID`),
  KEY `image` (`image`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`image`) REFERENCES `postsimg` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (66,7,NULL,'Hellow!',34,0,0),(67,7,NULL,'Hellow!',35,0,0),(75,30,NULL,'Привет! Это мой первый пост!! Рад с вами познакомится!',43,0,0),(76,30,NULL,'Это мой второй пост. Он посвящен моей картине. Надеюсь она вам понравится ',44,0,0),(77,30,NULL,'sdfasdf',52,0,0),(78,30,NULL,'sdfsaf',53,0,0),(79,30,NULL,'ZCxzxc',54,0,0),(80,30,NULL,'cvzxcv',55,0,0),(81,30,NULL,'asdfdsd',56,0,0),(82,30,NULL,'sdfasd',57,0,0),(83,30,NULL,'Hello',58,0,0),(84,30,NULL,'sdfasdf',59,0,0),(85,30,NULL,'Всем привет. Я продолжаю вести свой блог!!!',60,0,0),(86,30,NULL,'Привет, дорогие друзья. Это мой десятый пост, наверное. Проверяю, автоматическую загрузку постов',61,0,0),(87,30,NULL,'Привет, еще одна проверка ',62,0,0),(88,30,NULL,'Привет',63,0,0),(89,30,NULL,'Здравствуйте',64,0,0),(90,30,NULL,'asdfasdfsdfas',65,0,0),(91,30,NULL,'asdfasdfasdfasdfasfdsdf Привет',66,0,0),(92,30,NULL,'Привет Мир. Проверка прошла успешно!!!!!!',67,0,0),(93,7,NULL,'Привет Мир. Это мой первый официальный пост. Радуйтесь',68,0,0),(94,30,NULL,'Gjcn',69,0,0),(95,7,NULL,'Еще один пост',70,0,0),(96,7,NULL,'Привет Мир',71,0,0),(97,7,NULL,'Привет Мир',72,0,0),(98,7,NULL,'Привет Мир',72,0,0),(99,7,NULL,'Привет',74,0,0),(100,7,NULL,'Ghbdtb',75,0,0),(101,30,NULL,'Пост Ильяса',76,0,0);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
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
