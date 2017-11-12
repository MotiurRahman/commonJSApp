function location() {
	var win = Ti.UI.createWindow({
		backgroundColor : '#fff',
		layout : "vertical"
	});

	// Create a Label.
	var aLabel = Ti.UI.createLabel({
		text : 'latLong',
		color : "res",
		font : {
			fontSize : 20
		},
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		top : 30,
	});

	// Add to the parent view.
	win.add(aLabel);

	var lat;
	var longi;

	var locationAdded = false;
	var handleLocation = function(e) {
		if (!e.error) {
			Ti.API.info(e.coords);
			longi = e.coords.longitude;

			lat = e.coords.latitude;

		}
	};
	var addHandler = function() {
		if (!locationAdded) {
			Ti.Geolocation.addEventListener('location', handleLocation);
			locationAdded = true;
		}
	};
	var removeHandler = function() {
		if (locationAdded) {
			Ti.Geolocation.removeEventListener('location', handleLocation);
			locationAdded = false;
		}
	};

	Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
	Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;

	// Create a Button.
	var Show = Ti.UI.createButton({
		title : 'Show',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		top : 200

	});

	// Listen for click events.
	Show.addEventListener('click', function() {

		if (Titanium.Platform.osname === "android") {
			if (Ti.Geolocation.locationServicesEnabled) {
				addHandler();

				var activity = Ti.Android.currentActivity;
				activity.addEventListener('destroy', removeHandler);
				activity.addEventListener('pause', removeHandler);
				activity.addEventListener('resume', addHandler);

				aLabel.setTex(lat + '\n' + longi);
			} else {
				alert('Please enable location services');
			}

		} else {
			addHandler();
			aLabel.setTex(lat + '\n' + longi);
		}

	});

	// Add to the parent view.
	win.add(Show);

	return win;
}

module.exports = location;
