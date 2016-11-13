function textoAcercaDe(){
    $("#txtTitulo").html("¿Que es CeliApp?");
    $("#txtAcercaDe").html("Acerca de CeliAPP");
    $("#txtDesc").html("<p>CeliAPP nació en Argentina como una herramienta útil para la comunidad,  luego de conocer el día a día y la problemática que atraviesan nuestros allegados con celiaquía.</p><p>La dificultad de encontrar los productos de manera sencilla o la necesidad de  utilizar múltiples servicios para obtener los resultados esperados, hace que sea muy frustrante y tedioso para las personas con esta condición.</p><p>Es por eso que desde CeliAPP queremos ayudar a hacer esta tarea mucho más amena, aportando agilidad en la búsqueda, ofreciendo  orientación sobre los posibles lugares de compra y precios de referencia que los mismos usuarios pueden agregar asegurando un compromiso  para el resto de la comunidad.</p>");
    if (! $("#liAcercaDe").hasClass("active")){
        $("#liAcercaDe").addClass("active");
        if ($("#liDesarrolladores").hasClass("active")){
            $("#liDesarrolladores").removeClass("active");
        } else if ($("#liDesarrollo").hasClass("active")){
            $("#liDesarrollo").removeClass("active");
        };
    };
};

function textoDesarrolladores(){
    $("#txtTitulo").html("¿Quienes desarrollamos CeliApp?");
    $("#txtAcercaDe").html("Acerca de Desarrolladores de CeliAPP");
    $("#txtDesc").html("<p>Schuster Andres Norberto</p><p>Medina Matias</p><p>Soria Maximiliano</p><p>Escudero Cristian</p><p>Venica Roman</p><p>Piriz Fernando</p>");
    if (! $("#liDesarrolladores").hasClass("active")){
        $("#liDesarrolladores").addClass("active");
        if ($("#liDesarrollo").hasClass("active")){
            $("#liDesarrollo").removeClass("active");
        }else if ($("#liAcercaDe").hasClass("active")){
            $("#liAcercaDe").removeClass("active");
        };
    };
};

function textoSoftware(){
    $("#txtTitulo").html("Catedra de Desarrollo de Software");
    $("#txtAcercaDe").html("Acerca de Desarrollo de Software");
    $("#txtDesc").html("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ");
    if (! $("#liDesarrollo").hasClass("active")){
        $("#liDesarrollo").addClass("active");
        if ($("#liDesarrolladores").hasClass("active")){
            $("#liDesarrolladores").removeClass("active");
        }else if ($("#liAcercaDe").hasClass("active")){
            $("#liAcercaDe").removeClass("active");
        };
    };
};


$(document).ready(function(){
    $("#aLegales").on('click', function(){
        $.ajax({
            url: 'cargarlegales.php',
            method: 'POST',
            success: function(response){
                console.log(response);
                var texto = JSON.parse(response);
                //console.log(texto);
                var txt = "";
                var i = 0;
                $("#modalTitle").html(texto[i].titulo);
                for (i=0; i<texto.length-1; i++){
                    //console.log(texto[i].titulo);
                    //console.log(texto[i].descripcion);
                    txt += "<p>";
                    txt += texto[i].descripcion;
                    txt += "</p>";
                    i++;
                    txt += "<h4>";
                    txt += texto[i].titulo;
                    txt += "</h4>";
                    i--;
                }
                txt += "<p>" + texto[texto.length-1].descripcion + "</p>";
                $("#modalDesc").html(txt);
                $("#divModal").modal('show');
            }
        });
    });
});