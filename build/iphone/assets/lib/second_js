function view() {

	var win = Ti.UI.createWindow({
		backgroundColor : "gray"
	});

	var payload = {
		username : "test",
		password : "test"
	};

	// Create a Button.
	var GetValue = Ti.UI.createButton({
		title : 'GetValue',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,

	});

	// Listen for click events.
	GetValue.addEventListener('click', function() {
		var xhr = Ti.Network.createHTTPClient();

		xhr.onload = function(e) {

			var myObjectString = JSON.parse(this.responseText);
			alert(myObjectString.token);
			Ti.API.info("Received text: " + myObjectString.token);
		};

		xhr.onerror = function(e) {
			Ti.API.error(e.error);
			alert('error');
		};

		xhr.open('POST', 'https://my.cgps.org/rest_login/user/token.json');
		xhr.setRequestHeader('Content-Type', 'application/json');

		xhr.send(JSON.stringify(payload));
	});

	// Add to the parent view.
	win.add(GetValue);

	return win;
};

module.exports = view;
