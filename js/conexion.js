$(document).ready(function () {
    console.log(localStorage.getItem("producto"));
    console.log(localStorage.getItem("producto-oculto"));
    if (localStorage.getItem("producto") != null || localStorage.getItem("producto") != undefined) {
        var parametros = {
            "producto": localStorage.getItem("producto")
        };
        $.ajax({
            data: parametros,
            url: 'validar_busqueda.php',
            type: 'POST',
            success: function (response) {
                if (response != '0') {
                    if (response == " ") {
                        $("#prebusqueda").html("No se encontraron valores con ese producto.");
                        $("#prebusqueda").addClass("bg-warning");
                        $("#prebusqueda").show();
                    } else {
                        $("#listado").html(response);
                        tablepager();
                        $("#tabla-busqueda").show();
                        $("#paginador").show();
                        $("#buscar-form").hide();
                        $("#divVolver").html('<input type="button" value="Volver" onclick="volverBuscarNombreMarca();"/>');
                    };
                } else {
                    $("#prebusqueda").html('No se encontraron resultados con esos valores');
                    $("#prebusqueda").addClass("bg-warning");
                    $("#prebusqueda").show();
                };
            },
            failure: function (response) {
                $("#prebusqueda").addClass("bg-danger");
                $("#prebusqueda").show();
                $("#prebusqueda").html("Error en la busqueda, verifique su conexion e intente nuevamente.");
            }
        });
        localStorage.removeItem("producto");
        localStorage.removeItem("producto-oculto");
    };
    $("#buscar-form").on('submit', (function (event) {
        event.preventDefault();
        if ($("#buscar-producto").val() == "") {
            $("#prebusqueda").addClass("bg-danger");
            $("#prebusqueda").html("Debe ingresar algún valor para realizar la busqueda.");
            $("#prebusqueda").show();
        } else {
            $("#prebusqueda").hide();
            var parametros = {
                "producto": $('#buscar-producto').val()
            };
        };
        $.ajax({
            data: parametros,
            url: this.action,
            type: this.method,
            success: function (response) {
                if (response != '0') {
                    $("#listado").html(response);
                    tablepager();
                    $("#tabla-busqueda").show();
                    $("#paginador").show();
                    $("#buscar-form").hide();
                    $("#divVolver").html('<input type="button" value="Volver" onclick="volverBuscarNombreMarca();"/>');
                } else {
                    $("#listado").html('No se encontraron resultados con esos valores');
                };
                console.log(response);
            },
            failure: function (response) {
                $("#prebusqueda").addClass("bg-danger");
                $("#prebusqueda").show();
                $("#prebusqueda").html("Error en la busqueda, verifique su conexion e intente nuevamente.");
            }
        });
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
        url: 'validar_categorias.php',
        type: 'POST',
        success: function (response) {
            //console.log(response);
            $("#listado").html(response);
            tablepager();
            $("#buscar-cat-form").hide();
            $("#tabla-busqueda").show();
            $("#paginador").show();
            $("#divVolver").html('<input type="button" value="Volver" onclick="volverBuscarCategoria();"/>');
        },
        failure: function (response) {
            $("#prebusqueda").addClass("bg-danger");
            $("#prebusqueda").show();
            $("#prebusqueda").html("Error en la busqueda, verifique su conexion e intente nuevamente.");
        }
    });
};

function volverBuscarNombreMarca() {
    $("#tabla-busqueda").hide();
    $("#buscar-form").show();
    $("#divVolver > input").remove();
};

function volverBuscarCategoria() {
    $("#tabla-busqueda").hide();
    $("#buscar-cat-form").show();
    $("#divVolver > input").remove();
};

function redirigirProducto(producto, marca, categoria) {
    localStorage.setItem("productoMapa", producto);
    localStorage.setItem("marcaMapa", marca)
    localStorage.setItem("categoriaMapa", categoria)
    url = './producto.php';
    document.location.href = url;
};

function tablepager() {
    $("#listado").trigger('refreshComplete');
    $("#listado").trigger('update');
    $("#listado").trigger('pagerUpdate');
    var pagerOptions = {
        // target the pager markup - see the HTML block below
        container: $(".pager"),
        // use this url format "http:/mydatabase.com?page={page}&size={size}&{sortList:col}"
        ajaxUrl: null,
        // modify the url after all processing has been applied
        customAjaxUrl: function (table, url) {
            return url;
        },
        // ajax error callback from $.tablesorter.showError function
        // ajaxError: function( config, xhr, settings, exception ){ return exception; };
        // returning false will abort the error message
        ajaxError: null,
        // add more ajax settings here
        // see http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings
        ajaxObject: {dataType: 'json'},
        // process ajax so that the data object is returned along with the total number of rows
        ajaxProcessing: null,
        // Set this option to false if your table data is preloaded into the table, but you are still using ajax
        processAjaxOnInit: true,
        // output string - default is '{page}/{totalPages}'
        // possible variables: {size}, {page}, {totalPages}, {filteredPages}, {startRow}, {endRow}, {filteredRows} and {totalRows}
        // also {page:input} & {startRow:input} will add a modifiable input in place of the value
        // In v2.27.7, this can be set as a function
        // output: function(table, pager) { return 'page ' + pager.startRow + ' - ' + pager.endRow; }
        output: '{startRow:input} a {endRow} resultados ({totalRows})',
        // apply disabled classname (cssDisabled option) to the pager arrows when the rows
        // are at either extreme is visible; default is true
        updateArrows: true,
        // starting page of the pager (zero based index)
        page: 0,
        // Number of visible rows - default is 10
        size: 10,
        // Save pager page & size if the storage script is loaded (requires $.tablesorter.storage in jquery.tablesorter.widgets.js)
        //savePages : true,

        // Saves tablesorter paging to custom key if defined.
        // Key parameter name used by the $.tablesorter.storage function.
        // Useful if you have multiple tables defined
        //storageKey:'tablesorter-pager',

        // Reset pager to this page after filtering; set to desired page number (zero-based index),
        // or false to not change page at filter start
        pageReset: 0,
        // if true, the table will remain the same height no matter how many records are displayed. The space is made up by an empty
        // table row set to a height to compensate; default is false
        fixedHeight: false,
        // remove rows from the table to speed up the sort of large tables.
        // setting this to false, only hides the non-visible rows; needed if you plan to add/remove rows with the pager enabled.
        removeRows: false,
        // If true, child rows will be counted towards the pager set size
        countChildRows: false,
        // css class names of pager arrows
        cssNext: '.next', // next page arrow
        cssPrev: '.prev', // previous page arrow
        cssFirst: '.first', // go to first page arrow
        cssLast: '.last', // go to last page arrow
        cssGoto: '.gotoPage', // select dropdown to allow choosing a page

        cssPageDisplay: '.pagedisplay', // location of where the "output" is displayed
        cssPageSize: '.pagesize', // page size selector - select dropdown that sets the "size" option

        // class added to arrows when at the extremes (i.e. prev/first arrows are "disabled" when on the first page)
        cssDisabled: 'disabled', // Note there is no period "." in front of this class name
        cssErrorRow: 'tablesorter-errorRow' // ajax error information row

    };
    $("table").tablesorter({theme: 'blue', widthFixed: true, sortLocaleCompare: false, widgets: ['zebra']});
    $("table").tablesorterPager(pagerOptions);
    $("table").trigger("updateAll");
}
