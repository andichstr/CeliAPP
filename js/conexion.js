$(document).ready(function () {
    $("#buscar-form").on('submit', (function (event) {
        event.preventDefault();
        if ($("#buscar-nombre").val() == "" && ($("#buscar-marca").val() == "")) {
            $("#prebusqueda").addClass("bg-danger");
            $("#prebusqueda").html("Debe ingresar al menos 1 valor para realizar la busqueda.");
            $("#prebusqueda").show();
        } else {
            $("#prebusqueda").hide();
            if ($("#buscar-nombre").val() == "") {
                //console.log($("#buscar-marca").val());
                var parametros = {
                    "marca": $('#buscar-marca').val()
                };
            } else if ($("#buscar-marca").val() == "") {
                console.log($("#buscar-nombre").val());
                var parametros = {
                    "nombre": $('#buscar-nombre').val()
                };
            } else {
                console.log($("#buscar-nombre").val());
                console.log($("#buscar-marca").val());
                var parametros = {
                    "nombre": $('#buscar-nombre').val(),
                    "marca": $('#buscar-marca').val()
                };
            }
            $.ajax({
                data: parametros,
                url: this.action,
                type: this.method,
                success: function (response) {
                    if (response != '0'){
                        $("#listado").html(response);
                        $("#tabla-busqueda").show();
                        $("#buscar-form").hide();
                        $("#divVolver").html('<input type="button" value="Volver" onclick="volverBuscarNombreMarca();"/>');
                    }else{
                        $("#listado").html('No se encontraron resultados con esos valores');
                    }
                },
                failure: function (response) {
                    $("#prebusqueda").addClass("bg-danger");
                    $("#prebusqueda").show();
                    $("#prebusqueda").html("Error en la busqueda, verifique su conexion e intente nuevamente.");
                }
            });
        }
    }));
    $("#div-formulario").ready(function () {
        $.ajax({
            url: 'cargar_productos.php',
            type: 'POST',
            success: function (response) {
                //console.log(response);
                $("#buscar-cat-form").html(response);
                $("#buscar-cat-form").show();
                $("#prebusqueda").removeClass("bg-danger");
                $("#prebusqueda").fadeOut();
            },
            failure: function (response) {
                $("#prebusqueda").addClass("bg-danger");
                $("#prebusqueda").html("Error en la busqueda, verifique su conexion e intente nuevamente.");
                $("#prebusqueda").fadeIn();
            }
        });
    });
});

function enviarFormulario(categoria) {
    var parametros = {
        "categoria": categoria
    };
    $.ajax({
        data: parametros,
        url: 'busqueda_categoria.php',
        type: 'POST',
        success: function (response) {
            //console.log(response);
            $("#listado").html(response);
            $("#buscar-cat-form").hide();
            $("#tabla-busqueda").show();
            $("#divVolver").html('<input type="button" value="Volver" onclick="volverBuscarCategoria();"/>');
        },
        failure: function (response) {
            $("#prebusqueda").addClass("bg-danger");
            $("#prebusqueda").show();
            $("#prebusqueda").html("Error en la busqueda, verifique su conexion e intente nuevamente.");
        }
    });
}
;

function volverBuscarNombreMarca(){
    $("#tabla-busqueda").hide();
    $("#buscar-form").show();
    $("#divVolver > input").remove();
};

function volverBuscarCategoria(){
    $("#tabla-busqueda").hide();
    $("#buscar-cat-form").show();
    $("#divVolver > input").remove();
};