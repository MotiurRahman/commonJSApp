function webTest() {

	var win = Ti.UI.createWindow({
		backgroundColor : '#fff',
		layout : "vertical"
	});
	var web = Ti.UI.createWebView({
		url : '1.html',
		top : 0,
		height : 300,
	});

	web.addEventListener('load', function() {
		var image = web.toImage();
		var nextPage = require('lib/windowTin');
		var Next_win = new nextPage(image);
		Next_win.open();
	});
	win.add(web);

	return win;

}

module.exports = webTest;
