$(document).ready(function () {

});


function cargarDatos() {
    var tabla = $("#GridView1 > tbody > tr:gt(0)");
    //data = '{"data": "';
    data = '';
    /*jsontabla = '{';
     tabla.each(function () {
     jsontabla += '{categoria: ' + this.cells[0].innerHTML.replace(/,/g, " ") + ', ';
     jsontabla += 'marca: ' + this.cells[1].innerHTML.replace(/,/g, " ") + ', ';
     jsontabla += 'nombrefantasia: ' + this.cells[2].innerHTML.replace(/,/g, " ") + ', ';
     jsontabla += 'descripcion: ' + this.cells[3].innerHTML.replace(/,/g, " ") + ', ';
     jsontabla += 'rnpa: ' + this.cells[4].innerHTML.replace(/,/g, " ") + '}, ';
     });
     jsontabla = jsontabla.slice(0,-2);
     jsontabla += '}';
     */
    var rnpa = ""
    tabla.each(function () {
        if (rnpa != this.cells[4].innerHTML.replace(/,/g, " ").replace(/"/g, " ")) {
            data += '("' + this.cells[4].innerHTML.replace(/,/g, " ").replace(/"/g, " ") + '", "';
            data += this.cells[0].innerHTML.replace(/,/g, " ").replace(/"/g, " ") + '", "';
            data += this.cells[1].innerHTML.replace(/,/g, " ").replace(/"/g, " ") + '", "';
            data += this.cells[2].innerHTML.replace(/,/g, " ").replace(/"/g, " ") + '", "';
            data += this.cells[3].innerHTML.replace(/,/g, " ").replace(/"/g, " ") + '"), ';
        }
        rnpa = this.cells[4].innerHTML.replace(/,/g, " ").replace(/"/g, " ");
    });

    data = data.slice(0, -2);
//     data += '"';

    console.log(data);

    $.ajax({
        data: {data: data},
        dataType: "json",
        url: 'actualizarListado.php',
        type: 'POST',
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