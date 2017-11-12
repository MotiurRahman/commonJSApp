var win = Ti.UI.createWindow({
	backgroundColor : 'red',
	layout : "vertical"
});

// Create a Button.
var request = Ti.UI.createButton({
	title : 'Add view',
	height : Ti.UI.SIZE,
	width : Ti.UI.SIZE,
	backgroundImage : "/images/tab1.png",
	top : 50
});

// var testmodulemo = require('com.bd.testmodulemo');
// Ti.API.info("module is => " + testmodulemo);

request.addEventListener('click', function(e) {

	var nextPage = require('lib/push');
	var Next_win = new nextPage();
	Next_win.open();

});

win.add(request);

win.open();

