function animattionData() {
	var win = Ti.UI.createWindow({
		backgroundColor : "white"
	});

	var imageView;
	var images = [];
	for (var i = 0; i < 30; i++) {
		images.push('/images/' + i + ".png");
	}
	win.addEventListener('open', Load_Anim);

	function Load_Anim() {
		imageView = Titanium.UI.createImageView({
			images : images,
			duration : 50,
			repeatCount : 0,
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE,
		});
		win.add(imageView);
		imageView.start();
	}

	return win;
}

module.exports = animattionData;
