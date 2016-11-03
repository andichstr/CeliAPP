<?php

echo 'entraste';
include_once 'configure.php';

function cargarProd() {
    $con = new Conexion();
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if (isset($_REQUEST['data'])) {
        $data = ($_REQUEST['data']);
        echo $data;
        if (isset($data)) {
            $query = $con->prepare("INSERT INTO " . tabla_productos . "(RNPA, categoria, marca, nombre_fantasia, descripcion) VALUES " . $data . ";");
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