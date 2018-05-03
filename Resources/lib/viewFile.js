function view() {

	var win = Ti.UI.createWindow({
		backgroundColor : '#fff'
	});

	var btn = Ti.UI.createButton({
		title : 'Trigger'
	});

	var webview = Ti.UI.createWebView({
		url : 'https://appcelerator.com'
	});

	webview.addEventListener('load', function(e) {
		Ti.API.warn(e.source.html);
	});

	win.add(webview);
	return win;

};
module.exports = view;
