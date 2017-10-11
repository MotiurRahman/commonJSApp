function ti_platform() {
	var win = Titanium.UI.createWindow({
		title : "Baterry Test",
		backgroundColor : '#fff'
	});

	Titanium.Platform.batteryMonitoring = true;

	var b = Titanium.UI.createButton({
		title : 'Get Value',
		height : 30,
		width : Ti.UI.SIZE,
		color : "#000",
		top : 25
	});

	b.addEventListener('click', function() {

		var battery_level = (Ti.Platform.batteryLevel).toFixed(2);

		alert("Battery Level:" + Ti.Platform.getBatteryLevel().toFixed(2) + "\n" + battery_level);

	});

	win.add(b);

	return win;
};

module.exports = ti_platform;
