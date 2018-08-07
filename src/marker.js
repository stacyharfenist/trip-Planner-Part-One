//import?

const mapbox = require('mapbox-gl')



function makeAMarker (type, coor) {
    const markerDomEl = document.createElement('div')
        markerDomEl.style.width = "32px";
         markerDomEl.style.height = "39px"
    if(type === 'Hotel') {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    } else if (type === 'Activity') {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    } else if (type === 'Restaurant') {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
    }
    return new mapbox.Marker(markerDomEl).setLngLat(coor)
}

module.exports = makeAMarker;
