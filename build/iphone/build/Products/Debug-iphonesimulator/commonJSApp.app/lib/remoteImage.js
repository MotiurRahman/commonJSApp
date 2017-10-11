function image() {

	var xhr = Titanium.Network.createHTTPClient({
		onload : function() {
			// first, grab a "handle" to the file where you'll store the downloaded data
			var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'cool_photo.jpg');
			f.write(this.responseData);

			alert("photo sahve successfully");

		},
		ondatastream : function(e) {
			ind.value = e.progress;
		},
		timeout : 10000
	});
	// image from http://www.flickr.com/photos/72213316@N00/3115485060/sizes/o/in/photostream/
	xhr.open('GET', 'http://farm4.static.flickr.com/3244/3115485060_076a345932_o.jpg');
	xhr.send();

}

module.exports = image;
