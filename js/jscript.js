let map;

function initMap() {
  const hobart = { lat: 41.5561, lng: -87.4316 }; // Hobart, IN
  map = new google.maps.Map(document.getElementById("map"), {
    center: hobart,
    zoom: 12
  });
}

window.initMap = initMap;