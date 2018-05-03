function navButton() {

	var win2 = Titanium.UI.createWindow({
		backgroundColor : 'red',
		title : 'Red Window'
	});

	var win1 = Titanium.UI.iOS.createNavigationWindow({
		window : win2,
	});

	var win3 = Titanium.UI.createWindow({
		backgroundColor : 'blue',
		title : 'Blue Window',
	});

	var button = Titanium.UI.createButton({
		title : 'Open Blue'
	});
	button.addEventListener('click', function() {
		win1.openWindow(win3, {
			animated : true
		});
	});

	win2.add(button);
	var button2 = Titanium.UI.createButton({
		title : 'Close Blue Window'
	});
	button2.addEventListener('click', function() {
		win1.closeWindow(win3, {
			animated : false
		});
		//win3.close() will also work!!
	});
	var b7 = Titanium.UI.createButton({
		title : 'Change the Left Nav',
		height : 40,
		width : 145,
		top : 160,
		//left:100
	});

	var leftnav = false;
	b7.addEventListener('click', function() {
		if (!leftnav) {
			var b = Titanium.UI.createButton({});
			win3.leftNavButton = b;
			leftnav = true;
		} else {
			win3.setLeftNavButton(null);
			leftnav = false;
		}
	});

	win3.add(b7);

	win3.add(button2);
	return win1;

}

module.exports = navButton;
