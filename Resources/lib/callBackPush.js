// Require the module
exports.pushSubscribe = function() {

	var Cloud = require("ti.cloud");
	var deviceToken = null;

	// Process incoming push notifications
	function receivePush(e) {
		Ti.API.info('Received push: ' + JSON.stringify(e));
		var pushData = require('arrowDb');

		Ti.API.info("Title Name:" + e.data.title + '\n' + e.data.alert);
	}

	// Save the device token for subsequent API calls
	function deviceTokenSuccess(e) {
		deviceToken = e.deviceToken;
	}

	function deviceTokenError(e) {
		Ti.API.info('Failed to register for push notifications! ' + e.error);
	}

	if ((Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad') && parseInt(Ti.Platform.version.split(".")[0]) >= 8) {

		// The following action launches the application in the foreground and requires the device to be unlocked
		var acceptAction = Ti.App.iOS.createUserNotificationAction({
			identifier : "ACCEPT_IDENTIFIER",
			title : "Accept",
			activationMode : Ti.App.iOS.USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND,
			destructive : false,
			authenticationRequired : true
		});

		// The following action will only activate the application in the background, requires the device to be unlocked, and may have a red background.
		var rejectAction = Ti.App.iOS.createUserNotificationAction({
			identifier : "REJECT_IDENTIFIER",
			title : "Reject",
			activationMode : Ti.App.iOS.USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND,
			destructive : true,
			authenticationRequired : true
		});

		var invitationCategory = Ti.App.iOS.createUserNotificationCategory({
			identifier : "INVITE_CATEGORY",
			// The following actions will be displayed for an alert dialog
			actionsForDefaultContext : [acceptAction, rejectAction],
			// The following actions will be displayed for all other notifications
			actionsForMinimalContext : [acceptAction, rejectAction]
		});

		// Register notification types to use
		Ti.App.iOS.registerUserNotificationSettings({
			types : [Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT, Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND, Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE],
			categories : [invitationCategory]
		});

		function registerForPush() {
			Ti.Network.registerForPushNotifications({
				success : deviceTokenSuccess,
				error : deviceTokenError,
				callback : receivePush
			});
			// Remove event listener once registered for push notifications
			Ti.App.iOS.removeEventListener('usernotificationsettings', registerForPush);
		};

		// Wait for user settings to be registered before registering for push notifications
		Ti.App.iOS.addEventListener('usernotificationsettings', registerForPush);

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

	function subscribeToChannel() {
		// Subscribes the device to the 'news_alerts' channel
		// Specify the push type as either 'android' for Android or 'ios' for iOS
		Cloud.PushNotifications.subscribeToken({
			device_token : deviceToken,
			channel : 'update_alart',
			type : Ti.Platform.name == 'android' ? 'android' : 'ios'
		}, function(e) {
			if (e.success) {
				alert('Subscribed');
			} else {
				Ti.API.info('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
			}
		});
	}


	Cloud.Users.login({
		login : 'motiur.mbstu@gmail.com',
		password : '1234'
	}, function(e) {
		if (e.success) {
			var user = e.users[0];
			Ti.API.info('Success:\n' + 'id: ' + user.id + '\n' + 'sessionId: ' + Cloud.sessionId + '\n' + 'first name: ' + user.first_name + '\n' + 'last name: ' + user.last_name);
			subscribeToChannel();
		} else {
			Ti.API.info('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});

};
