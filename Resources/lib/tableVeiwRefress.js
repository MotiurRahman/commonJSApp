function tableViewRefress() {
	var win = Ti.UI.createWindow({
		fullscreen : true
	});

	var tableView = Ti.UI.createTableView({

	});
	win.add(tableView);

	var tableRowTotal = 0;

	function loadTableData(table, count, callback) {
		for (var i = tableRowTotal,
		    ilen = tableRowTotal + count; i < ilen; i++) {
			var rowID = i + 1;
			table.appendRow({
				title : 'Row ' + rowID
			});
			tableRowTotal++;
		}
		if (callback && typeof callback === "function") {
			callback(table);
		}
	}

	loadTableData(tableView, 20);

	var pulling = false;
	var reloading = false;
	var offset = 0;

	tableView.addEventListener('scrollend', function(e) {
		
		Ti.API.info("Y="+e.contentOffset.y);
		Ti.API.info("X="+e.contentOffset.X);
		loadTableData(tableView, 10);

	});

	return win;
}

module.exports = tableViewRefress;
