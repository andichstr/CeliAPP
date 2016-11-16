$(document).ready(function(){
    $("#buscar-nav").on('submit', function(event){
        event.preventDefault();
        if ($("#producto").val() != undefined || $("#producto").val() != null || $("#producto").val() != ""){
            localStorage.setItem("producto", $("#producto").val());
            url = 'busqueda_nombre_marca.php';
            document.location.href = url;
        }
    });
    $("#buscar-nav-oculto").on('submit', function(event){
        event.preventDefault();
        if ($("#producto-oculto").val() != undefined || $("#producto-oculto").val() != null || $("#producto-oculto").val() != ""){
            localStorage.setItem("producto", $("#producto-oculto").val());
            url = 'busqueda_nombre_marca.php';
            document.location.href = url;
        }
    });
});