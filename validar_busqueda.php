<?php

include_once 'configure.php';

function validarFormulario() {
    if (isset($_REQUEST['producto'])) {
        $producto = $_REQUEST['producto'];
    } else {
        echo 'No product set';
    }
    $con = new Conexion();
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    if (isset($producto)) {
        $query = $con->prepare("SELECT RNPA, categoria, marca, descripcion FROM " . tabla_productos . " WHERE UPPER(marca) LIKE UPPER('%" . $producto . "%') OR UPPER(descripcion) LIKE UPPER('%" . $producto . "%') OR UPPER(categoria) LIKE UPPER('%" . $producto . "%')");
    } else {
        $descError = "No se admiten busquedas con parametros vacios.";
        echo $descError;
        return false;
    }
    if ($query->execute()) {
        $result = $query->fetchAll();
        if (is_array($result) || is_object($result)) {
            foreach ($result as $row) {
                echo '<tr>';
                echo '<td>' . urldecode($row['RNPA']) . '</td>';
                echo '<td>' . urldecode($row['categoria']) . '</td>';
                echo '<td>' . urldecode($row['marca']) . '</td>';
                echo '<td>' . urldecode($row['descripcion']) . '</td>';
                echo '<td><button type="button" class="btn btn-rosa btn-lg" onclick="redirigirProducto(\'' . urldecode($row['RNPA']) . '\', \'' . urldecode($row['descripcion']) . '\', \'' . urldecode($row['marca']) . '\', \'' . urldecode($row['categoria']) . '\');"><span class="glyphicon glyphicon-map-marker"></span></button></td>';
                echo '</tr>';
            }
        } else if (isset($result)) {
            if ($result != "") {
                echo '<tr>';
                echo '<td>' . $result['RNPA'] . '</td>';
                echo '<td>' . urldecode($result['categoria']) . '</td>';
                echo '<td>' . urldecode($result['marca']) . '</td>';
                echo '<td>' . urldecode($result['descripcion']) . '</td>';
                echo '<td><button type="button" class="btn btn-rosa btn-lg" onclick="redirigirProducto(\'' . urldecode($result['RNPA']) . '\', \'' . urldecode($result['descripcion']) . '\', \'' . urldecode($result['marca']) . '\', \'' . urldecode($result['categoria']) . '\');"><span class="glyphicon glyphicon-map-marker"></span></button></td>';
                echo '</tr>';
            } else {
                echo '0';
            }
        }
        $con = null;
    } else {
        echo 'Error en la query';
    }
}

validarFormulario();
?>