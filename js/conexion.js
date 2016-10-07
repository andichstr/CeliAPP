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
                console.log($("#buscar-marca").val());
                var parametros = {
                    "marca": $('#buscar-marca').val()
                }
            } else if ($("#buscar-marca").val() == "") {
                console.log($("#buscar-nombre").val());
                var parametros = {
                    "nombre": $('#buscar-nombre').val()
                }
            } else {
                console.log($("#buscar-nombre").val());
                console.log($("#buscar-marca").val());
                var parametros = {
                    "nombre": $('#buscar-nombre').val(),
                    "marca": $('#buscar-marca').val()
                }
            }
            $.ajax({
                data: parametros,
                url: this.action,
                type: this.method,
                success: function (response) {
                    console.log(response);
                    $("#listado").html(response);
                },
                failure: function (response) {
                    $("#prebusqueda").addClass("bg-danger");
                    $("#prebusqueda").show();
                    $("#prebusqueda").html("Error en la busqueda, verifique su conexion e intente nuevamente.");
                }
            });
        }
    }));
});