function scrollableView() {
	var win = Ti.UI.createWindow({
		layout : "vertical"
	});

	// Create a Button.
	var btn1 = Ti.UI.createButton({
		title : 'Remove View',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		top : 50
	});

	win.add(btn1);

	var view1 = Ti.UI.createView({
		backgroundColor : 'red'
	});
	var view2 = Ti.UI.createView({
		backgroundColor : 'green'
	});
	var view3 = Ti.UI.createView({
		backgroundColor : 'blue'
	});

	var scrollableView = Ti.UI.createScrollableView({
		views : [view1, view2, view3],
		showPagingControl : true,
		top : 50,
		width : Ti.UI.FILL,
		height : 400
	});

	win.add(scrollableView);

	btn1.addEventListener('click', function(e) {

		//remove blue
		scrollableView.removeView(view3);
		
		alert("successfully removed blue");
	});
	return win;
}

module.exports = scrollableView;
