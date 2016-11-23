<?php

include_once 'configure.php';

function cargarProd() {
    $con = new Conexion();
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if (isset($_REQUEST['ubicacion']) && isset($_SESSION['id_usuario'])) {
        $ubicacion = $_REQUEST['ubicacion'];
        $id_usuario = $_SESSION['id_usuario'];
        if (isset($_REQUEST['precio'])) {
            $precio = $_REQUEST['precio'];
            $query = $con->prepare("INSERT INTO " . lista_ubicacion . "(id_usuario, ubicacion, precio) VALUES (:id_usuario, :ubicacion, :precio)");
            $query->bindParam(':id_usuario', $id_usuario);
            $query->bindParam(':ubicacion', $ubicacion);
            $query->bindParam(':precio', $precio);
        } else {
            $query = $con->prepare("INSERT INTO " . lista_ubicacion . "(id_usuario, ubicacion) VALUES (:id_usuario, :ubicacion)");
            $query->bindParam(':id_usuario', $id_usuario);
            $query->bindParam(':ubicacion', $ubicacion);
        }
        if ($query->execute()) {
            var_dump($query);
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