function imageSize() {

	var window = Ti.UI.createWindow({
		backgroundColor : 'white'
	});

	var imageView = Titanium.UI.createImageView({
		image : 'test.svg',
		top : 4,
		left : 4,
		width : Ti.UI.SIZE || 'auto',
		height : Ti.UI.SIZE || 'auto'
	});

	window.add(imageView);

	return window;

}

module.exports = imageSize;
