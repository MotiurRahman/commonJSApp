function cameraTest() {

	var Cloud = require("ti.cloud");

	var button = Titanium.UI.createButton({
		title : 'Open Gallery',
		width : 100,
		height : 50,
		top : 20
	});
	var win = Titanium.UI.createWindow({
		backgroundColor : "#000",
		layout : "vertical"
	});

	function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {

		var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

		return {
			width : srcWidth * ratio,
			height : srcHeight * ratio
		};
	}

	function login(email, pass) {
		Cloud.Users.login({
			login : email,
			password : pass
		}, function(e) {
			if (e.success) {
				var user = e.users[0];
				alert('Success:\n' + 'id: ' + user.id + '\n' + 'sessionId: ' + Cloud.sessionId + '\n' + 'first name: ' + user.first_name + '\n' + 'last name: ' + user.last_name);
			} else {
				alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
			}
		});
	}

	login("motiur.mbstu@gmail.com", "1234");
	button.addEventListener('click', function() {
		Titanium.Media.openPhotoGallery({
			success : function(event) {
				// called when media returned from  camera
				Ti.API.debug('Our type was: ' + event.mediaType);
				if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {

					var obj = calculateAspectRatioFit(event.media.width, event.media.height, 700, 700);

					var img = event.media;

					//var resizedBlob = event.media.imageAsResized(obj.width, obj.height);
					img.imageAsCompressed(1.0);

					var imageView = Ti.UI.createImageView({
						image : img,
						top : 100
					});
					win.add(imageView);

					Cloud.Photos.create({
						photo : img
					}, function(e) {
						if (e.success) {
							var photo = e.photos[0];
							alert('Success:\n' + 'id: ' + photo.id + '\n' + 'filename: ' + photo.filename + '\n' + 'size: ' + photo.size, 'updated_at: ' + photo.updated_at);
						} else {
							alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
						}
					});
				} else {
					alert("got  wrong type back =" + event.mediaType);
				}
			},
			cancel : function() {
				// called when user cancels taking a picture
			},
			error : function(error) {
				// called when there's an error
				var a = Titanium.UI.createAlertDialog({
					title : 'Camera'
				});
				if (error.code == Titanium.Media.NO_CAMERA) {
					a.setMessage('Please run this test on device');
				} else {
					a.setMessage('Unexpected error: ' + error.code);
				}
				a.show();
			},
			saveToPhotoGallery : true,
			// allowEditing and mediaTypes are iOS-only settings
			allowEditing : true,
			mediaTypes : [Ti.Media.MEDIA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO]
		});
	});

	win.add(button);

	return win;

}

module.exports = cameraTest;
