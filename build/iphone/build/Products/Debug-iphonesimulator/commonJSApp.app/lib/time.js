function time() {

	var win1 = Titanium.UI.createWindow({
		title : 'Tab 1',
		backgroundColor : '#ccc'
	});

	// Create a Label.
	var aLabel = Ti.UI.createLabel({
		text : 'aLabel',
		color : 'red',
		font : {
			fontSize : 25
		},
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,

	});

	// Add to the parent view.
	win1.add(aLabel);

	var june = moment("2014-06-01T12:00:00Z");
	june.tz('America/New_York').format('ha z');

	aLabel.setText(june);

	return win1;

}

module.exports = time;
