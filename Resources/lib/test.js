exports.defaultWenpasParameter = 'APIuser=ios2013';

exports.defaultAppParameter = 'APIuser=appios2013';

exports.iTunesUrl = 'https://itunes.apple.com/us/app/autogaragen/id579234243?l=de&ls=1&mt=8';

exports.urlParameter = '&appname=' + encodeURIComponent(Ti.App.getName()) + '&appversion=' + encodeURIComponent(Ti.App.getVersion()) + '&platformname=' + encodeURIComponent(Ti.Platform.getName()) + '&platformmacaddress=' + encodeURIComponent(Ti.Platform.getMacaddress()) + '&platformmodel=' + encodeURIComponent(Ti.Platform.getModel()) + '&platformosname=' + encodeURIComponent(Ti.Platform.getOsname()) + '&platformusername=' + encodeURIComponent(Ti.Platform.getUsername()) + '&startcount=' + Ti.App.Properties.getInt('startCount'), exports.setStartCount = function() {

	Ti.App.Properties.setInt('startCount', Ti.App.Properties.getInt('startCount') + 1);

};

exports.pickerTest = function() {

	var date_container = Ti.UI.createView({
		layout : 'horizontal',
		top : 0,
		width : 100,
		height : Ti.UI.SIZE
	});

	var datePicker = Ti.UI.createPicker({
		type : Ti.UI.PICKER_TYPE_DATE
	});
	var flight_date = Ti.UI.createTextField({
		editable : false,
		width : 50,
		height : 200,
		hintText : "Date",
		top : 200 + 35
	});

	date.addEventListener('click', function(e) {
		datePicker.showDatePickerDialog({
			value : new Date(), // some date
			maxDate : new Date(),
			callback : function(e) {
				if (e.value) {
					date.value = String.formatDate(e.value, 'medium');
					day_timestamp.value = e.value.getTime();
				}
			}
		});
	});
	date_container.add(date);

	var timePicker = Ti.UI.createPicker({
		type : Ti.UI.PICKER_TYPE_TIME
	});
	var time = Ti.UI.createTextField({
		editable : false,
		width : 50,
		height : 200,
		hintText : "Heure",
		top : 100 + 35
	});

	time.addEventListener('click', function(e) {
		timePicker.showTimePickerDialog({
			format24 : true,
			callback : function(e) {
				if (e.value) {
					time.value = String.formatTime(e.value, 'medium');
					hour_timestamp.value = e.value.getTime();
				}
			}
		});
	});
	date_container.add(time);
	return date_container;

};

exports.openUrl = function(url) {

	var httpClient = Ti.Network.createHTTPClient();

	httpClient.open('GET', url);

	httpClient.send();

};

