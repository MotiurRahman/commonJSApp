function textAling() {

	var win = Ti.UI.createWindow({
		backgroundColor : '#fff',
		layout : "vertical"
	});

	var tf1 = Ti.UI.createTextField({
		width : Ti.UI.FILL,
		top : 20,
		height : 40,
		left : 20,
		right : 20,
		color : "#000",
		borderColor : "red",
		borderWidth : 1,
		//softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	});

	var tf3 = Ti.UI.createTextField({
		width : Ti.UI.FILL,
		top : 20,
		height : 40,
		left : 20,
		right : 20,
		borderColor : "red",
		borderWidth : 1,
		color : "#000",
		textAlign : Ti.UI.TEXT_ALIGNMENT_RIGHT,
		//softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	});

	win.add(tf1);
	win.add(tf3);

	return win;

}

module.exports = textAling;
