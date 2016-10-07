<?php

include_once 'configure.php';

function validarFormulario() {
    if (isset($_REQUEST['nombre'])) {
        $nombre = $_REQUEST['nombre'];
    }
    if (isset($_REQUEST['marca'])) {
        $marca = $_REQUEST['marca'];
    }
    $con = new Conexion();
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    if (isset($nombre)) {
        if (isset($marca)) {
            $query = $con->prepare("SELECT RNPA, categoria, marca, descripcion FROM " . tabla_productos . " WHERE (descripcion LIKE '%" . $nombre . "%' AND (marca='" . $marca . "'))");
        } else {
            $query = $con->prepare("SELECT RNPA, categoria, marca, descripcion FROM " . tabla_productos . " WHERE (descripcion LIKE '%" . $nombre . "%')");
        }
    } else if (isset($marca)) {
        $query = $con->prepare("SELECT RNPA, categoria, marca, descripcion FROM " . tabla_productos . " WHERE (marca='" . $marca . "')");
    } else {
        $descError = "No se admiten busquedas con parametros vacios.";
        echo $descError;
        return false;
    }
    $query->execute();
    $result = $query->fetchAll();
    if (is_array($result) || is_object($result)) {
        foreach ($result as $row) {
            echo '<tr>';
            echo '<td>' . $row['RNPA'] . '</td>';
            echo '<td>' . $row['categoria'] . '</td>';
            echo '<td>' . $row['marca'] . '</td>';
            echo '<td>' . $row['descripcion'] . '</td>';
            echo '</tr>';
        }
    } else if (isset($result)) {
        echo '<script>console.log("resultado")</script>';
        echo '<tr>';
        echo '<td>' . $result['RNPA'] . '</td>';
        echo '<td>' . $result['categoria'] . '</td>';
        echo '<td>' . $result['marca'] . '</td>';
        echo '<td>' . $result['descripcion'] . '</td>';
        echo '</tr>';
    } else {
        echo 'No Data';
    }
    $con = null;
}

validarFormulario();
?>