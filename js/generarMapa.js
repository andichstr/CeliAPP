var marcadores = [];

$(document).ready(function (event) {
    var tituloProducto = "<h2>" + localStorage.getItem("productoMapa") + "</h2>";
    $("#titulo").html(tituloProducto);
    $(window).on('load', function () {
        if ((localStorage.getItem("rnpaMapa") == null) || (localStorage.getItem("rnpaMapa") == undefined)) {
            $("#modalTitle").html("Ups, ha ocurrido un pequeño error.");
            $("#modalDesc").html("Por favor, haga click en el producto que desea buscar antes de ingresar a esta página");
            $("#divModal").modal('show');
            $("#divModal").on("hidden.bs.modal", function () {
                document.location.href = "./busqueda_categoria.php";
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
                    var json = JSON.parse(response);
                    var ubicaciones = [];
                    for (i = 0; i < json.length; i++) {
                        var arr = [];
                        arr.push(json[i]['latitud']);
                        arr.push(json[i]['longitud']);
                        arr.push(json[i]['precio']);
                        arr.push(json[i]['fecha']);
                        arr.push(json[i]['nombre'] + json[i]['apellido']);
                        ubicaciones.push(arr);
                    }
                    ;
//                    console.log(ubicaciones);
                    for (i = 0; i < ubicaciones.length; i++) {
                        console.log(ubicaciones[i]);
                        setMarkers(map, ubicaciones[i]);
                    }
                    ;
                }
            });
        }
        ;
    });
});

function initMap(coordenadas) {
    if (coordenadas != 0) {
        var lat = coordenadas.coords.latitude;
        var long = coordenadas.coords.longitude;
    } else {
        var lat = -34.603726;
        var long = -58.381667;
    }
    map = new google.maps.Map(document.getElementById('map'), {
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
    google.maps.InfoWindow.prototype.isOpen = function () {
        var map = infoWindow.getMap();
        return (map !== null && typeof map !== "undefined");
    }
    geocoder = new google.maps.Geocoder(); // create a geocoder object
    var input = document.getElementById('pac-input');
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
        infowindow.setContent('<form class="form-inline" action="#" method="POST" id="ubicacionForm"><div class="marcador"><strong>' + autocomplete.getPlace().formatted_address + '</strong><br><div id="divPrecio" class="form-group"><label for="precio">Precio: </label><input id="precio" name="precio" type="number" step="0.01" style="margin-left: 10px; margin-right: 10px" placeholder="Ej: 5.50"/><input type="submit" class="btn btn-rosa" value="Agregar ubicación"/></div><input id="ubicacion" type="text" class="oculto" value="' + autocomplete.getPlace().geometry.location + '"/></div>');
        infowindow.open(map, marker);
        prevenirSubmit();
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
            var location = new google.maps.LatLng(lat1, lng1);
            geocoder.geocode({'latLng': location}, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    infowindow.setContent('<form class="form-inline" action="#" method="POST" id="ubicacionForm"><div class="marcador"><strong>' + results[0].formatted_address + '</strong><br><div id="divPrecio" class="form-group"><label for="precio">Precio: </label><input id="precio" name="precio" type="number" step="0.01" style="margin-left: 10px; margin-right: 10px" placeholder="Ej: 5.50"/><input type="submit" class="btn btn-rosa" value="Agregar ubicación"/></div><input id="ubicacion" type="text" class="oculto" value="' + location + '"/></div>');
                    infowindow.open(map, marker);
                    prevenirSubmit();
                }
            });
        });
    });
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred.";
            break;
    }
}

