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

		var url = "https://193.146.1.116/mpac/mpacv2.asmx?WSDL";

		var client = Ti.Network.createHTTPClient({

			// function called when the response data is available

			onload : function(e) {

				Ti.API.info("Received text: " + this.responseText);

				alert('success');

			},

			// function called when an error occurs, including a timeout

			onerror : function(e) {

				Ti.API.debug(e.error);

				alert('error');

			},
			

			timeout : 5000 // in milliseconds

		});

		//Set Header

		

		//var accessToken = Titanium.Utils.base64encode("00DN0000000Ap4u!AQ4AQIawfQBbd5YmcWpk5GEa7NjiLaQyP0m6phLLPM79L6KhSxxHYsIVNiOWo.RwNN0PIg");

		//client.setRequestHeader("Authorization", "OAuth" + accessToken);

		// Prepare the connection.

		client.open("GET", url);
		client.setRequestHeader("content-type", "application/json");

		// Send the request.

		client.send();

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
