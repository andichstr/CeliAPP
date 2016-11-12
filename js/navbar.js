$(document).ready(function(){
    $("#buscar-nav").on('submit', function(event){
        event.preventDefault();
        localStorage.setItem("producto", $("#producto").val());
        url = 'busqueda_nombre_marca.php';
        document.location.href = url;
    });
    $("#buscar-nav-oculto").on('submit', function(event){
        event.preventDefault();
        localStorage.setItem("producto", $("#producto-oculto").val());
        url = 'busqueda_nombre_marca.php';
        document.location.href = url;
    });
});