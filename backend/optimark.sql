-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: optimark
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `almacenamiento`
--

DROP TABLE IF EXISTS `almacenamiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `almacenamiento` (
  `almacenamiento_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `espacio_usado` int NOT NULL,
  `espacio_total` int NOT NULL,
  `ultima_sincronizacion` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`almacenamiento_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `almacenamiento_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `usuarios` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `almacenamiento`
--

LOCK TABLES `almacenamiento` WRITE;
/*!40000 ALTER TABLE `almacenamiento` DISABLE KEYS */;
INSERT INTO `almacenamiento` VALUES (1,1,500,1000,'2025-01-15 10:49:23'),(2,2,700,1000,'2025-01-15 10:49:23'),(3,3,300,1000,'2025-01-15 10:49:23'),(4,4,450,1000,'2025-01-15 10:49:23'),(5,5,600,1000,'2025-01-15 10:49:23');
/*!40000 ALTER TABLE `almacenamiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `escaneos`
--

DROP TABLE IF EXISTS `escaneos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `escaneos` (
  `escaneo_id` int NOT NULL AUTO_INCREMENT,
  `examen_id` int DEFAULT NULL,
  `imagen_escaneo` longblob,
  `creado_en` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`escaneo_id`),
  KEY `examen_id` (`examen_id`),
  CONSTRAINT `escaneos_ibfk_1` FOREIGN KEY (`examen_id`) REFERENCES `examenes` (`examen_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `escaneos`
--

LOCK TABLES `escaneos` WRITE;
/*!40000 ALTER TABLE `escaneos` DISABLE KEYS */;
/*!40000 ALTER TABLE `escaneos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiantes`
--

DROP TABLE IF EXISTS `estudiantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudiantes` (
  `estudiante_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `examen_id` int DEFAULT NULL,
  PRIMARY KEY (`estudiante_id`),
  KEY `examen_id` (`examen_id`),
  CONSTRAINT `estudiantes_ibfk_1` FOREIGN KEY (`examen_id`) REFERENCES `examenes` (`examen_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiantes`
--

LOCK TABLES `estudiantes` WRITE;
/*!40000 ALTER TABLE `estudiantes` DISABLE KEYS */;
/*!40000 ALTER TABLE `estudiantes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `examenes`
--

DROP TABLE IF EXISTS `examenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `examenes` (
  `examen_id` int NOT NULL AUTO_INCREMENT,
  `materia` varchar(255) NOT NULL,
  `colegio` varchar(100) NOT NULL,
  `cantidad_preguntas` int NOT NULL,
  `creado_por` varchar(255) NOT NULL,
  `creado_en` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `nombre_examen` varchar(255) NOT NULL,
  PRIMARY KEY (`examen_id`),
  KEY `creado_por` (`creado_por`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `examenes`
--

LOCK TABLES `examenes` WRITE;
/*!40000 ALTER TABLE `examenes` DISABLE KEYS */;
INSERT INTO `examenes` VALUES (1,'Sociales','SENA',2,'Diomedes','2025-05-08 18:02:23','Prueba de examen'),(2,'Programacion','SENA',3,'Henry','2025-05-08 19:18:49','Prueba de sesion 2');
/*!40000 ALTER TABLE `examenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preguntas_examen`
--

DROP TABLE IF EXISTS `preguntas_examen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preguntas_examen` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pregunta` text NOT NULL,
  `opcion_a` varchar(255) DEFAULT NULL,
  `opcion_b` varchar(255) DEFAULT NULL,
  `opcion_c` varchar(255) DEFAULT NULL,
  `opcion_d` varchar(255) DEFAULT NULL,
  `respuesta_correcta` varchar(255) DEFAULT NULL,
  `examen_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_examen` (`examen_id`),
  CONSTRAINT `fk_examen` FOREIGN KEY (`examen_id`) REFERENCES `examenes` (`examen_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preguntas_examen`
--

LOCK TABLES `preguntas_examen` WRITE;
/*!40000 ALTER TABLE `preguntas_examen` DISABLE KEYS */;
INSERT INTO `preguntas_examen` VALUES (1,'2+2','4','1','3','2','A',1),(2,'3+1','4','2','5','7','A',1),(3,'1+1','2','9','11','15','A',2),(4,'2+5','17','77','70','7','D',2),(5,'1+3','4','6','43','65','A',2);
/*!40000 ALTER TABLE `preguntas_examen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `respuestas_estudiantes`
--

DROP TABLE IF EXISTS `respuestas_estudiantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `respuestas_estudiantes` (
  `respuesta_id` int NOT NULL AUTO_INCREMENT,
  `examen_id` int DEFAULT NULL,
  `estudiante_id` int DEFAULT NULL,
  `pregunta_id` int DEFAULT NULL,
  `respuesta_texto` text NOT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `examen_id` (`examen_id`),
  KEY `estudiante_id` (`estudiante_id`),
  KEY `pregunta_id` (`pregunta_id`),
  CONSTRAINT `respuestas_estudiantes_ibfk_1` FOREIGN KEY (`examen_id`) REFERENCES `examenes` (`examen_id`),
  CONSTRAINT `respuestas_estudiantes_ibfk_2` FOREIGN KEY (`estudiante_id`) REFERENCES `estudiantes` (`estudiante_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `respuestas_estudiantes`
--

LOCK TABLES `respuestas_estudiantes` WRITE;
/*!40000 ALTER TABLE `respuestas_estudiantes` DISABLE KEYS */;
/*!40000 ALTER TABLE `respuestas_estudiantes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `nombre_completo` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `telefono_movil` varchar(15) DEFAULT NULL,
  `cedula` varchar(20) DEFAULT NULL,
  `contrasena` varchar(255) NOT NULL,
  `creado_en` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `correo` (`correo`),
  UNIQUE KEY `cedula` (`cedula`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Juan Pérez','juan.perez@ejemplo.com','3001234567','123456789','contrasena123','2025-01-15 10:48:28'),(2,'Ana Gómez','ana.gomez@ejemplo.com','3102345678','987654321','contrasena456','2025-01-15 10:48:28'),(3,'Carlos Martínez','carlos.martinez@ejemplo.com','3203456789','112233445','contrasena789','2025-01-15 10:48:28'),(4,'Laura Sánchez','laura.sanchez@ejemplo.com','3304567890','223344556','contrasena101','2025-01-15 10:48:28'),(5,'Pedro López','pedro.lopez@ejemplo.com','3405678901','334455667','contrasena112','2025-01-15 10:48:28');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-21 20:31:46
