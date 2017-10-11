function pdfReader() {

	var win = Ti.UI.createWindow({
	});

	// Create a Button.
	var open = Ti.UI.createButton({
		title : 'open',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		top : 30,

	});

	// Listen for click events.
	open.addEventListener('click', function() {
		var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "motiur.pdf");
		var blob = file.read();

		var webview = Titanium.UI.createWebView({
			data : blob
		});

		win.add(webview);

	});

	// Add to the parent view.
	win.add(open);

	return win;

}

module.exports = pdfReader;
