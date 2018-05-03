function test() {

	var win1 = Titanium.UI.createWindow({
		title : 'Tab 1',
		backgroundColor : '#ccc'
	});

	// Create a Button.
	var aButton = Ti.UI.createButton({
		title : 'HttpTest',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,

	});

	function syncTestForAppcelerator() {

		var xhr = Ti.Network.createHTTPClient({
			onload : function onLoad() {
				var data = JSON.parse(this.responseText);
				Ti.API.info(data);
				alert(data.cars[0].name+'\n'+data.cars[0].color);
			},
			onerror : function onError() {
				alert("Errored: " + this.status + ": " + this.responseText);
			}
		});

		xhr.open("GET", "https://d464a389e934c22626b1ab190a9685a97e419c90.cloudapp-enterprise.appcelerator.com/api/car");
		var authstr = 'Basic ' + Ti.Utils.base64encode('BnzGKX5Z0gleDAzBrvNuC5Rlfa9XJeMA:');
		xhr.setRequestHeader("Authorization", authstr);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send();

	}

	// Listen for click events.
	aButton.addEventListener('click', function() {
		syncTestForAppcelerator();
	});

	// Add to the parent view.
	win1.add(aButton);

	return win1;

}

module.exports = test;
