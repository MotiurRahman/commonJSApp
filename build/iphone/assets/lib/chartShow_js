function chartShow() {

	var win = Titanium.UI.createWindow({
		backgroundColor : '#fff'
	});

	var chartView = Ti.UI.createWebView({
		//height : 200,
		//width : 320,
		left : 0,
		top : 0,
		showScrollbars : false,
		touchEnabled : false,
		url : 'http://epoverty.herokuapp.com/charts'
	});
	win.add(chartView);

	var button = Ti.UI.createButton({
		title : 'Regenerate',
		top : 220,
	});
	win.add(button);

	button.addEventListener('click', function() {
		alert("its working");
		var options = {};
		alert("its working not");
		options.data = new Array(Math.floor(Math.random() * 1001), Math.floor(Math.random() * 1001), Math.floor(Math.random() * 1001), Math.floor(Math.random() * 1001), Math.floor(Math.random() * 1001));

		Ti.App.fireEvent('renderChart', options);
		alert("its working yet");
	});

	return win;

}

module.exports = chartShow;
