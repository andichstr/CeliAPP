$(document).ready(function () {
    $("#pac-input").change(function(){
        $("#txtUbicacion").val($("#pac-input").val());
        $("#divForm").show();
    });
});