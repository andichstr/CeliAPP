<?php
include_once 'configure.php';

function validarFormulario() {
    if (isset($_REQUEST['categoria'])) {
        $categoria = $_REQUEST['categoria'];
        $con = new Conexion();
        $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        if (isset($categoria)) {
            $query = $con->prepare("SELECT RNPA, categoria, marca, descripcion FROM " . tabla_productos . " WHERE (categoria=:categoria)");
            $query->bindParam(':categoria', $categoria);
        }
        $query->execute();
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
            echo '<tr>';
            echo '<td>' . urldecode($result['RNPA']) . '</td>';
            echo '<td>' . urldecode($result['categoria']) . '</td>';
            echo '<td>' . urldecode($result['marca']) . '</td>';
            echo '<td>' . urldecode($result['descripcion']) . '</td>';
                echo '<td><button type="button" class="btn btn-rosa btn-lg" onclick="redirigirProducto(\'' . urldecode($result['RNPA']) . '\', \'' . urldecode($result['descripcion']) . '\', \'' . urldecode($result['marca']) . '\', \'' . urldecode($result['categoria']) . '\');"><span class="glyphicon glyphicon-map-marker"></span></button></td>';
            echo '</tr>';
        } else {
            echo 'No Data';
        }
        $con = null;
    } else {
        echo 'No envio ninguna categoria';
    }
}

validarFormulario();

?>