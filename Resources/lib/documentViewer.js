function documentViewer() {

	var win = Ti.UI.createWindow({
		backgroundColor : '#fff'
	});

	var btn = Ti.UI.createButton({
		title : 'Open PDF'
	});

	btn.addEventListener('click', openPDF);

	win.add(btn);

	// Open the PDF file
	function openPDF() {
		var fileName = 'motiur.pdf';

		// For iOS 11.2, workaround the Apple issue by creating a temporary file and
		// reference it. It will be removed from filesystem once the app closes.
		// Read more here: http://nshipster.com/nstemporarydirectory/
		if (isiOS11_2()) {
			fileName = fileInTemporaryDirectory(fileName);
		}

		var docViewer = Ti.UI.iOS.createDocumentViewer({
			url : fileName
		});

		docViewer.show();
	}

	// Check if the current device runs iOS 11.2+
	function isiOS11_2() {
		var version = Ti.Platform.version.split(".");
		return (parseInt(version[0]) >= 11 && parseInt(version[1]) >= 2);
	}

	// Create a temporary file with the contents of the old file
	// Expects the file to be in the resources directory. If you receive the file
	// from an API-call, receive pass the Ti.Blob/Ti.File/text to "write" directly.
	function fileInTemporaryDirectory(fileName) {
		var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, fileName);

		if (!file.exists()) {
			alert('File does not exist in resources!');
			return;
		}

		var newFile = Titanium.Filesystem.getFile(Ti.Filesystem.tempDirectory, fileName);
		newFile.createFile();

		if (!newFile.exists()) {
			alert('New file could not be created in temporary directory!');
			return;
		}

		newFile.write(file);

		return newFile.nativePath;
	}

	return win;

}

module.exports = documentViewer;
