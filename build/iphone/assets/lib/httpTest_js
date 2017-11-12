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
				alert(JSON.stringify(this.responseText));
			},
			onerror : function onError() {
				alert("Errored: " + this.status + ": " + this.responseText);
			}
		});

		xhr.open("POST", "http://localhost:8080/api/car");
		var authstr = 'Basic ' + Ti.Utils.base64encode('uu1ZPXaQ6L0cef2YLVrcj+IE9CAf1pmr:');
		xhr.setRequestHeader("Authorization", authstr);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(JSON.stringify({
			"name" : "motiur",
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
