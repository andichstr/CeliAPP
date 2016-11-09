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
    var input = /** @type {!HTMLInputElement} */(
            document.getElementById('pac-input'));
    var input2 = document.getElementById('txtUbicacion');

    var types = document.getElementById('type-selector');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);
    var autocomplete2 = new google.maps.places.Autocomplete(input2);
    autocomplete2.bindTo('bounds', map);

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29),
        draggable: true,
        title: "arrastrame"
    });

    var locations = [
        ['loan 1', -34.789, -58.523, 'address 1'],
        ['loan 2', -34.789, -58.524, 'address 2'],
        ['loan 3', -34.836, -58.494, 'address 3'],
        ['loan 4', -34.850, -58.514, 'address 4'],
        ['loan 5', -34.847, -58.506, 'address 5']
    ];
    
    

    autocomplete.addListener('place_changed', function () {
        infowindow.close();
        marker.setVisible(false);
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
            map.setZoom(15);  // Why 17? Because it looks good.
        }
        marker.setIcon(({
            url: "img/logo25x25.png",
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
        }));
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        var address = '';
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }
        google.maps.event.addListener(marker, 'dragend', function (evt) {
            var latlng1 = evt.latLng.lat().toFixed(3) + ',' + evt.latLng.lng().toFixed(3);
            console.log (latlng1);
            infowindow.setContent('<div class="marcador"><strong>' + place.address_components + '</strong><br>' + address);
            infowindow.open(map, marker);
        });

    })

function getAddress(myLatitude,myLongitude) {
			
			var geocoder	= new google.maps.Geocoder();				// create a geocoder object
			var location	= new google.maps.LatLng(myLatitude, myLongitude);	// turn coordinates into an object 			
			geocoder.geocode({'latLng': location}, function (results, status) {
				if(status == google.maps.GeocoderStatus.OK) {			// if geocode success
					processAddress(results[0].formatted_address);		// if address found, pass to processing function
				} else {
				  alert("Geocode failure: " + status);				// alert any other error(s)
				  return false;
				}
			});
		}

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

        var loan = locations[i][0]
        var lat = locations[i][1]
        var long = locations[i][2]
        var add = locations[i][3]

        latlngset = new google.maps.LatLng(lat, long);

        var marker = new google.maps.Marker({
            map: map, title: loan, position: latlngset
        });
        map.setCenter(marker.getPosition())


        var content = "Loan Number: " + loan + '</h3>' + "Address: " + add

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