function coordToAddress(lat, lng) {
    var location = new google.maps.LatLng(lat, lng); // turn coordinates into an object          
    geocoder.geocode({'latLng': location}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var direccion1 = "<strong>" + results[0].formatted_address + "</strong>";
            return results[0].formatted_address;
        }
    });
}
;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(initMap, errorMapa);
    } else {
        console.log("Geolocation is not supported by this browser.");
        initMap(0);
    }
}
;
function errorMapa(error) {
    var coordenadas = 0;
    initMap(coordenadas);
}
;
function setMarkers(map, locations) {
    var lat = locations[0];
    var long = locations[1];
    var precio = locations[2];
    var fecha = locations[3].split('-');
    var year = fecha[0];
    var month = fecha[1];
    var day = fecha[2];
    var formatofecha = day + "-" + month + "-" + year;
    var nick = locations[4];
    var latlngset = new google.maps.LatLng(lat, long);
    geocoder.geocode({'latLng': latlngset}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var direccion = "<strong>" + results[0].formatted_address + "</strong>";
            var marker = new google.maps.Marker({
                map: map, title: nick, position: latlngset
            });
            if (precio != null) {
                marker.setIcon(({
                    url: "img/logo30x30.png",
                    scaledSize: new google.maps.Size(25, 25)
                }));
                var content = direccion + '<br>' + "Precio: $" + precio + '<br>' + "Fecha: " + formatofecha + '<br>' + "Nick: " + nick;
            } else {
                marker.setIcon(({
                    url: "img/logo30x30byn.png",
                    scaledSize: new google.maps.Size(25, 25)
                }));
                var content = direccion + '<br>' + "Fecha: " + formatofecha + '<br>' + "Nick: " + nick;
            }
            console.log(marker);
            var infowindow = new google.maps.InfoWindow();
            google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
                return function () {
                    infowindow.setContent(content);
                    infowindow.open(map, marker);
                };
            })(marker, content, infowindow));
        }
    });
}


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
    geocoder.geocode({'latLng': location}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            marker.infowindow.setContent('<form class="form-inline" action="#" method="POST" id="ubicacionForm"><div class="marcador"><strong>' + results[0].formatted_address + '</strong><br><div id="divPrecio" class="form-group"><label for="precio">Precio: </label><input id="precio" name="precio" type="number" step="0.01" style="margin-left: 10px; margin-right: 10px" placeholder="Ej: 5.50"/><input type="submit" class="btn btn-rosa" value="Agregar ubicación"/></div><input id="ubicacion" type="text" class="oculto" value="' + location + '"/></div>');
            marker.infowindow.open(map, marker);
            prevenirSubmit();
            map.controls[google.maps.ControlPosition.BOTTOM_CENTER].clear();
            $("#pac-input").remove();
        }
    });
    google.maps.event.addListener(marker, 'dragend', function (evt) {
        var location = marker.position;
        geocoder.geocode({'latLng': location}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                marker.infowindow.setContent('<form class="form-inline" action="#" method="POST" id="ubicacionForm"><div class="marcador"><strong>' + results[0].formatted_address + '</strong><br><div id="divPrecio" class="form-group"><label for="precio">Precio: </label><input id="precio" name="precio" type="number" step="0.01" style="margin-left: 10px; margin-right: 10px" placeholder="Ej: 5.50"/><input type="submit" class="btn btn-rosa" value="Agregar ubicación"/></div><input id="ubicacion" type="text" class="oculto" value="' + location + '"/></div>');
                if (!isInfoWindowOpen(marker.infowindow)) {
                    marker.infowindow.open(map, marker);
                }
                prevenirSubmit();
            }
        });
    });
    google.maps.event.addListener(marker, 'click', function (evt) {
        if (isInfoWindowOpen(marker.infowindow)) {
            marker.infowindow.close();
        } else {
            marker.infowindow.open(map, marker);
            prevenirSubmit();
        }
    });
}
;

function isInfoWindowOpen(infoWindow) {
    var map = infoWindow.getMap();
    return (map !== null && typeof map !== "undefined");
}

function prevenirSubmit() {
    $("#ubicacionForm").on('submit', function (event) {
        event.preventDefault();
        if ($("#ubicacion").val() != "" || $("#ubicacion").val() != null || $("#ubicacion").val() != undefined) {
            var latlng = $("#ubicacion").val().split(',');
            var latitud = latlng[0].substring(1, latlng[0].length);
            var longitud = latlng[1].substring(0, latlng[0].length - 1);
            if ($("#precio").val() != 0 || $("#precio").val() != null || $("#precio").val() != undefined) {
                var datos = {
                    "latitud": latitud,
                    "longitud": longitud,
                    "rnpa": localStorage.getItem('rnpaMapa'),
                    "precio": $("#precio").val()
                };
            } else {
                var datos = {
                    "latitud": latitud,
                    "longitud": longitud,
                    "rnpa": localStorage.getItem('rnpaMapa')
                };
            }
            ;
            $.ajax({
                data: datos,
                url: 'persistir_ubicacion_precio.php',
                type: 'POST',
                success: function (response) {
                    console.log(response);
//                    $("#modalTitle").html("Éxito!");
//                    $("#modalDesc").html("La ubicación fue guardada con éxito. Haga click en fuera o en el botón para salir.");
//                    $("#divModal").modal('show');
                    if (response == 'Si') {
                        $("#modalTitle").html("Éxito!");
                        $("#modalDesc").html("La ubicación fue guardada con éxito. Haga click en fuera o en el botón para salir.");
                        $("#divModal").modal('show');
                        $("#divModal").on("hidden.bs.modal", function () {
                            location.href = location.href;
                        });
                    }
                }
            });
        } else {
            $("#modalTitle").html("No se encuentra la ubicación.");
            $("#modalDesc").html("Por favor, debe haber seleccionado alguna ubicación antes de cargarla.");
            $("#divModal").modal('show');
        }
        ;
    });
}
;