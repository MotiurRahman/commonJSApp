function cameraTest() {

	var button = Titanium.UI.createButton({
		title : 'Open Camera',
		width : 100,
		height : 50
	});
	var welcomeWindow = Titanium.UI.createWindow({
		backgroundColor : "#000"
	});

	button.addEventListener('click', function() {
		Titanium.Media.showCamera({
			success : function() {
			},
			error : function() {
			},
			cancel : function() {
			},
			saveToPhotoGallery : false,
			allowEditing : false,
			mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO]
		});
	});

	welcomeWindow.add(button);

	return welcomeWindow;

}

module.exports = cameraTest;
