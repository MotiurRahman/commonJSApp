function appData() {

	var testFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "testFile.txt");

	var toWrite = {
		"this" : "is",
		"a" : "test"
	};

	testFile.write(JSON.stringify(toWrite));

	if (testFile.exists()) {
		Ti.API.info(testFile.read());
		//This should be empty
		Ti.API.info(Ti.App.Properties.getString("TestString"));
		//This should be null
	}

	testFile = null;

	Ti.App.Properties.setString("TestString", "Helloworld!");

}

module.exports = appData;
