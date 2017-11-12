function propertiesAPI() {
	var win = Titanium.UI.createWindow({
		title : 'Motiur Rahman Test',
		layout : "vertical",
		backgroundColor : '#ccc'
	});

	// Create a TextField.
	var name = Ti.UI.createTextField({
		height : 35,
		top : 40,
		left : 20,
		right : 20,
		hintText : 'This is hint text',
		//keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});

	// // Listen for return events.
	// name.addEventListener('return', function(e) {
	// name.blur();
	// alert('Input was: ' + name.value);
	// });

	// Add to the parent view.
	win.add(name);

	// Create a Button.
	var aButton = Ti.UI.createButton({
		title : 'Save',
		top : 20,
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,

	});

	// Add to the parent view.
	win.add(aButton);

	// Create a Label.
	var nameValue = Ti.UI.createLabel({
		text : Ti.App.Properties.getString('nameValue'),
		color : '#000',
		font : {
			fontSize : 20
		},
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		top : 30,

	});

	// Add to the parent view.
	win.add(nameValue);

	// Listen for click events.
	aButton.addEventListener('click', function() {
		Ti.App.Properties.setString('nameValue', name.getValue());
		//nameValue.setText(Ti.App.Properties.getString('nameValue'));
	});

	return win;
}

module.exports = propertiesAPI;
