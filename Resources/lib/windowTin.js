function border(image) {
	var win = Ti.UI.createWindow({
		backgroundColor : 'white',
		exitOnClose : true,
		fullscreen : false,
		title : 'ScrollView Demo'
	});

	var scrollView = Ti.UI.createScrollView({
		showVerticalScrollIndicator : true,
		showHorizontalScrollIndicator : true,
		height : '100%',
		width : '100%'
	});
	var view = Ti.UI.createView({
		backgroundColor : '#336699',
		borderRadius : 10,
		backgroundImage : image,
		top : 10,
		height : 2000,
		width : 1000
	});
	scrollView.add(view);
	win.add(scrollView);
	return win;
}

module.exports = border;
