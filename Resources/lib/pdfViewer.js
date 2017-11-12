function pdfTest() {

	var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "motiur.pdf");

	var outFile = Ti.Filesystem.getFile(Ti.Filesystem.externalStorageDirectory, 'tempFile.pdf');
	var outPath = outFile.nativePath;
	file.copy(outPath);

	// try {
	// Ti.Android.currentActivity.startActivity(Ti.Android.createIntent({
	// action : Ti.Android.ACTION_VIEW,
	// type : 'application/pdf',
	// data : file
	// }));
	// } catch(e) {
	// alert('You must install a PDF reader to view this file');
	// }

	try {
		var intent = Ti.Android.createIntent({
			action : Ti.Android.ACTION_VIEW,
			type : "application/pdf",
			data : outPath
		});

		var open = Ti.Android.createIntentChooser(intent, L('open_intent'));
		Ti.Android.currentActivity.startActivity(open);
	} catch(e) {
		alert('You must install a PDF reader to view this file');
	}

	file = null;

}

module.exports = pdfTest;
