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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(120) COLLATE utf8_unicode_ci NOT NULL,
  `secondName` varchar(120) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `login` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(120) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `userAccess` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `login` (`login`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (7,'Sasic','Sasiano','sasicUser1','sasic@gmail.com','870b5e12386f3b4761d778bd5b84b6d81918f7b1','Привет, я новый пользователь этой социальной сети','true'),(16,'Sasic','','sasicUser12','','870b5e12386f3b4761d778bd5b84b6d81918f7b1',' Люблю кошек','true'),(17,'Sasic','','sasicUser156456','','870b5e12386f3b4761d778bd5b84b6d81918f7b1','Люблю собак','true'),(19,'Sasic','Deny','sasicUser156456dfg','sasic@gmia.com','870b5e12386f3b4761d778bd5b84b6d81918f7b1','Люблю попугаев','true'),(29,'Sasic','Deny','sas','sasic@gmia.com','870b5e12386f3b4761d778bd5b84b6d81918f7b1','Люблю рыб','true'),(30,'Ilyas','Tolykbaev','IlyasTolykbaev','vimkinender@gmail.com','dc3c19d9c7fe21d469270b260002062956fe437e','HEllow World!','true'),(31,'Kazakh','Kazakhstan','AlgaKazakhstan','RepublicOfKazakhstan@mail.kz','fcaf2a2618f0baeab8dc96e282df1d0c287452c4','I love Kazakhstan!','true'),(32,'Kazakh','Kazakhstan','Kazakhstan','RepublicOfKazakhstan@mail.kz','fcaf2a2618f0baeab8dc96e282df1d0c287452c4','I love Kazakhstan!','true'),(33,'Kazakh','Kazakhstan','KazakhstanAlga','RepublicOfKazakhstan@mail.kz','fcaf2a2618f0baeab8dc96e282df1d0c287452c4','I love Kazakhstan!','true'),(34,'Amina','Kudaibergen','Kudaibergen111','Amina.Kudaibergen@mail.kz','8f4264beef16e65f195620ae21b886907e08fb9c','I love Dimash!','true'),(35,'Ilyas','Kudaibergen','KudaibergenIlyas','Kudaibergen@mail.kz','3e8c9b31402e701f818e4b285d9b994512586f3b','I love my dog!','true');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
