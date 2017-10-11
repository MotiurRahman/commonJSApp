function indicator() {

	var win1 = Titanium.UI.createWindow({
		title : globalDataValue,
		backgroundColor : '#ccc'
	});

	var actInd = Titanium.UI.createActivityIndicator({
		message : ' Loading',
		style : Titanium.UI.ActivityIndicatorStyle.BIG_DARK,
		width : '80px',
		height : '80px',
		font : {
			fontFamily : 'tahoma',
			fontSize : 30, //20,
			fontWeight : 'normal'
		},
		color : 'black',
		left : '25%',
		indicatorColor : '#000',
	});

	var overlay = Titanium.UI.createView({
		height : '100%',
		width : '100%',
		backgroundColor : '#000',
		opacity : 0.5
	});
	var indView = Titanium.UI.createView({
		height : '150px',
		width : '65%',
		backgroundColor : '#ffffff',
		borderRadius : 10,
		opacity : 0.8,

	});

	var label = Ti.UI.createLabel({
		color : '#000000',
		text : 'Loading',
		height : 'auto',
		width : 'auto',
	});

	win1.add(overlay);
	win1.add(indView);
	win1.add(actInd);

	indView.add(label);
	actInd.show();

	return win1;
}

module.exports = indicator;
