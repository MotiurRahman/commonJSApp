function imageUpload() {

	var window = Ti.UI.createWindow({
		backgroundColor : 'red',
		layout : "vertical"
	});

	// Create a Button.
	var request = Ti.UI.createButton({
		title : 'GO',
		height : 100,
		width : 100,
		backgroundImage : "motiur.jpg",
		top : 50
	});

	request.addEventListener('click', function(e) {

		var intent = Ti.Android.createIntent({
			action : Ti.Android.ACTION_GET_CONTENT,
			type : "application/pdf"
		});

		intent.addCategory(Ti.Android.CATEGORY_OPENABLE);

		var x = Ti.Android.createIntentChooser(intent, "Select");

		window.getActivity().startActivityForResult(x, function(e) {
			try {
				Ti.API.info("fileData:" + JSON.stringify(e));
				var doc = Ti.Filesystem.getFile(e.intent.data);
				alert(doc);
			} catch (error) {
				alert("This is error : " + error);
			}
		});

	});

	window.add(request);

	return window;

}

module.exports = imageUpload;