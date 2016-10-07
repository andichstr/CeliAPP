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
    if (isset($nombre)) {
        if (isset($marca)) {
            $query = $con->prepare("SELECT RNPA, categoria, marca, descripcion FROM " . tabla_productos . " WHERE (descripcion=:nombre) AND (marca=:marca)");
            $query->bindParam(':nombre', $nombre);
            $query->bindParam(':marca', $marca);
            $query->execute();
            $con = null;
        } else {
            $query = $con->prepare("SELECT RNPA, categoria, marca, descripcion FROM " . tabla_productos . " WHERE (descripcion=:nombre)");
            $query->bindParam(':nombre', $nombre);
            $query->execute();
            $con = null;
        }
    } else if (isset($marca)) {
        $query = $con->prepare("SELECT RNPA, categoria, marca, descripcion FROM " . tabla_productos . " WHERE (marca=:marca)");
        $query->bindParam(':marca', $marca);
        $query->execute();
        $con = null;
    } else {
        $descError = "No se admiten busquedas con parametros vacios.";
        echo $descError;
        return false;
    }
}

validarFormulario();
?>
