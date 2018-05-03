function pdfTest() {
	//alert("hello");

	var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'motiur.jpg');
	var data = file.read();
	// var dataDirFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'samplepdf123.pdf');
	// dataDirFile.write(file.read());
	// Ti.API.info('dataDirFile ::' + dataDirFile.nativePath);
	var intent = Ti.Android.createIntent({
	type : 'application/img',
	data : data,
	action : Ti.Android.ACTION_VIEW
	});
	Ti.Android.currentActivity.startActivity(intent);

	//Titanium.Media.previewImage({image:data});

	// var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "motiur.pdf");
	// var outFile = Ti.Filesystem.getFile(Ti.Filesystem.externalStorageDirectory, 'tempFile.pdf');
	// file.copy(outPath);
	// var outPath = outFile.nativePath;
	//
	// try {
	// Ti.Android.currentActivity.startActivity(Ti.Android.createIntent({
	// action : Ti.Android.ACTION_VIEW,
	// type : 'application/pdf',
	// data : outPath
	// }));
	// } catch(e) {
	// alert('You must install a PDF reader to view this file ok');
	// }

	// try {
	// var intent = Ti.Android.createIntent({
	// action : Ti.Android.ACTION_VIEW,
	// type : "application/pdf",
	// data : outPath
	// });
	//
	// var open = Ti.Android.createIntentChooser(intent, L('open_intent'));
	// Ti.Android.currentActivity.startActivity(open);
	// } catch(e) {
	// alert('You must install a PDF reader to view this file');
	// }
	//
	// file = null;

}

module.exports = pdfTest;
