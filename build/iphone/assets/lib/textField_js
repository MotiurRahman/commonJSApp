function textArea() {

	var win = Ti.UI.createWindow({
		backgroundColor : 'white'
	});
	var textArea = Ti.UI.createTextArea({
		borderWidth : 2,
		borderColor : '#bbb',
		borderRadius : 5,
		color : '#888',
		font : {
			fontSize : 20,
			fontWeight : 'bold'
		},
		//keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD,
		returnKeyType : Ti.UI.RETURNKEY_GO,
		textAlign : 'left',
		top : 60,
		width : 300,
		height : Ti.UI.SIZE
	});
	win.add(textArea);

	win.addEventListener("open", function(e) {
		textArea.focus();

	});

	return win;

}

module.exports = textArea;
