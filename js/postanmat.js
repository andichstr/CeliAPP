$(document).ready(function () {

});


function cargarDatos() {
    var tabla = $("#GridView1 > tbody > tr:gt(0)");
    data = "";
    var rnpa = ""
    tabla.each(function () {
        if (rnpa != this.cells[4].innerHTML.replace(/,/g, " ").replace(/"/g, " ")) {
            data += '("' + encodeURIComponent(this.cells[4].innerHTML).replace(/,/g, " ").replace(/"/g, " ") + '", "';
            data += encodeURIComponent(this.cells[0].innerHTML).replace(/,/g, " ").replace(/"/g, " ") + '", "';
            data += encodeURIComponent(this.cells[1].innerHTML).replace(/,/g, " ").replace(/"/g, " ") + '", "';
            data += encodeURIComponent(this.cells[2].innerHTML).replace(/,/g, " ").replace(/"/g, " ") + '", "';
            data += encodeURIComponent(this.cells[3].innerHTML).replace(/,/g, " ").replace(/"/g, " ") + '"), ';
        }
        rnpa = encodeURIComponent(this.cells[4].innerHTML).replace(/,/g, " ").replace(/"/g, " ");
    });

    data = data.slice(0, -2);
    
//    data = encodeURIComponent(data);
//    console.log(data);

    $.ajax({
        data: {data: data},
        dataType: "json",
        url: "actualizarListado.php",
        type: "POST",
        success: function (response) {
            console.log("La base de datos se ha actualizado con éxito");
            console.log(response);
        },
        failure: function (response) {
            console.log("Ha surgido un error. Por favor, intente nuevamente");
            console.log(response);
        }
    });
}
;