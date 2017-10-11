function pushTest() {

	var win = Titanium.UI.createWindow({
		backgroundColor : 'white',
		layout : "vertical"
	});

	// Create a TextField.
	var channel = Ti.UI.createTextField({
		height : 50,
		color : '#000',
		top : 40,
		left : 20,
		right : 20,
		hintText : 'Enter your channel name',
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});

	// Add to the parent view.
	win.add(channel);

	// Create a Button.
	var subscribe = Ti.UI.createButton({
		title : 'subscribe',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		top : 20

	});

	// Add to the parent view.
	win.add(subscribe);

	// Create a Button.
	var unsubscribe = Ti.UI.createButton({
		title : 'unsubscribe',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		top : 20,

	});

	// Add to the parent view.
	win.add(unsubscribe);

	var Cloud = require("ti.cloud");
	var deviceToken = null;

	// Places your already created user id credential

	Cloud.Users.login({
		login : 'motiur.mbstu@gmail.com',
		password : '1234'
	}, function(e) {
		if (e.success) {
			var user = e.users[0];
			alert(' Login Success:\n' + 'id: ' + user.id + '\n' + 'sessionId: ' + Cloud.sessionId + '\n' + 'first name: ' + user.first_name + '\n' + 'last name: ' + user.last_name);

		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});

	if (Ti.Platform.osname === "android") {
		var CloudPush = require('ti.cloudpush');

		// Initialize the module
		CloudPush.retrieveDeviceToken({
			success : deviceTokenSuccess,
			error : deviceTokenError
		});
		// Enable push notifications for this device
		// Save the device token for subsequent API calls
		function deviceTokenSuccess(e) {
			deviceToken = e.deviceToken;
		}

		function deviceTokenError(e) {
			Ti.API.info('Failed to register for push notifications! ' + e.error);
		}

		// Process incoming push notifications
		CloudPush.addEventListener('callback', function(evt) {
			Ti.API.info("Notification received: " + evt.payload);
		});

	} else {

		// Check if the device is running iOS 8 or later
		if ((Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad' || Ti.Platform.osname === 'ipod') && parseInt(Ti.Platform.version.split(".")[0]) >= 8) {

			// Wait for user settings to be registered before registering for push notifications
			Ti.App.iOS.addEventListener('usernotificationsettings', function registerForPush() {

				// Remove event listener once registered for push notifications
				Ti.App.iOS.removeEventListener('usernotificationsettings', registerForPush);

				Ti.Network.registerForPushNotifications({
					success : deviceTokenSuccess,
					error : deviceTokenError,
					callback : receivePush
				});
			});

			// Register notification types to use
			Ti.App.iOS.registerUserNotificationSettings({
				types : [Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT, Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND, Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE]
			});
		}

		// For iOS 7 and earlier
		else {

			Ti.Network.registerForPushNotifications({
				// Specifies which notifications to receive
				types : [Ti.Network.NOTIFICATION_TYPE_BADGE, Ti.Network.NOTIFICATION_TYPE_ALERT, Ti.Network.NOTIFICATION_TYPE_SOUND],
				success : deviceTokenSuccess,
				error : deviceTokenError,
				callback : receivePush
			});
		}

		// Process incoming push notifications
		function receivePush(e) {
			alert('Received push: ' + JSON.stringify(e));
		}

		// Save the device token for subsequent API calls
		function deviceTokenSuccess(e) {
			deviceToken = e.deviceToken;
		}

		function deviceTokenError(e) {
			alert('Failed to register for push notifications! ' + e.error);
		}

	}

	// Check if the device is running iOS 8 or later

	// Process incoming push notifications

	function subscribeToChannel() {
		// Subscribes the device to the 'news_alerts' channel
		// Specify the push type as either 'android' for Android or 'ios' for iOS
		if (channel.getValue() == '') {
			alert('please insert channel name');

		} else {

			Cloud.PushNotifications.subscribe({
				channel : channel.getValue(),
				device_token : deviceToken,
				type : Ti.Platform.name == 'android' ? 'android' : 'ios'
			}, function(e) {
				if (e.success) {
					alert('Successfully subscribed');
				} else {
					alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
				}
			});
		}
	}

	function unsubscribeToChannel() {
		// Subscribes the device to the 'news_alerts' channel
		// Specify the push type as either 'android' for Android or 'ios' for iOS
		if (channel.getValue() == '') {
			alert('please insert channel name');
		} else {

			Cloud.PushNotifications.unsubscribe({
				channel : channel.getValue(),
				device_token : deviceToken
			}, function(e) {
				if (e.success) {
					alert('Successfully unsubscribed');
				} else {
					alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
				}
			});
		}
	}

	// Listen for click events.
	subscribe.addEventListener('click', function() {
		subscribeToChannel();
	});

	// Listen for click events.
	unsubscribe.addEventListener('click', function() {
		unsubscribeToChannel();
	});

	return win;
}

module.exports = pushTest;
