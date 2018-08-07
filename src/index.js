const mapboxgl = require('mapbox-gl')
const marker = require('./marker.js')
mapboxgl.accessToken = 'pk.eyJ1Ijoic3RhY3loYXJmZW5pc3QiLCJhIjoiY2prazY3d2R1MW40dDNrbWw2enY0dXZwYSJ9.mRUK3zlGaYuh8KQwtJ-nZw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
  //

});
const domEl = document.createElement('div')
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(domEl).setLngLat([-74.009151, 40.705086]).addTo(map);


// console.log('hey assel wassup it is stacy.....')
