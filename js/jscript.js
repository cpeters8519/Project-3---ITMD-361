let map;
let geocoder;

function initMap() {
  const hobart = { lat: 41.5322592, lng: -87.2550353 };
  
  map = new google.maps.Map(document.getElementById("map"), {
    center: hobart,
    zoom: 12,
	mapTypeControl: true,
	mapTypeControlOptions: {
		style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
		position: google.maps.ControlPosition.TOP_RIGHT
	}
});

geocoder = new google.maps.Geocoder();

const marker = new google.maps.Marker({
	position: hobart,
	map: map,
	title: "Hobart, IN"
});

const infoWindow = new google.maps.InfoWindow({
	content: "<h3>Hobart, Indiana</h3><p>My hometown</p>"
});

marker.addListener("click", () => {
	infoWindow.open({ anchor: marker, map });
});

const searchBtn = document.getElementById("search-loc-btn");
  searchBtn.addEventListener("click", () => {
    const address = document.getElementById("input-city").value;
    geocodeCity(address);
  });
}

function geocodeCity(address) {
  geocoder.geocode({ address: address }, (results, status) => {
    if (status === "OK") {
      map.setCenter(results[0].geometry.location);
      map.setZoom(12);
      new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
        title: address
      });
    } else {
      alert("City not found: " + status);
    }
  });
}

window.initMap = initMap;