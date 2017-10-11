function latLong() {
	var win = Ti.UI.createWindow({
		backgroundColor : '#fff'
	});

	// Create a Label.
	var aLabel = Ti.UI.createLabel({
		text : 'aLabel',
		color : 'red',
		font : {
			fontSize : 20
		},
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,

	});

	// Add to the parent view.
	win.add(aLabel);

	var providerGps = Ti.Geolocation.Android.createLocationProvider({
		name : Ti.Geolocation.PROVIDER_GPS,
		minUpdateTime : 0,
		minUpdateDistance : 0
	});
	Ti.Geolocation.Android.addLocationProvider(providerGps);
	Ti.Geolocation.Android.manualMode = true;

	var locationCallback = function(e) {
		if (!e.success || e.error) {
			Ti.API.info('error:' + JSON.stringify(e.error));

		} else {
			Ti.API.info('coords: ' + JSON.stringify(e.coords));
			var value = JSON.stringify(e.coords);
			alert(value.latitude);
			aLabel.setText(value.latitude);
		}
	};

	if (Ti.Geolocation.locationServicesEnabled) {
		// perform other operations with Ti.Geolocation
		Titanium.Geolocation.addEventListener('location', locationCallback);
	} else {
		alert('Please enable location services');
	}

	return win;
}

module.exports = latLong;
