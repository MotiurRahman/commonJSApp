function alertTest() {

	var win = Ti.UI.createWindow({
		backgroundColor : 'white'
	});

	var button = Ti.UI.createButton({
		title : 'Open Popover!'
	});
	button.addEventListener('click', function(e) {
		popover.show({
			view : button
		});
	});
	win.add(button);
	var rightButton = Ti.UI.createButton({
		title : 'Robin'
	});

	var contentWindow = Ti.UI.createWindow({
		rightNavButton : rightButton,
		title : 'Kermit'
	});

	var popover = Ti.UI.iPad.createPopover({
		backgroundColor : 'green',
		contentView : Ti.UI.iOS.createNavigationWindow({
			width : 250,
			height : 300,
			window : contentWindow
		})
	});

	rightButton.addEventListener('click', function(e) {
		//alert("But green's the color of spring.");

	});

	var tableData = [{
		title : 'Apples'
	}, {
		title : 'Bananas'
	}, {
		title : 'Carrots'
	}, {
		title : 'Potatoes'
	}];

	var table = Ti.UI.createTableView({
		data : tableData
	});
	contentWindow.add(table);

	var dialog = Ti.UI.createAlertDialog({
		message : 'The file has been deleted',
		ok : 'Okay',
		title : 'File Deleted'
	});

	table.addEventListener('click', function(e) {

		popover.hide();
		setTimeout(function() {

			dialog.show();

		}, 50);
	});

	//win.add(table);
	contentWindow.add(table);

	return win;

}

module.exports = alertTest;
