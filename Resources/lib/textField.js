function textArea() {

	var window = Ti.UI.createWindow({
		backgroundColor : 'white'
	});

	var textField = Ti.UI.createTextField({
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color : '#336699',
		width : 250,
		height : 60
	});

	textField.addEventListener('click', function() {
		Ti.API.info('in text field click');
	});

	window.add(textField);

	return window;

}

module.exports = textArea;
