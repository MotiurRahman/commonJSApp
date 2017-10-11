function exception() {
	var win = Ti.UI.createWindow({
		backgroundColor : '#fff'
	});

	Ti.App.addEventListener("uncaughtException", function(e) {
		Ti.API.info("Uncaught JS exception captured");
	});

	var btn = Ti.UI.createButton({
		title : 'Trigger'
	});

	btn.addEventListener('click', function() {
		var b = 1 / a;
		var c = a * b + c;
		throw new Error("Error Capture Test");
	});

	win.add(btn);
	return win;
}

module.exports = exception;
