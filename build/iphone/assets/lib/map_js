function mapView() {
	var MapModule = require('ti.map');

	var win = Ti.UI.createWindow({
		backgroundColor : 'white'
	});

	// Create a Button.
	var set_points = Ti.UI.createButton({
		title : 'set_points',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		top : 30,
		zIndex : 2

	});

	// Add to the parent view.
	win.add(set_points);

	var data = [];

	var appc = MapModule.createAnnotation({
		latitude : 37.389569,
		longitude : -122.050212,
		title : 'Appcelerator HQ',
		subtitle : 'Mountain View, CA',
		pincolor : MapModule.ANNOTATION_GREEN
	});

	var apple = MapModule.createAnnotation({
		latitude : 37.331689,
		longitude : -122.030731,
		title : 'Apple HQ',
		subtitle : 'Cupertino, CA',
		pincolor : MapModule.ANNOTATION_RED
	});

	var google = MapModule.createAnnotation({
		latitude : 37.422502,
		longitude : -122.0855498,
		title : 'Google HQ',
		subtitle : 'Mountain View, CA',
		pincolor : MapModule.ANNOTATION_VIOLET
	});

	var route = MapModule.createRoute({
		width : 4,
		color : '#f00',
		//points : data
	});

	var mapview = MapModule.createView({
		// mapType : MapModule.NORMAL_TYPE,
		// region : {
		// latitude : 37.389569,
		// longitude : -122.050212,
		// latitudeDelta : 0.2,
		// longitudeDelta : 0.2
		// },
		// annotations : [google, appc, apple]
	});

	mapview.addRoute(route);
	win.add(mapview);

	// if (Ti.Geolocation.locationServicesEnabled) {
	// Ti.Geolocation.purpose = 'Get Current Location';
	// Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
	// Ti.Geolocation.distanceFilter = 10;
	// Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
	//
	// Ti.Geolocation.addEventListener('location', function(e) {
	// if (e.error) {
	// alert('Error: ' + e.error);
	// } else {
	// Ti.API.info("latitude=" + e.coords.latitude);
	// Ti.API.info("longitude=" + e.coords.longitude);
	//
	// // data.push([{
	// // latitude : e.coords.latitude,
	// // longitude : e.coords.longitude
	// //
	// // }]);
	// }
	//
	// });
	// } else {
	// alert('Please enable location services');
	// }

	data.push([{
		latitude : google.latitude,
		longitude : google.longitude
	}, {
		latitude : appc.latitude,
		longitude : appc.longitude
	}, {
		latitude : apple.latitude,
		longitude : apple.longitude
	}]);

	// Listen for click events.
	set_points.addEventListener('click', function() {
		route.setPoints(data);
	});

	return win;
}

module.exports = mapView;
