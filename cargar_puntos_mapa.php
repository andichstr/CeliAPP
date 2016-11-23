<?php
include_once 'configure.php';

function cargarPuntos() {
    if (isset($_REQUEST['rnpa'])) {
        $rnpa = $_REQUEST['rnpa'];
        $con = new Conexion();
        $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        if (isset($rnpa)) {
            $query = $con->prepare("SELECT DISTINCT ub.ubicacion, ub.precio, us.nombre  FROM " . lista_ubicacion . " ub INNER JOIN " . tabla_usuario . " us ON ub.id_usuario = us.id_usuario WHERE (rnpa=:rnpa)");
            $query->bindParam(':rnpa', $rnpa);
        }
        $query->execute();
        $result = $query->fetchAll();
        if (isset($result)) {
            $json = json_encode($result);
            echo $json;
        } else {
            echo 'No hay ubicaciones cargadas en la base de datos';
        }
        $con = null;
    } else {
        echo 'No envio ninguna categoria';
    }
}

cargarPuntos();

?>
