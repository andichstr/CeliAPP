<?php

include_once 'configure.php';

session_start();
$_SESSION['nombre'] = $_REQUEST['nombre'];
$_SESSION['apellido'] = $_REQUEST['apellido'];
$_SESSION['email'] = $_REQUEST['email'];
$_SESSION['token'] = $_REQUEST['token'];

function cargarUsuario() {
    $con = new Conexion();
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if (isset($_REQUEST['nombre']) && isset($_REQUEST['apellido']) && isset($_REQUEST['email'])) {
        $nombre = ($_REQUEST['nombre']);
        $apellido = ($_REQUEST['apellido']);
        $email = ($_REQUEST['email']);
        $query = $con->prepare("SELECT id_usuario FROM " . tabla_usuarios . " WHERE email=:email");
        $query->bindParam(':email', $email);
        if ($query->execute()) {
            if ($query->rowCount() == 0){
                $query2 = $con->prepare("INSERT INTO " . tabla_usuarios . " (nombre, apellido, email) VALUES (:nombre, :apellido, :email)");
                $query2->bindParam(':nombre', $nombre);
                $query2->bindParam(':apellido', $apellido);
                $query2->bindParam(':email', $email);
                if ($query2->execute()) {
                    echo 'Usuario dado de alta en la base de datos!';
                } else {
                    echo 'El usuario no ha sido dado de alta en la base de datos, error en la ejecución de la query.';
                }
            } else {
                echo 'El usuario ya se encuentra en la base de datos!';
            }
        } else {
            echo 'Error en la primera query!';
        }
    } else {
        echo 'No agarraste nada';
    }
}

cargarUsuario();
?>
