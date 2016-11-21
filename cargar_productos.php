<?php

include_once 'configure.php';

function cargarFormulario() {

    $con = new Conexion();
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $query = $con->prepare("SELECT DISTINCT categoria FROM " . tabla_productos);
    $query->execute();
    $result = $query->fetchAll();
    if (is_array($result) || is_object($result)) {
        echo '<div class="form-group">';
        foreach ($result as $row) {
            echo '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 izquierda" style="padding-bottom: 2px">';
            echo '<input type="button" class="btn btn-rosa" value="' .urldecode($row['categoria']). '" onclick="enviarFormulario(\'' .$row['categoria']. '\')"/>';
            echo '</div>';
        }
        echo '</div>';
    } else if (isset($result)) {
        echo '<div class="form-group">';
        echo '<div class="row">';
        echo '<div class="col col-sm-1 col-lg-1">';
        echo '<input type="button" class="cat-boton" onclick="enviarFormulario(' .$result['categoria']. ')" value="' . urldecode($result['categoria']) . '" id="' . urldecode($result['categoria']) . '"/>';
        echo '</div>';
        echo '</div>';
        echo '</div>';
    } else {
        echo 'No Data';
    }
    $con = null;
};

cargarFormulario();