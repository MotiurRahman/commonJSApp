function alertDialog() {
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
		var alertDialog = Titanium.UI.createAlertDialog({
			message : 'MESSAGE',
			buttonNames : ["OK", "Cancel"],
			persistent : false,
			canceledOnTouchOutside : false,

		});
		alertDialog.show();

	});

	// Add to the parent view.
	win1.add(aButton);

	return win1;
}

module.exports = alertDialog;
