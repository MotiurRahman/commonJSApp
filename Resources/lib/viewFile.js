function view() {

	var tabGroup = Ti.UI.createTabGroup();
	tabGroup.addTab(createTab());

	function createTab() {
		var win = Ti.UI.createWindow({
			title : "",
			backgroundColor : '#fff'
		});

		win.add(Ti.UI.createWebView({
			//backgroundColor : "transparent",
			url : 'http://www.appcelerator.com/',
			width:'80%',
			height:'100%'
			
		}));
		var tab = Ti.UI.createTab({
			title : "Hello",
			window : win
		});

		return tab;
	}

	return tabGroup;
};
module.exports = view;
