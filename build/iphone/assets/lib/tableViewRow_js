function tableViewTextfield() {

	var win = Ti.UI.createWindow({
		backgroundColor : '#fff',
		layout : 'vertical'

	});

	var scrollView = Ti.UI.createScrollView({
		height : '80%',
		width : '80%',
		backgroundColor : 'green'
	});
	// create TableView
	var tableData = [];
	var tableView = Ti.UI.createTableView({});

	var row1 = Ti.UI.createTableViewRow({
		height : 70,

	});

	var textValue = Ti.UI.createTextField({
		height : Titanium.UI.SIZE,
		top : 10,
		color : '#000',
		width : Titanium.UI.FILL,
		left : 20,
		right : 20,
		hintText : 'Write then press done/return',
		backgroundColor : "red",
		focusable : true,
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});

	row1.add(textValue);

	tableData.push(row1);

	textValue.addEventListener('return', function(e) {
		name.setText(textValue.getValue());
	});

	var row2 = Ti.UI.createTableViewRow({

		height : 70,

	});

	var name = Ti.UI.createLabel({
		color : 'red',
		id : "name",
		font : {
			fontFamily : 'Arial',
			fontSize : 20,
			fontWeight : 'normal'
		},
		text : "Waht's on your mind",
		left : 20,

	});
	row2.add(name);

	tableData.push(row2);
	tableView.setData(tableData);

	scrollView.add(tableView);

	win.add(scrollView);

	return win;

}

module.exports = tableViewTextfield;
