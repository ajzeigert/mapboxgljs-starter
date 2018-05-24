// mapboxgl object is provided by Webpack!

// Remove comments ( /* */ ) from code samples below to experiment

// Need an API key to access Mapbox services, in this case, just the base map style
// This API key is provided for convenience but might be revoked at any time
// Create your own token at https://www.mapbox.com/account/
mapboxgl.accessToken = 'pk.eyJ1IjoiYWp6ZWlnZXJ0IiwiYSI6ImNqaGp0ZnBueDBjaWszYXF3czR5a2kyZ3QifQ.-pKUFqupcwJcPs0zBMkF1Q';

// Create a map with basemap values
var map = new mapboxgl.Map({
    container: "map",
    style: 'mapbox://styles/mapbox/outdoors-v10',
    center: [-121.7,44.1],
    zoom: 5.5,
	// hash: true,
	// interactive: false
});

// Create and add a control
/*
var control = new mapboxgl.NavigationControl();
map.addControl(control);
*/

// Wait for the map to load to do some more stuff
map.on('load', function(){
	// GOAL: Let's add some points to the map

	/*
	// Some remote geojson
	var url = 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson';

	// Add a new source to our map
	map.addSource('airports', { type: 'geojson', data: url })

	// Draw a layer using our source
	map.addLayer({
		"id": "airports",
		"type": "symbol",
		"source": "airports",
		"layout": {
			"icon-size": 1.5,
			"icon-image": "airfield-15",
		}
	})
	*/

	// STRETCH GOAL: Add a layer asynchronously from a huge remote file

	/*
	// Create a button
	var button = document.createElement('button');

	// Set the button's text
	button.innerHTML = 'Click to load data';

	// Give it an id (for CSS reasons)
	button.setAttribute('id', 'loadingButton')

	// Add an event listener so things happen when it's clicked
	button.addEventListener('click', function(){
		// Pan to Bend
		map.panTo([-121.32, 44.062])

		// Hide the button
		button.style.display = 'none';

		// Create a loading image and replace the button
		var loading = document.createElement('img');
		loading.setAttribute('id', "loading")
		loading.setAttribute('src', 'https://media.giphy.com/media/l0HUpt2s9Pclgt9Vm/giphy.gif')
		document.querySelector('body').appendChild(loading);

		// Target some remote data (from Deschutes Open Data Portal)
		var taxlots = 'https://opendata.arcgis.com/datasets/28019431cced49849cb4b1793b075bf1_2.geojson';

		// Call fetch, a nice data loader that works in the background
		// See https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
		fetch(taxlots)
			.then(function(response) {
				console.log('response', response)
				return response.json()
			})
			.then(function(geojson) {
				console.log('json', geojson)

				// Get the layers in the map so far
				var layers = map.getStyle().layers;

				// Find the index of the first symbol layer in the map style
				// This is used later to put our polygons under the standard map labels
			    var firstSymbolId;
			    for (var i = 0; i < layers.length; i++) {
			        if (layers[i].type === 'symbol') {
			            firstSymbolId = layers[i].id;
			            break;
			        }
			    }

				// Add a new source
				map.addSource("deschutes", { "type": "geojson", data: geojson });

				// Add new layer
				map.addLayer({
					"id": "deschutes",
					"type": "fill",
					"source": "deschutes",
					"layout": {},
					"paint": {
						"fill-opacity": 0.5,
						"fill-color": "#7FFF00",
						"fill-outline-color": "#fff"
					}
				}, firstSymbolId); // Second argument is what layer to place this below

				// Add some popups
			    map.on('click', 'deschutes', function (e) {
			        new mapboxgl.Popup()
			            .setLngLat(e.lngLat)
			            .setHTML(JSON.stringify(e.features[0].properties, null, ' '))
			            .addTo(map);
			    });

			    // Change the cursor to a pointer when the mouse is over the taxlots layer.
			    map.on('mouseenter', 'deschutes', function () {
			        map.getCanvas().style.cursor = 'pointer';
			    });

			    // Change it back to a pointer when it leaves.
			    map.on('mouseleave', 'deschutes', function () {
			        map.getCanvas().style.cursor = '';
			    });

				// Set the visibility of our button and loader when finished
				button.style.display = '';
				loading.style.display = 'none';
			})
	})
	document.querySelector('body').appendChild(button);
	*/
})
