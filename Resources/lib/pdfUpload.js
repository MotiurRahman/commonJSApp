function photo() {
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
			//type : "application/image" //for iamge
			//type : "application/doc"
		});
		intent.addCategory(Ti.Android.CATEGORY_OPENABLE);
		var x = Ti.Android.createIntentChooser(intent, "Select");
		window.getActivity().startActivityForResult(x, function(e) {

			//alert("fileData:" + JSON.parse(e.intent.data));
			var doc = Ti.Filesystem.getFile(e.intent.data);
			Ti.API.info(JSON.stringify(doc));

			var file = Ti.Filesystem.getFile(doc.nativePath);

			Ti.API.info("File:" + file);

			// var imageFile = Titanium.Filesystem.getFile(file);
			// var oneImage = imageFile.read();
			// Ti.API.info('oneImage' + oneImage);
			// var tempFile = Titanium.Filesystem.createTempFile();
			// tempFile.write(oneImage);
			// Ti.API.info('tempFile' + tempFile);
			// var contents = tempFile.read();
			// Ti.API.info('contents' + contents);
			var signBase64 = Ti.Utils.base64encode(doc.toString());

			//var encodedData = btoa(doc);

			// Ti.API.info('signBase64:' + signBase64);
			// Ti.API.info('Decode:' + Ti.Utils.base64encode(signBase64));

			var xhr = Titanium.Network.createHTTPClient();
			xhr.onload = function(e) {
				Ti.UI.createAlertDialog({
					title : 'Success',
					message : 'status code ' + this.status
				}).show();
			};
			xhr.open('POST', 'http://10.0.2:8080/api/pdfPhotoUpload');

			var authstr = 'Basic ' + Ti.Utils.base64encode('IVdP8hP8hOvVuCMZVSfE0Pvv51tJ4o24:');
			xhr.setRequestHeader('Authorization', authstr);
			xhr.send({
				fileName : signBase64, /* event.media holds blob from gallery */

			});

			// write here http code for file uploading to the server.

		});
	});
	window.add(request);
	return window;

}

module.exports = photo;

