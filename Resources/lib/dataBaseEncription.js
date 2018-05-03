function dataBase() {

	var encrypteddatabase = require('appcelerator.encrypteddatabase');
	encrypteddatabase.setPassword('PPA@P@ssw0rd@017');
	encrypteddatabase.install('/db_files/PensionDataBase.sqlite', 'PensionDataBase');
	var database = encrypteddatabase.open('PensionDataBase');
	//database.execute('DELETE FROM Messages');
	for (var i = 0; i < 4; i++) {
		var name = [i]+"testName";
		var description = [i]+"He is a good Boy";
		database.execute('INSERT INTO Messages (name,description) VALUES (?,?)', name, description);
	}
	database.close();
	alert("Data successfully inserted");

}

module.exports = dataBase;
