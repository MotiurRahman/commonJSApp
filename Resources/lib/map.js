function mapView() {
	var Map = require('ti.map');
	var win = Titanium.UI.createWindow();

	var mountainView = Map.createAnnotation({
		latitude : 37.390749,
		longitude : -122.081651,
		title : "Appcelerator Headquarters",
		subtitle : 'Mountain View, CA',
		pincolor : Map.ANNOTATION_RED,
		myid : 1 // Custom property to uniquely identify this annotation.
	});

	var mapview = Map.createView({
		mapType : Map.NORMAL_TYPE,
		region : {
			latitude : 33.74511,
			longitude : -84.38993,
			latitudeDelta : 0.01,
			longitudeDelta : 0.01
		},
		animate : true,
		regionFit : true,
		userLocation : true,
		annotations : [mountainView]
	});

	var circle = Map.createCircle({
		center : {
			latitude : 33.74511,
			longitude : -84.38993
		},
		radius : 250,
		strokeWidth : 1,
		strokeColor : '#AD5A00',
		fillColor : '#FF8400'
	});
	mapview.addCircle(circle);

	win.add(mapview);
	// Handle click events on any annotations on this map.
	mapview.addEventListener('click', function(evt) {
		Ti.API.info("Clicked " + evt.clicksource + " on " + evt.latitude + "," + evt.longitude);
	});
	return win;

}

module.exports = mapView;
