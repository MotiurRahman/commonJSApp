function openFile() {
	var win = Ti.UI.createWindow({
		backgroundColor : '#fff'
	});

	var btn = Ti.UI.createButton({
		title : 'Trigger'
	});

	var REQUEST_CHOOSER = 1234;
	btn.addEventListener('click', function() {
		var intent = Ti.Android.createIntent({
			action : Ti.Android.ACTION_GET_CONTENT,
			type : "file/*"
		});

		Titanium.Android.startActivityForResult(intent, function getData() {
			alert("hello");
		});
	});

	win.add(btn);
	return win;
}

module.exports = openFile;
