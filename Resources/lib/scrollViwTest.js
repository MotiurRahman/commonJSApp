function scrolVeiwTest() {

	var win2 = Titanium.UI.createWindow({
		backgroundColor : 'blue',
		layout : 'vertical',
		title : 'Window 1',
		includeOpaqueBars : true,
		extendEdges : [Ti.UI.EXTEND_EDGE_TOP]
	});

	var label1 = Ti.UI.createLabel({
		width : '90%',
		height : Ti.UI.SIZE,
		text : 'You can see the red of the view extends underneath the navigation bar. This is expected and how it works in android. It works this way only when the entire contents of the scrollview fit on the screen.'
	});

	var label2 = Ti.UI.createLabel({
		width : '90%',
		height : Ti.UI.SIZE,
		top : 200,
		text : 'On this window the view added to the scrollView has a height larger than the size of the device. When this is the case the view is positioned after the end of the navigation bar. I should not be able to see the green of the scrollview through the navigation bar.'
	});

	var win3 = Titanium.UI.createWindow({
		backgroundColor : 'blue',
		layout : 'vertical',
		title : 'Window 2',
		includeOpaqueBars : true,
		extendEdges : [Titanium.UI.EXTEND_EDGE_BOTTOM]
	});

	var win1 = Titanium.UI.iOS.createNavigationWindow({
		window : win2
	});

	var scrollView1 = Ti.UI.createScrollView({
		backgroundColor : 'green',
		scrollType : 'vertical',
		layout : 'vertical',
		top : 0
	});

	var scrollView2 = Ti.UI.createScrollView({
		backgroundColor : 'green',
		scrollType : 'vertical',
		layout : 'vertical',
		top : 0
	});

	var btn = Ti.UI.createButton({
		title : "Open new Window with larger view",
		backgroundColor : '#eee',
		bottom : 50
	});

	btn.addEventListener('click', function() {
		win1.openWindow(win3);
	});

	var row = Ti.UI.createView({
		backgroundColor : 'red',
		width : Ti.UI.FILL,
		height : 500
	});
	row.add(btn);
	row.add(label1);
	scrollView1.add(row);

	win2.add(scrollView1);

	var largeRow = Ti.UI.createView({
		backgroundColor : 'red',
		width : Ti.UI.FILL,
		height : 4000
	});
	largeRow.add(label2);
	scrollView2.add(largeRow);
	win3.add(scrollView2);

	return win1;

}

module.exports = scrolVeiwTest;
