function analytics() {
	var win1 = Titanium.UI.createWindow({
		title : 'Tab 1',
		backgroundColor : '#ccc'
	});

	// Create a Button.
	var aButton = Ti.UI.createButton({
		title : 'aButton',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,

	});

	// Listen for click events.
	aButton.addEventListener('click', function() {
		//alert("sdfsd");
		alert(Titanium.Analytics.featureEvent('app.feature'));
		// alert(Ti.Analytics.featureEvent('motiur', {
		// "key" : 'motiurTest'
		// }));
	});

	// Add to the parent view.
	win1.add(aButton);

	return win1;
}

module.exports = analytics;
