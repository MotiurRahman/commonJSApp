function agentTest() {
	var window = Titanium.UI.createWindow();

	var webview = Titanium.UI.createWebView({
		url : 'http://www.appcelerator.com',
		userAgent : 'testUserAgent'
	});

	window.add(webview);

	webview.addEventListener('load', function(e) {
		Ti.API.warn("webviewload:" + e.url);
		Ti.API.info("webvieUser-Agent:" + webview.evalJS('navigator.userAgent'));
	});

	return window;

}

module.exports = agentTest;
