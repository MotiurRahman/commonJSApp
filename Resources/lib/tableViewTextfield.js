function tableViewTextfield() {

	var win = Ti.UI.createWindow({
		backgroundColor : '#fff',
		layout : 'vertical'

	});
	
	

	// Create a TextField.
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

	// create TableView
	var tableData = [];
	var tableView = Ti.UI.createTableView({
		data : tableData,
		top : 10,
	});
	//var i = 0;
	function refresh(data) {
		var row = Ti.UI.createTableViewRow({
			//className : 'forumEvent', // used to improve table performance
			//selectedBackgroundColor : 'white',
			//index : i, // custom property, useful for determining the row during events
			height : 70,
			namevalue : textValue.value,

		});

		var name = Ti.UI.createLabel({
			color : 'red',
			id : "name",
			font : {
				fontFamily : 'Arial',
				fontSize : 20,
				fontWeight : 'normal'
			},
			text : textValue.value,
			left : 5,

		});
		row.add(name);
		var del = Ti.UI.createButton({
			title : 'delete',
			right : 10,
			height : Ti.UI.SIZE,
			width : Ti.UI.SIZE,
			id : "delrow",
			myrow : row
		});
		row.add(del);

		tableData.push(row);
		tableView.setData(tableData);
	}

	// Listen for return events.
	textValue.addEventListener('return', function(e) {
		refresh();
		//textValue.blur();
		//textValue.setValue('');

	});

	// Listen for tableView events.
	tableView.addEventListener('click', function(e) {
		if (e.source.id == "delrow") {

			tableView.deleteRow(e.source.myrow);
			tableData.pop(e.rowData.namevalue);

		} else {
			var name = e.rowData.namevalue;
			textValue.setValue(name);
			var row = e.rowData.index;
			var ind = tableData.indexOf(e.rowData.namevalue);
			alert("row number=" + row);

		}

	});

	win.add(textValue);
	win.add(tableView);

	return win;

}

module.exports = tableViewTextfield;
