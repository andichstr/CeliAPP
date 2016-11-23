$(document).ready(function () {
    console.log(localStorage.getItem("productoMapa"));
    console.log(localStorage.getItem("marcaMapa"));
    console.log(localStorage.getItem("categoriaMapa"));
    $("#pac-input").change(function(){
        $("#txtUbicacion").val($("#pac-input").val());
        $("#divForm").show();
    });
    var tituloProducto = "<h2>" + localStorage.getItem("productoMapa") + "</h2>";
    var marcaProducto = localStorage.getItem("marcaMapa")
    var categoriaProducto = localStorage.getItem("categoriaMapa")
    $("#titulo").html(tituloProducto);
    $("#marca").html(marcaProducto);
    $("#categoria").html(categoriaProducto);
    localStorage.removeItem('rnpaMapa');
    localStorage.removeItem('productoMapa');
    localStorage.removeItem('marcaMapa');
    localStorage.removeItem('categoriaMapa');
});