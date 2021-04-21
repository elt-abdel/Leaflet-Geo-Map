var mymap = L.map("mapid").setView([38.989873, -76.945138], 15);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1IjoidGhlYWx0ZXJuYXRvcnhkIiwiYSI6ImNrOGl3Nzd4bDBhaXYzZm0xM2k4bGdsZ3gifQ.lXOGH0VRQhPuQJQG4SZYPA"
  }
).addTo(mymap);

// mck
var markerMCK = L.marker([38.985972, -76.945022]).addTo(mymap);
// horn
var markerHorn = L.marker([38.988176, -76.941729]).addTo(mymap);
// Epp
var markerEpp = L.marker([38.993545, -76.945173]).addTo(mymap);

markerMCK.bindPopup("<b>McKeldin!</b>");
markerHorn.bindPopup("<b>Hornbake!</b>");
markerEpp.bindPopup("<b>Eppley!</b>");

console.log("hello world");

