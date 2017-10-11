function restart() {

	var win = Ti.UI.createWindow({
		backgroundColor : "gray"
	});

	// Create a Button.
	var restart = Ti.UI.createButton({
		title : 'restart',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE

	});

	// Listen for click events.
	restart.addEventListener('click', function() {
		showRebootDialog();
	});

	// Add to the parent view.
	win.add(restart);

	function showRebootDialog() {
		var dialog = Ti.UI.createAlertDialog({
			message : L('city_reboot_message'),
			ok : 'OK',
			cancel : 0,
		});

		dialog.addEventListener('click', function(e) {

			setTimeout(function() {
				Ti.App._restart();
			}, 100);
		});

		dialog.show();
	}

	return win;

}

module.exports = restart;
