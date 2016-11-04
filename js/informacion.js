$(document).ready ( function () {
    $(document).on ("click", "li", function () {
        $("#menuNavegacion").children().removeClass("active");
        $(this).addClass("active");
        $("#cajaPestanias").children().addClass("oculto");
        $("#"+(($(this).attr("textValue")))).removeClass("oculto");
})});
