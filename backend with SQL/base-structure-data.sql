CREATE DATABASE  IF NOT EXISTS `newsApp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `newsApp`;
-- MySQL dump 10.13  Distrib 8.0.19, for Linux (x86_64)
--
-- Host: localhost    Database: newsApp
-- ------------------------------------------------------
-- Server version	8.0.19-0ubuntu0.19.10.3

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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `news_id` int NOT NULL,
  `author` varchar(45) DEFAULT NULL,
  `comment` mediumtext NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_comments_1_idx` (`news_id`),
  CONSTRAINT `fk_comments_1` FOREIGN KEY (`news_id`) REFERENCES `news` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `news_body` longtext NOT NULL,
  `image` varchar(45) DEFAULT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (2,'От запрещенных удовольствий до ухода в себя: какой стала одна из главных рок-групп планеты','Вышел альбом The Slow Rush — четвертая пластинка австралийской группы Tame Impala. Один из самых заметных фестивальных коллективов мира, Tame Impala выступает хедлайнером «Коачеллы», а их лидера Кевина Паркера приглашает работать вместе Канье Уэст. Почему они стали настолько популярными и что таит в себе новый альбом — объясняет корреспондент «Ленты.ру» Олег Соболев.\n\nОдновременно с выходом The Slow Rush, последней на данный момент пластинки Tame Impala, по интернету стал ходить мем: на верхней панели — фотография трех молодых людей неаккуратной внешности в облаке курительного дыма и подпись «фанаты Tame Impala 2008-2015»; на нижней — изображение двух дам лет сорока с бокалами белого вина в руках и надпись «фанаты Tame Impala с 2015 по настоящее время». Через несколько дней после появления картинка обрела новую жизнь в несколько модифицированном варианте: в нем мем комментировал в Instagram Кевин Паркер — вокалист, мультиинструменталист, фактически единственное лицо австралийского коллектива и человек, который по большей части единолично записал все четыре студийные альбома Tame Impala. «Можно была бы убрать слово “фанаты” и стало бы точней», — гласила подпись.\n\n\nНеважно, был ли модифицированный вариант этого мема реальным скриншотом из Instagram или плодом творчества умельцев фотошопа. Вне зависимости от его происхождения подобное замечание — прекрасная иллюстрация эстетики, которую воплощала в себе музыка Паркера в разные годы. С момента выхода своего первого мини-альбома в 2008 году вплоть до дебютной полноформатной пластинки Innerspeaker австралиец записывал вальяжный психоделический рок, очевидно вдохновленный шведской группой Dungen. В тексте первой же песни на Innerspeaker можно натолкнуться на словосочетание smoking weed — и альбом действительно отчасти казался саундтреком к запрещенным удовольствиям подобных коннотаций. Следующая запись Tame Impala, вышедшая в 2012-м, Lonerism, была продолжением Innerspeaker, чуть более замороченным по звучанию и немного более концентрированным по форме. Лучшая песня на Lonerism называлась Feels Like We Only Go Backwards — «как будто мы движемся только в обратную сторону».\n\n\nФото: @tameimpala\n1/3\nНевозможно избавиться от ощущения, что этой фразой Паркер описывал не только отношения с фигурировавшей в песне героиней, но и свои собственные чувства от Tame Impala на тот момент. На Currents, изданном в 2015-м третьем альбоме группы, музыкант отверг привычную стилистику гитарного рока: новая пластинка была соткана из синтезаторов, танцевальных ритмов, задумчивых синтезаторных партий — в общем, была чисто по звучанию абсолютно непохожа на предыдущие записи Tame Impala. Роднили новые экзерсисы Паркера с его прошлым творчеством лишь тексты, которые в прессе принято описывать эпитетом «интровертные». Они действительно повествуют почти исключительно о внутреннем мире Паркера, о его личностных стремлениях, переживаниях и работе над вызывающими тревожность чувствами. Но все-таки их лучше описывать как солипсичные: герой Tame Impala не сторонится контакта с миром и другими людьми, но воспринимает любой такой контакт лишь через призму собственного опыта.','sn-PE9IKsH1n1fdzp2fVg.jpg','2020-02-22'),(3,'«Я спросила: разве можно за это убить? Мама промолчала»','В конце января 22-летняя чеченка Аминат Лорсанова обратилась в Следственный комитет с просьбой возбудить уголовное дело в отношении человека, который пытался «изгнать из нее джинна», и врачей клиники пограничных состояний в Грозном. По словам Аминат, там ее подвергали пыткам и истязаниям за бисексуальность. В прошлом году ей удалось бежать из России с помощью ЛГБТ-сети, однако теперь помогавшим ей волонтерам угрожают ее родственники. По словам активистов, от «изгнания джиннов» пострадали более 30 женщин, с которыми они работали. Практика эта действуют не только на территории Чеченской Республики, но и в кавказских семьях, проживающих за ее пределами. «Лента.ру» записала монолог сбежавшей девушки о ее прошлом, истязаниях в семье и больницах, отношении к женщинам и представителям ЛГБТ в Чечне и о том, почему она стала атеисткой.\n\n«Можно убить любую»\nЭто уже пятый мой побег. Дважды я возвращалась сама, дважды меня ловили и возвращали под замок.\n\nС виду мои родители — среднестатистическая семья. Они себя позиционируют как интеллигентные, начитанные, грамотные люди. Оба врачи, мама — анестезиолог, отец — травматолог. Каждый раз после моих жалоб на их побои это был аргумент. Меня стыдили: «Как ты можешь наговаривать на родителей, твой отец хороший врач, а твоя мать, между прочим, моего сына спасла!».\n\n\nФото: Сергей Бобылев / ТАСС\nЯ росла в городе недалеко от центра, в коттедже на две семьи. Это старинный район, там раньше жили англичане, которые приезжали в Чечню за нефтью.\n\nВ прессе пишут, что ко мне применялось насилие из-за моей ориентации. Это не совсем так. Под моими фотографиями комментарии: «Правильно с ней так поступали». Мерзости пишут. Со стороны выглядит, будто есть какая-то причина так обращаться со мной. Но надо мной издевались и избивали меня, даже когда я была маленьким ребенком.\n\n[Это было] тотальное насилие. Несколько раз меня реально могли убить. Отец как-то [после побоев] колол мне аминазин (нейролептик — прим. «Ленты.ру»), от чего у меня образовался глубокий абсцесс. Если бы мне его не удалили, я бы умерла. У меня поднялась температура, мать повела меня к хирургу, своему коллеге. Тот узнал обстоятельства и сказал: «Ничего страшного, бывает». Это врач!','Bh9V-39EWlWknAHWVGtRA.png','2020-02-22');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-22 19:19:46