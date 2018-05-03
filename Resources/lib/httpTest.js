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
			onload : function onLoad(e) {
				//alert("successfully Added");
				var data = JSON.parse(this.responseText);

				if (e.success == true) {
					Ti.API.info(e.data);
					alert("motiur test");
				}

			},
			onerror : function onError() {
				alert("Errored: " + this.status + ": " + this.responseText);
			}
		});

		xhr.open("POST", "https://9cc7c8610b50706cdb2433426927141853702533.cloudapp-enterprise.appcelerator.com/api/car");
		var authstr = 'Basic ' + Ti.Utils.base64encode('ZZZrIhNCHgz4RK3kXmOmqoyOcP0yHgfr:');
		xhr.setRequestHeader("Authorization", authstr);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(JSON.stringify({
			"name" : "Prdo",
			"model" : "1988",
			"color" : "white"
		}));

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
