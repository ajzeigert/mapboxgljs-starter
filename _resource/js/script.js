// mapboxgl object is provided by Webpack!

// Need an api key to access Mapbox services
mapboxgl.accessToken = 'pk.eyJ1IjoiYWp6ZWlnZXJ0IiwiYSI6ImNqaGp0ZnBueDBjaWszYXF3czR5a2kyZ3QifQ.-pKUFqupcwJcPs0zBMkF1Q';

// Create a map with basemap values
var map = new mapboxgl.Map({
    container: "map",
    style: 'mapbox://styles/mapbox/outdoors-v10',
    center: [-121.7,44.1],
    zoom: 11,
	// hash: true,
	// interactive: false
});

// Create and add a control
// var control = new mapboxgl.NavigationControl();
// map.addControl(control);

// Wait for the map to load to do some more stuff
map.on('load', function(){
	// Some remote geojson
	// var url = 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson';
	//
	// // Add a new source to our map
	// map.addSource('airports', { type: 'geojson', data: url })
	//
	// // Draw a layer using our source
	// map.addLayer({
	// 	"id": "airports",
	// 	"type": "symbol",
	// 	"source": "airports",
	// 	"layout": {
	// 		"icon-size": 1.5,
	// 		"icon-image": "airfield-15",
	// 	}

	// var button = document.createElement('button');
	// button.innerHTML = 'Click to load data';
	// button.setAttribute('id', 'loadingButton')
	// button.addEventListener('click', function(){
	// 	map.panTo([-121.32, 44.062])
	// 	button.style.display = 'none';
	// 	var loading = document.createElement('img');
	// 	loading.setAttribute('id', "loading")
	// 	loading.setAttribute('src', 'https://media.giphy.com/media/l0HUpt2s9Pclgt9Vm/giphy.gif')
	// 	document.querySelector('body').appendChild(loading);
	// 	var taxlots = 'https://opendata.arcgis.com/datasets/28019431cced49849cb4b1793b075bf1_2.geojson';
	// 	var subdivisions = 'https://opendata.arcgis.com/datasets/357c0552c0644bf6a4f5188f434048f6_4.geojson'
	// 	fetch(taxlots)
	// 		.then(function(response) {
	// 			console.log('response', response)
	// 			return response.json()
	// 		})
	// 		.then(function(json) {
	// 			console.log('json', json)
	//
	// 			// Get the layers
	// 			var layers = map.getStyle().layers;
	//
	// 			// Find the index of the first symbol layer in the map style
	// 			// This is used later to put our polygons under the labels
	// 		    var firstSymbolId;
	// 		    for (var i = 0; i < layers.length; i++) {
	// 		        if (layers[i].type === 'symbol') {
	// 		            firstSymbolId = layers[i].id;
	// 		            break;
	// 		        }
	// 		    }
	//
	// 			// Add a new source
	// 			map.addSource("deschutes", { "type": "geojson", data: json });
	//
	// 			// Add new layer
	// 			map.addLayer({
	// 				"id": "deschutes",
	// 				"type": "fill",
	// 				"source": "deschutes",
	// 				"layout": {},
	// 				"paint": {
	// 					"fill-opacity": 0.7,
	// 					"fill-color": "#7FFF00",
	// 					"fill-outline-color": "#fff"
	// 				}
	// 			}, firstSymbolId); // Second argument is what layer to place this below
	//
	// 			// Add some popups
	// 		    map.on('click', 'deschutes', function (e) {
	// 		        new mapboxgl.Popup()
	// 		            .setLngLat(e.lngLat)
	// 		            .setHTML(JSON.stringify(e.features[0].properties, null, ' '))
	// 		            .addTo(map);
	// 		    });
	//
	// 		    // Change the cursor to a pointer when the mouse is over the states layer.
	// 		    map.on('mouseenter', 'deschutes', function () {
	// 		        map.getCanvas().style.cursor = 'pointer';
	// 		    });
	//
	// 		    // Change it back to a pointer when it leaves.
	// 		    map.on('mouseleave', 'deschutes', function () {
	// 		        map.getCanvas().style.cursor = '';
	// 		    });
	//
	// 			// Set the display of stuff
	// 			button.style.display = '';
	// 			loading.style.display = 'none';
	// 		})
	// })
	// document.querySelector('body').appendChild(button);
})
