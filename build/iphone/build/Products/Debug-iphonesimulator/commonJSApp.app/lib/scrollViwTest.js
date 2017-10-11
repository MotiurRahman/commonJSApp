function scrolVeiwTest() {

	var window = Ti.UI.createWindow({

		backgroundColor : "#ffffff",

		statusBarStyle : Ti.UI.iOS.StatusBar.LIGHT_CONTENT,

		touchEnabled : true

	});

	var scrollView = Ti.UI.createScrollView({

		width : Ti.UI.FILL,

		height : Ti.UI.FILL,

		contentWidth : Ti.UI.SIZE,

		contentHeight : Ti.UI.SIZE

	});

	var overlayTaskScreenTextArea = Ti.UI.createTextArea({

		width : 200,

		height : Ti.UI.SIZE,

		scrollable : false,

		top : 200,

		left : 58,

		color : "#9fa8b0",

		value : "TITLE",

		textAlign : 'left',

		verticalAlign : Ti.UI.TEXT_VERTICAL_ALIGNMENT_TOP,

		returnKeyType : Ti.UI.RETURNKEY_DONE,

		autocapitalization : Ti.UI.TEXT_AUTOCAPITALIZATION_ALL,

		autocorrect : false,

		scrollsToTop : false,

		font : {

			fontFamily : "CenturyGothic",

			fontSize : "13dp"

		},

	});

	scrollView.add(overlayTaskScreenTextArea);

	window.add(scrollView);

	return window;
}

module.exports = scrolVeiwTest;
