<?php

include_once 'configure.php';

function cargarProd() {
    $con = new Conexion();
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if (isset($_REQUEST['latitud']) && isset($_SESSION['longitud']) && isset($_SESSION['id_usuario'])) {
        $latitud = $_REQUEST['latitud'];
        $longitud = $_REQUEST['longitud'];
        $id_usuario = $_SESSION['id_usuario'];
        if (isset($_REQUEST['precio'])) {
            $precio = $_REQUEST['precio'];
            $query = $con->prepare("INSERT INTO " . lista_ubicacion . "(id_usuario, latitud, longitud, precio) VALUES (:id_usuario, :latitud, :longitud, :precio)");
            $query->bindParam(':id_usuario', $id_usuario);
            $query->bindParam(':latitud', $latitud);
            $query->bindParam(':longitud', $longitud);
            $query->bindParam(':precio', $precio);
        } else {
            $query = $con->prepare("INSERT INTO " . lista_ubicacion . "(id_usuario, latitud, longitud) VALUES (:id_usuario, :latitud, :longitud)");
            $query->bindParam(':id_usuario', $id_usuario);
            $query->bindParam(':latitud', $latitud);
            $query->bindParam(':longitud', $longitud);
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