<?php

session_start();

// Destruir todas las variables de sesión.
$_SESSION = array();

// Finalmente, destruir la sesión.
session_destroy();

if (isset($_SESSION)){
    echo 'No hay sesion';
} else {
    echo 'Sesion abierta';
};
?>
