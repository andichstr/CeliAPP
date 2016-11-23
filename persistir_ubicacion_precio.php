<?php

include_once 'configure.php';

function cargarProd() {
    $con = new Conexion();
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if (isset($_REQUEST['ubicacion'])) {
        $ubicacion = ($_REQUEST['ubicacion']);
        if (isset($_REQUEST['precio'])) {
            $precio = $_REQUEST['precio'];
            $query = $con->prepare("INSERT INTO " . lista_ubicacion . "(RNPA, categoria, marca, nombre_fantasia, descripcion) VALUES " . $data . ";");
        } else {
            echo 'data not defined';
        }
        if ($query->execute()) {
            var_dump($query);
            echo 'Si';
        } else {
            echo 'Error!';
        }
    } else {
        echo 'No agarraste nada';
    }
}

cargarProd();
?>