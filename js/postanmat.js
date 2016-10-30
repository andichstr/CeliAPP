$(document).ready(function () {
    $("#form1").on('submit', function (event) {
        event.preventDefault();
        $.ajax({
            data: $("#form1").serialize(),
            url: $("#form1").attr('action'),
            type: 'POST',
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            success: function (response) {
                console.log(response);
            }
        });
    });
});
