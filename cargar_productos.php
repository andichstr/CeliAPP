<?php

include_once 'configure.php';

function cargarFormulario() {

    $con = new Conexion();
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $query = $con->prepare("SELECT DISTINCT categoria FROM " . tabla_productos);
    $query->execute();
    $result = $query->fetchAll();
    if (is_array($result) || is_object($result)) {
        $i = 1;
        echo '<div class="form-group">';
        echo '<div class="row">';
        foreach ($result as $row) {
            echo '<div class="col col-sm-1 col-lg-1">';
            echo '<input type="submit" class="cat-boton" value="' . $row['categoria'] . '" id="' . $row['categoria'] . '"/>';
            echo '</div>';
            if ($i == 12) {
                echo '</div>';
                echo '<div class="row">';
                $i = 1;
            } else {
                $i += 1;
            }
        }
        echo '</div>';
        echo '</div>';
    } else if (isset($result)) {
        echo '<div class="form-group">';
        echo '<div class="row">';
        echo '<div class="col col-sm-1 col-lg-1">';
        echo '<input type="submit" class="cat-boton" value="' . $result['categoria'] . '" id="' . $result['categoria'] . '"/>';
        echo '</div>';
        echo '</div>';
        echo '</div>';
    } else {
        echo 'No Data';
    }
    $con = null;
}

;

cargarFormulario();