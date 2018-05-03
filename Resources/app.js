var win = Ti.UI.createWindow({
	backgroundColor : 'red',
	layout : "vertical"
});

// Create a Button.
var windowTest1 = Ti.UI.createButton({
	title : 'Barcode Test',
	height : 100,
	width : 100,
	backgroundImage : "motiur.jpg",
	top : 50
});

// Create a Button.
var windowTest2 = Ti.UI.createButton({
	title : 'windowTest2',
	height : Ti.UI.SIZE,
	width : Ti.UI.SIZE,
	top : 50
});

// Create a Button.
var windowTest3 = Ti.UI.createButton({
	title : 'nextWindow',
	height : Ti.UI.SIZE,
	width : Ti.UI.SIZE,
	top : 50
});

var label2 = Ti.UI.createLabel({
	color : 'blue',
	text : 'A long label with a few line breaks and unicode (UTF8) symbols such as a white chess piece and the euro symbol looks like this!\n',
	textAlign : Titanium.UI.TEXT_ALIGNMENT_JUSTIFY,
	top : 50,
	width : "80%",
	height : Ti.UI.SIZE
});


windowTest1.addEventListener('click', function(e) {

	//alert("Ope dataBase");
	var nextPage = require('lib/barcode');
	var Next_win = new nextPage();
	Next_win.open();
	//nextPage.createData();

});

windowTest2.addEventListener('click', function(e) {
	// Titanium.API.info("Have connection");
	//
	// var nextPage = require('lib/barcode');
	// var Next_win = new nextPage();
	// Next_win.open();
	//nextPage.createData();

});

windowTest3.addEventListener('click', function(e) {

});

win.add(windowTest1);
//win.add(windowTest2);
//win.add(windowTest3);

win.open();
