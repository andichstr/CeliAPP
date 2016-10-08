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
                echo '<td>' . $row['RNPA'] . '</td>';
                echo '<td>' . $row['categoria'] . '</td>';
                echo '<td>' . $row['marca'] . '</td>';
                echo '<td>' . $row['descripcion'] . '</td>';
                echo '</tr>';
            }
        } else if (isset($result)) {
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
    } else {
        echo 'No envio ninguna categoria';
    }
}

validarFormulario();