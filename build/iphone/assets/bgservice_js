Ti.API.info('bg-service1: service page');

function getCoords() {
	Ti.Geolocation.getCurrentPosition(function(e) {
		Ti.API.warn(e);
	});
}

setInterval(function() {
	getCoords();
}, 10000); 