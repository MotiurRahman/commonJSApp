function border() {
	var win = Ti.UI.createWindow({
		title : "Test",
		backgroundColor : '#fff'
	});

	var x = 10;
	var y = 20;
	var a = eval("x * y");

	var label = Ti.UI.createLabel({
		text : a,
		color : "#333",
		font : {
			fontSize : 20
		}
	});
	win.add(label);
	return win;

}

module.exports = border;
