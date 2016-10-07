$(document).ready(function(){
    $("#buscar").on('submit',(function(event){
        event.preventDefault();
        if ($("#buscar-nombre") == "" && ($("#buscar-marca") == "")){
            $("#prebusqueda").addClass("bg-danger");
            $("#prebusqueda").show();
        }else{
            $("#prebusqueda").hide();
            var parametros = {
                "nombre" : $('#buscar-nombre').val(),
                "marca" : $('#buscar-marca').val()
            };
            $.ajax({
                data:  parametros,
                url:   this.action,
                type:  this.method,
                success:  function (response) {
                    imprimirListado(response);
                    },
                failure: function (response) {
                    $("#prebusqueda").addClass("bg-danger");
                    $("#prebusqueda").show();
                    $("#prebusqueda").html("Error en la busqueda, verifique su conexion e intente nuevamente.");
                }
            });
        };
    }));
});

function imprimirListado(response){
    
};