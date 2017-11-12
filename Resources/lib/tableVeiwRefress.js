function tableViewRefress() {
	var win = Ti.UI.createWindow({
		fullscreen : true
	});

	var tableView = Ti.UI.createTableView({});

	win.add(tableView);

	var tableRowTotal = 0;

	function rowData(rowID) {
		var row = Ti.UI.createTableViewRow({
			selectedBackgroundColor : 'white',
			height : 70,
			//namevalue : textValue.value,

		});

		var name = Ti.UI.createLabel({
			color : 'red',
			id : "name",
			font : {
				fontFamily : 'Arial',
				fontSize : 20,
				fontWeight : 'normal'
			},
			text : "Row:" + rowID,
			left : 5,

		});
		row.add(name);
		var del = Ti.UI.createButton({
			title : 'Details',
			right : 10,
			height : Ti.UI.SIZE,
			width : Ti.UI.SIZE,
			id : "delrow",
			myrow : row
		});
		row.add(del);

		return row;
	}

	function loadTableData(table, count, callback) {
		for (var i = tableRowTotal,
		    ilen = tableRowTotal + count; i < ilen; i++) {
			var rowID = i + 1;
			table.appendRow(rowData(rowID));
			tableRowTotal++;
		}
		if (callback && typeof callback === "function") {
			callback(table);
		}
	}

	loadTableData(tableView, 20);

	var x = 30;

	tableView.addEventListener('scrollend', function(e) {

		if (e.contentOffset.y > 0 && x <= 100) {
			loadTableData(tableView, 10);
			x = x + 10;

		}

	});

	return win;
}

module.exports = tableViewRefress;
