<?php

include_once 'configure.php';

function cargarModalLegales() {

    $con = new Conexion();
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    try {
        $query = $con->prepare("SELECT * FROM " . tabla_legales);
        $query->execute();
        //var_dump($query);
        $result = $query->fetchAll(PDO::FETCH_ASSOC);
        //var_dump($result);
        $txt = "";
        foreach ($result as $row) {
            $titulo = utf8_encode($row['titulo']);
            $desc = utf8_encode($row['descripcion']);
            $legales[] = array('titulo' => $titulo, 'descripcion' => $desc);
        }
        //var_dump($legales);
        $jsonlegales = json_encode(array_values($legales));
        //var_dump($jsonlegales);
        echo $jsonlegales;
        $con = null;
    } catch (Exception $e) {
        echo 'Error: ' . $e->getMessage();
    }
}

cargarModalLegales();

?>