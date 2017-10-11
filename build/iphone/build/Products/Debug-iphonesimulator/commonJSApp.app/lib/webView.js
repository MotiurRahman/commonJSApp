function webTest() {
	var webview = Titanium.UI.createWebView({
		url : 'https://letstango.com/',
		//borderRadius : 2
		//url : "https://quranicaudio.com/"

	});
	var window = Titanium.UI.createWindow();
	//window.add(webview);
	Ti.Platform.openURL("https://www.facebook.com/LetsTangoME/");
	return window;

}

module.exports = webTest;
