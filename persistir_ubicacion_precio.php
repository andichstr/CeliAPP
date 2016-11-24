<?php

include_once 'configure.php';
session_start();

function cargarProd() {
    $con = new Conexion();
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    if (isset($_POST['latitud']) && isset($_POST['longitud']) && isset($_SESSION['id_usuario']) && isset($_POST['rnpa'])) {
        $latitud = $_POST['latitud'];
        $longitud = $_POST['longitud'];
        $id_usuario = $_SESSION['id_usuario'];
        $rnpa = $_POST['rnpa'];
        $fecha = date('Y-m-d');
        if (isset($_POST['precio'])) {
            $precio = $_POST['precio'];
            $query = $con->prepare("INSERT INTO " . lista_ubicacion . "(rnpa, id_usuario, latitud, longitud, precio, fecha) VALUES (:rnpa, :id_usuario, :latitud, :longitud, :precio, :fecha)");
            $query->bindParam(':rnpa', $rnpa);
            $query->bindParam(':id_usuario', $id_usuario);
            $query->bindParam(':latitud', $latitud);
            $query->bindParam(':longitud', $longitud);
            $query->bindParam(':precio', $precio);
            $query->bindParam(':fecha', $fecha);
        } else {
            $query = $con->prepare("INSERT INTO " . lista_ubicacion . "(id_usuario, latitud, longitud, fecha) VALUES (:id_usuario, :latitud, :longitud, :fecha)");
            $query->bindParam(':rnpa', $rnpa);
            $query->bindParam(':id_usuario', $id_usuario);
            $query->bindParam(':latitud', $latitud);
            $query->bindParam(':longitud', $longitud);
            $query->bindParam(':fecha', $fecha);
        }
        if ($query->execute()) {
            echo 'Si';
        } else {
            echo 'No se ejecuto la query!';
        }
    } else {
        echo 'Ubicacion no seteada, o Usuario no dado de alta';
    }
}

cargarProd();
?>