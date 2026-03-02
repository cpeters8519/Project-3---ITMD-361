let map;
let geocoder;

function initMap() {
  const hobart = { lat: 41.5561, lng: -87.4316 };
  
  map = new google.maps.Map(document.getElementById("map"), {
    center: hobart,
    zoom: 12,
	mapTypeControl: false
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
}

window.initMap = initMap;