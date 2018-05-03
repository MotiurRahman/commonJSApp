function tableViewTextfield() {

	Ti.UI.setBackgroundColor('#000');
	var win = Ti.UI.createWindow({
		backgroundColor : 'black',
		exitOnClose : true,
		fullscreen : false,
		title : 'TableView Demo'
	});

	// generate random number, used to make each row appear distinct for this example
	function randomInt(max) {
		return Math.floor(Math.random() * max) + 1;
	}

	var IMG_BASE = 'images/';
	var defaultFontSize = Ti.Platform.name === 'android' ? 16 : 14;

	var tableData = [];

	for (var i = 1; i <= 20; i++) {
		var row = Ti.UI.createTableViewRow({
			className : 'forumEvent', // used to improve table performance
			selectedBackgroundColor : 'white',
			rowIndex : i, // custom property, useful for determining the row during events
			height : 110,
			layout : "vertical"
		});

		var textValue = Ti.UI.createTextField({
			height : Titanium.UI.SIZE,
			top : 10,
			color : '#000',
			width : Titanium.UI.FILL,
			hintText : 'This is hint text',
			softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
			keyboardType : Ti.UI.KEYBOARD_DEFAULT,
			returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
			borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
		});

		row.add(textValue);

		textValue.addEventListener('return', function(e) {

			alert("working..:" + textValue.getValue());

		});

		var labelUserName = Ti.UI.createLabel({
			color : '#576996',
			font : {
				fontFamily : 'Arial',
				fontSize : defaultFontSize + 6,
				fontWeight : 'bold'
			},
			text : 'Fred Smith ' + i,
			left : 70,
			top : 6,
			width : 200,
			height : 30
		});
		row.add(labelUserName);

		tableData.push(row);
	}

	var tableView = Ti.UI.createTableView({
		backgroundColor : 'white',
		data : tableData
	});

	win.add(tableView);
	return win;

}

module.exports = tableViewTextfield;
