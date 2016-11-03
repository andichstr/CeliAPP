<?php

include_once 'configure.php';

function cargarProd() {
    var_dump($_REQUEST['data']);
    $con = new Conexion();
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//    if (isset($_REQUEST['categoria'])) {
//        $categoria = $_REQUEST['categoria'];
//        $marca = $_REQUEST['marca'];
//        $nombrefantasia = $_REQUEST['nombrefantasia'];
//        $descripcion = $_REQUEST['descripcion'];
//        $rnpa = $_REQUEST['marca'];
//        
//        if (isset($data)) {
//            $query = $con->prepare("INSERT INTO " . tabla_productos . " (RNPA, categoria, marca, nombre_fantasia, descripcion) VALUES (:rnpa, :categoria, :marca, :nombrefantasia, :descripcion)");
//            $query->bindParam(':categoria', $categoria);
//            $query->bindParam(':marca', $marca);
//            $query->bindParam(':nombrefantasia', $nombrefantasia);
//            $query->bindParam(':descripcion', $descripcion);
//            $query->bindParam(':rnpa', $rnpa);
    if (isset($_REQUEST['data'])) {
//        $data = stripslashes($_REQUEST["data"]);
        $data = json_decode($data);
        var_dump($data);
        if (isset($data)) {
            $query = $con->prepare("INSERT INTO " . tabla_productos . " (`RNPA`, `categoria`, `marca`, `nombre_fantasia`, `descripcion`) VALUES :data");
            $query->bindParam(':data', $data);
        }else{
            echo 'data not defined';
        }
        if ($query->execute()){
            var_dump($query);
            echo 'Si';
        }
        else{
            echo 'Error!';
        }
    }
    else{
        echo 'No agarraste nada';
        var_dump($_REQUEST['data']);
    }
}

cargarProd();
?>