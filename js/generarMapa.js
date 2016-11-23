var marcadores = [];
function initMap(coordenadas) {
    console.log(coordenadas);
    if (coordenadas != 0) {
        var lat = coordenadas.coords.latitude;
        var long = coordenadas.coords.longitude;
    } else {
        var lat = -34.603726;
        var long = -58.381667;
    }
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: lat, lng: long},
        zoom: 13
    });
    var options = {
        types: ['geocode'],
        componentRestrictions: {country: "arg"}
    };
    var centerControlDiv = document.createElement('div');
    var centerControl = new CenterControl(centerControlDiv, map);
    centerControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(centerControlDiv);
    //Variables de marcado de productos
    var locations = [
        [-34.791, -58.523, '$5', '10/11/2016', 'Cristian Escudero'],
        [-34.791, -58.526, '$7', '11/11/2016', 'Maximiliano Soria'],
        [-34.791, -58.522, '$6', '12/11/2016', 'Fernando Piriz'],
        [-34.792, -58.526, '$8', '13/11/2016', 'Andres Schuster'],
        [-34.790, -58.525, '$10', '14/11/2016', 'Matias Medina']
    ];
    //llamado de funcion de marcado de productos cargados
    setMarkers(map, locations);
    var input = (document.getElementById('pac-input'));
    var types = document.getElementById('type-selector');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);
    var autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.bindTo('bounds', map);
    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29),
        draggable: true,
        title: "arrastrame"
    });
    autocomplete.addListener('place_changed', function () {
        marker.setVisible(true);
        map.controls[google.maps.ControlPosition.BOTTOM_CENTER].clear();
        infowindow.setContent('<div class="marcador"><strong>' + autocomplete.getPlace().formatted_address + '</strong><br>');
        infowindow.open(map, marker);
        $("#pac-input").remove();
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            window.alert("Autocomplete's returned place contains no geometry");
            return;
        }
        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(15); // Why 15? Because it looks good.
        }
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        marker.setIcon(({
            url: "img/logo30x30.png",
            scaledSize: new google.maps.Size(25, 25)
        }));
        var address = '';
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }
        google.maps.event.addListener(marker, 'dragend', function (evt) {
            var lat1 = evt.latLng.lat().toFixed(8);
            var lng1 = evt.latLng.lng().toFixed(8);
            console.log(lat1 + ',' + lng1);
            var geocoder = new google.maps.Geocoder();
            var location = new google.maps.LatLng(lat1, lng1);
            geocoder.geocode({'latLng': location}, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    infowindow.setContent('<div class="marcador"><strong>' + results[0].formatted_address + '</strong><br>');
                    infowindow.open(map, marker);
                }
            });
        })
    });
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

function coordToAddress(lat, lng) {
    var geocoder = new google.maps.Geocoder(); // create a geocoder object
    var location = new google.maps.LatLng(lat, lng); // turn coordinates into an object          
    geocoder.geocode({'latLng': location}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
//            console.log(results[0].formatted_address);
            var direccion1 = "<strong>" + results[0].formatted_address + "</strong>";
            console.log(typeof(direccion1));
            return direccion1;
        }
    });
}
;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(initMap, errorMapa);
    } else {
        console.log("0")
        console.log("Geolocation is not supported by this browser.");
        initMap(0);
    }
}
;
function errorMapa(error) {
    coordenadas = 0;
    initMap(coordenadas);
}
;
function setMarkers(map, locations) {
    var marker, i
    for (i = 0; i < locations.length; i++)
    {
        var lat = locations[i][0]
        var long = locations[i][1]
        var precio = locations[i][2]
        var fecha = locations [i][3]
        var nick = locations[i][4]
        latlngset = new google.maps.LatLng(lat, long);
//        console.log (direccion);
//        var direccion = coordToAddress(lat, long);
//        console.log (direccion);
        var marker = new google.maps.Marker({
            map: map, title: nick, position: latlngset
        });
        marker.setIcon(({
            url: "img/logo30x30.png",
            scaledSize: new google.maps.Size(25, 25)
        }));
//        var content = "Precio: " + precio + '<br>' + "Fecha: " + fecha + '<br>' + "Usuario: " + nick
        var content = "Direccion: " + coordToAddress(lat, long) + '<br>' + "Precio: " + precio + '<br>' + "Fecha: " + fecha + '<br>' + "Nick: " + nick
        var infowindow = new google.maps.InfoWindow()
        google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
            return function () {
                infowindow.setContent(content);
                infowindow.open(map, marker);
            };
        })(marker, content, infowindow));
    }
}

