var Cloud = require('ti.cloud');
//https://api.cloud.appcelerator.com/v1/objects/cars/create.json

exports.createData = function(message) {

	Cloud.Users.login({
		login : 'motiur.mbstu@gmail.com',
		password : '1234'
	}, function(e) {
		if (e.success) {
			Cloud.sendRequest({
				url : 'objects/cars/batch_create.json',
				method : 'POST',
				data : {
					json_array : [{
						'cars' : 'PAJERO'
					}, {
						'cars' : '001'
					}]
				}
			}, function(e) {
				if (e.success) {
					Ti.API.info(e.meta.message);
				} else {
					Ti.API.info('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
				}
			});
		} else {
			Ti.API.info('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});

};
