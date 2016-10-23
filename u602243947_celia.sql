
-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 22-10-2016 a las 17:54:07
-- Versión del servidor: 10.0.20-MariaDB
-- Versión de PHP: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `u602243947_celia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `legales`
--

CREATE TABLE IF NOT EXISTS `legales` (
  `id_legal` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `descripcion` varchar(9999) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id_legal`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=7 ;

--
-- Volcado de datos para la tabla `legales`
--

INSERT INTO `legales` (`id_legal`, `titulo`, `descripcion`) VALUES
(1, 'AVISO LEGAL', '<p>En la web <a href="http://www.celiapp-qa.16mb.com/">Celiapp</a> hay una serie de contenidos de carácter solamente informativo sobre productos alimentarios aptos para los enfermos celíacos. </p> <p>Los contenidos de Celiapp son referenciales, por lo que se recomienda al usuario verificar la información con los documentos de primera generación, que se encuentran en la página del ente ANMAT <a href="http://www.anmat.gov.ar//"> www.anmat.gov.ar</a>.</p> <p>Su principal objetivo es facilitar a los clientes y al público en general, la información de los productos aptos para el consumo del enfermo celíaco confeccionado por el ente ANMAT. </p> <p>El usuario puede navegar y consultar el material que ahí se muestra para su uso personal no comercial.  No está permitido distribuir, modificar, transmitir, rehusar, reenviar o utilizar el contenido de <a href="http://www.celiapp-qa.16mb.com/">Celiapp</a> con propósitos públicos o comerciales, incluyendo textos, imágenes, audio o video, sin la autorización escrita de Celiapp. </p> <p>Celiapp podrá modificar, sin previo aviso, la información contenida en su sitio web, así como su configuración y presentación. </p><br>'),
(2, 'POLÍTICA DE PRIVACIDAD', '<p>El sistema no registra ninguna información personal relativa a sus visitantes, a menos que éstos decidan libremente proveerla por medio del login correspondiente. </p> <p>Se informa al usuario que todos los datos que nos proporcione serán incorporados a una base de datos, creada y mantenida bajo la responsabilidad de Celiapp. </p> <p>Siempre se va a respetar la confidencialidad de sus datos personales, que sólo serán utilizados con la finalidad de gestionar los servicios ofrecidos. </p><br>'),
(3, 'CONDICIONES DE USO', '<p>Ser usuario de la web de <a href="http://www.celiapp-qa.16mb.com/">Celiapp</a> implica que reconoce haber leído y aceptado las presentes condiciones y lo que las extienda la normativa legal aplicable en esta materia. Si por el motivo que fuere no está de acuerdo con estas condiciones no continúe usando esta web. </p> <p>Las condiciones de acceso y uso del presente sitio web se rigen por la legalidad vigente y por el principio de buena fe comprometiéndose el usuario a realizar un buen uso de la web. No se permiten conductas que vayan contra la ley, los derechos o intereses de terceros. </p> <p>Cualquier tipo de notificación y/o reclamación solamente será válida por notificación escrita y/o correo certificado. </p> <p>Celiapp se reserva el derecho de modificación de las condiciones de uso y responsabilidades, siendo los mismos válidos sólo desde el momento posterior de su modificación. </p><br>'),
(4, 'RESPONSABILIDADES', '<ul><li>Celiapp no se hace responsable de la información y contenidos almacenados en  foros, redes sociales o cualesquier otro medio que permita a terceros publicar contenidos de forma independiente en la página web del prestador. </li> <li>Celiapp no se hace responsable de la información que podrá ser publicada en los sitios accesibles desde <a href="http://www.celiapp-qa.16mb.com/">Celiapp</a> siendo responsabilidad de los dueños o administradores de dichos sitios. Por no tener control sobre los mismos, Celiapp no se hace responsable de la veracidad de sus contenidos ni de sus funcionamientos.</li> <li>Se excluye toda responsabilidad por alguna incidencia técnica o fallo que se produzca cuando el usuario se conecte a internet. Igualmente no se garantiza la inexistencia de interrupciones o errores en el acceso al sitio web.</li> <li>Así mismo, Celiapp se reserva el derecho a actualizar, modificar o eliminar la información contenida en su página web, así como la configuración o presentación del mismo, en cualquier momento sin asumir alguna responsabilidad por ello.</li> <li>Se le comunica al usuario que cualquier precio que pueda ver en nuestra web será solamente orientativo. Si el usuario desea saber con exactitud el precio o si el producto en el momento actual cuenta con alguna oferta de la cual se puede beneficiar ha de acudir a alguna de las tiendas físicas.</li> <li>CeliAPP no se responsabiliza por el listado de productos mostrado en la aplicación, siendo el mismo responsabilidad del ente A.N.M.A.T. Quien crea, redacta y actualiza el listado.</li> <li>Dicho listado de productos solo es válido para el territorio de la República Argentina.</li> <li>Dicho listado de productos será actualizado cuando el ente responsable del mismo (ANMAT), lo haga, sin embargo Celiapp hará los esfuerzos razonables para incluir una información actualizada y veraz en el Sitio Web y, además, empleará medidas de seguridad razonables para que la información del Sitio Web no sea alterada.</li> <li>Celiapp no asumirá responsabilidades por errores, omisiones o actos de terceros en el contenido del listado a cargo del ente ANMAT. En esta misma línea, Celiapp tampoco se responsabiliza por los daños y perjuicios que pudiera ocasionar el uso de la información que provee Celiapp.</li> <li>CeliAPP no se hace responsable por la desactualización, baja o alta de ningún producto, dicha responsabilidad es competencia del ente  ANMAT.</li> <li>Queda entendido que el usuario utiliza y navega en el Sitio Web bajo su propio riesgo. Celiapp  y ninguna otra parte involucrada en su creación, producción o montaje, son responsables por cualquier daño o perjuicio, resultante de su simple acceso (entrada) o uso del Sitio Web.</li>  <li>Celiapp  no asume responsabilidad y no podrá ser acusada por daños informáticos causados por virus, gusanos, troyanos o cualesquier otro código malicioso que pudiesen infectar su computadora u otro medio informático como consecuencia o por cuenta de su acceso, uso, o navegación en el sitio web o por bajar materiales, datos, textos, imágenes, videos o audios de la misma.</li> <li>La demora u omisión de Celiapp en exigir el estricto cumplimiento de estos Términos y Condiciones no podrá interpretarse como renuncia a sus derechos. <li>En caso de que alguna disposición de estos Términos y Condiciones fuera declarada nula, ello no afectará la validez de las demás.</li> <li>Estos Términos y Condiciones se rigen por las leyes de Argentina, con exclusión de toda norma que remita a la aplicación de una ley extranjera y cualquier controversia será dirimida ante los tribunales correspondientes.</li> <li>En última instancia el usuario es el único responsable del uso que realice de los servicios, contenidos, enlaces (links) e hipertexto incluidos en <a href="http://www.celiapp-qa.16mb.com/">Celiapp</a>.</li></ul><br>'),
(5, 'PROPIEDAD INTELECTUAL', '<p>El usuario asumirá que todo lo que usted vea o lea en el Sitio Web tiene derechos de autor o está protegido como marca registrada, a no ser que expresamente se especifique lo contrario, y no podrá ser utilizado, sino como se estipula en este aviso legal o en el texto del Sitio Web, sin el consentimiento previo y por escrito de Celiapp</p> <p>El acceso a nuestra página web no implica autorización para su reproducción y/o distribución. </p> <p>Ningún material publicado en esta web podrá ser reproducido, copiado o publicado sin el consentimiento por escrito de Celiapp. </p> <p>Toda la información que se reciba en la web, como comentarios, sugerencias o ideas, se considerará cedida a Celiapp de manera gratuita. No debe enviarse información que NO pueda ser tratada de este modo. </p> <p>Todos los productos y servicios de estas páginas que NO son propiedad de Celiapp son marcas registradas de sus respectivos propietarios y son reconocidas como tales por nuestra empresa. Solamente aparecen en la web de Celiapp a efectos de promoción y de recopilación de información. Estos propietarios pueden solicitar la modificación o eliminación de la información que les pertenece.</p>');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE IF NOT EXISTS `producto` (
  `RNPA` varchar(20) COLLATE utf8_bin NOT NULL,
  `categoria` varchar(50) COLLATE utf8_bin NOT NULL,
  `marca` varchar(50) COLLATE utf8_bin NOT NULL,
  `nombre_fantasia` varchar(50) COLLATE utf8_bin NOT NULL,
  `descripcion` varchar(200) COLLATE utf8_bin NOT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`RNPA`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`RNPA`, `categoria`, `marca`, `nombre_fantasia`, `descripcion`, `time_stamp`) VALUES
('876678', 'jugos', 'arcor', 'jugo arcor', 'jugo en polvo sabor naranja', '2016-10-10 21:16:45'),
('123321', 'agua', 'cimess', 'agua sin gas', 'agua sin gas sin tacc', '2016-10-10 21:28:18'),
('99445522', 'Leche', 'La Serenísima', '', 'Leche sachet entera sin tacc', '2016-10-19 18:08:53'),
('123123123', 'Leche', 'La Serenísima', '', 'Leche sachet descremada sin tacc', '2016-10-19 18:11:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto_precio`
--

CREATE TABLE IF NOT EXISTS `producto_precio` (
  `RNPA` varchar(20) COLLATE utf8_bin NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `precio` int(11) NOT NULL,
  `ubicacion` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`RNPA`,`id_usuario`),
  KEY `id_usuario` (`id_usuario`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `nombre` varchar(100) COLLATE utf8_bin NOT NULL,
  `apellido` varchar(100) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id_usuario`,`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