$(document).ready(function () {
    if ((localStorage.getItem("rnpaMapa") == null) || (localStorage.getItem("rnpaMapa") == undefined)){
        $("#modalTitle").html("Ups, ha ocurrido un pequeño error.");
        $("#modalDesc").html("Por favor, haga click en el producto que desea buscar antes de ingresar a esta página");
        $("#divModal").modal('show');
        $("#divModal").on("hidden.bs.modal", function () {
            document.location.href="./busqueda_categoria.php"
        });
    } else {
        var parametros = {
            "rnpa": localStorage.getItem("rnpaMapa")
        };
        $.ajax({
            data: parametros,
            url: 'cargar_puntos_mapa.php',
            type: 'POST',
            success: function (response) {
                console.log(response);
                var json = JSON.parse(response);
                console.log(json);
                var ubicaciones = [];
                for (i=0; i<json.length; i++){
                    ubicaciones.push(json[i]['ubicacion']);
                    console.log(ubicaciones);
                }
                setMarkers(map, ubicaciones);
            },
        });
    };
    $("#pac-input").keyup(function () {
        $("#txtUbicacion").val($("#pac-input").val());
    });
    $("#txtUbicacion").keyup(function () {
        $("#pac-input").val($("#txtUbicacion").val());
    });
    $("#formMapa").on('submit', function (event) {
        event.preventDefault();
    });
});
function CenterControl(controlDiv, map) {

    // Set CSS for the control border.
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click para agregar un marcador';
    controlDiv.appendChild(controlUI);
    // Set CSS for the control interior.
    var controlText = document.createElement('div');
    controlText.style.color = 'rgb(25,25,25)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Agregar un Marcador';
    controlUI.appendChild(controlText);
    // Setup the click event listeners: simply set the map to Chicago.
    controlUI.addEventListener('click', function () {
        map.addListener('click', function (event) {
            placeMarker(event.latLng, map);
            google.maps.event.clearListeners(map, 'click');
            mostrarInfoWindow();
            mostrarAgregarPrecio();
        });
    });
}

function placeMarker(location, map) {
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        draggable: true
    });
    marker.setIcon({
        url: "img/logo30x30.png",
        scaledSize: new google.maps.Size(25, 25)
    });
    marker.infowindow = new google.maps.InfoWindow();
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'latLng': location}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            marker.infowindow.setContent('<div class="marcador"><strong>' + results[0].formatted_address + '</strong><br>');
            marker.infowindow.open(map, marker);
            map.controls[google.maps.ControlPosition.BOTTOM_CENTER].clear();
            $("#pac-input").remove();
        }
    });
    mostrarAgregarPrecio(marker);
    google.maps.event.addListener(marker, 'dragend', function (evt) {
//        marker.infowindow.close();
        var geocoder = new google.maps.Geocoder();
        var location = marker.position;
        geocoder.geocode({'latLng': location}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                marker.infowindow.setContent('<div class="marcador"><strong>' + results[0].formatted_address + '</strong><br>');
//                marker.infowindow.open(map, marker);
            }
        });
        mostrarAgregarPrecio(marker);
    });
//    marker.addEventListner('click', function (evt) {
//        mostrarInfoWindow();
//        mostrarAgregarPrecio(marker);
//    });
//    marcadores.push(marker.latLng);
//    console.log(marcadores[0]);
}
;

function mostrarInfoWindow(marker) {

}
;

function mostrarAgregarPrecio(marker) {

}
;
