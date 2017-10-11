function tableViewRefress() {
	var win = Ti.UI.createWindow({
		fullscreen : true
	});

	//$.AssignmentScreenWindow.open();

	var lastDistance = 0;
	// calculate location to determine direction
	var updating = false;

	var tableData = [];
	var lastRow = 25;

	///load fake data

	for (var ifake = 0; ifake < 400; ifake++) {
		tableData.push(ifake);
	}

	loadBeginData();

	function loadBeginData() {
		//load first records

		for (var iassignlist = 0; iassignlist < 25; iassignlist++) {
			loadGarbagedata(iassignlist);
		}

	}

	function beginUpdate() {
		updating = true;

		// mock out the load of more data
		setTimeout(endUpdate, 1000);
	}

	function endUpdate() {

		for (var c = lastRow; c < lastRow + 25; c++) {

			if (c < tableData.length) {
				///load the next set of data

				try
				{

					loadGarbagedata(c);

				} catch(ex) {
					Ti.API.info("Could not load assignment for " + "EX" + JSON.stringify(ex));
				}

			} else {

				Ti.API.info("There are no more records to load");
				table.deleteRow(tableData.length, {
					animationStyle : Ti.UI.iOS.RowAnimationStyle.NONE
				});
				c = lastRow + 25;
			}

		}
		lastRow += 25;
		updating = false;

	}

	var table = Ti.UI.createTableView({
		//data : tableData
	});
	win.add(table);

	table.addEventListener('scroll', function(e) {

		Ti.API.info("SCROLL IS " + JSON.stringify(e));
		if (e.source.id == "tblAssignments") {
			var offset = e.contentOffset.y;
			var height = e.size.height;
			var total = offset + height;
			var theEnd = e.contentSize.height;
			var distance = theEnd - total;

			// going down is the only time we dynamically load,
			// going up we can safely ignore -- note here that
			// the values will be negative so we do the opposite
			if (distance < lastDistance) {
				// adjust the % of rows scrolled before we decide to start fetching
				var nearEnd = theEnd * .85;

				if (updating == false && (total >= nearEnd)) {
					Ti.API.info("Load more data");
					beginUpdate();
				}
			}
			lastDistance = distance;
		}

	});

	function loadGarbagedata(fakenumber) {
		//create a view for the table
		var myOuterView = Ti.UI.createView({
			height : 260,
			//	layout : "vertical",
			left : 5
		});

		var lblalertStatus = Ti.UI.createLabel({
			text : "",
			color : "red",
			top : 5,
			left : 3
		});

		myOuterView.add(lblalertStatus);

		var DataWrapperView = Ti.UI.createView({
			layout : "horizontal",
			height : 240,
			top : 10
		});

		var DataView = Ti.UI.createView({
			layout : "vertical",
			height : 240,
			width : "40%",
			top : 40

		});

		var DataStatusView = Ti.UI.createView({
			height : 200,
			layout : "vertical",
		});

		var AssignmentStatusColorView = Ti.UI.createView({
			width : 20,
			height : 200,
		});

		AssignmentStatusColorView.backgroundColor = "red";
		lblalertStatus.text = "ACTIVE QUARANTINE";

		var tableHeader = buildLicenseTableHeader();

		var tblLicense = Ti.UI.createTableView({
			//headerView : tableHeader,
			top : "0",
			width : "400",
			borderColor : "#DBDDDE",
			height : 150,

		});

		DataStatusView.add(tableHeader);
		DataStatusView.add(tblLicense);
		DataWrapperView.add(DataView);
		DataWrapperView.add(DataStatusView);

		var mytitle = Ti.UI.createLabel({
			text : fakenumber,
			font : {
				fontSize : 16
			},
			height : Ti.UI.SIZE,
			left : 0
		});

		DataView.add(mytitle);

		var myestID = Ti.UI.createLabel({
			text : fakenumber + 1,
			font : {
				fontSize : 12
			},
			height : Ti.UI.SIZE,
			left : 0
		});

		DataView.add(myestID);

		var lblCounty = Ti.UI.createLabel({
			text : "County:" + fakenumber + 2,
			font : {
				fontSize : 12
			},
			height : Ti.UI.SIZE,
			left : 0
		});

		DataView.add(lblCounty);

		var AssignedTo = Ti.UI.createLabel({
			text : "Assigned to:" + fakenumber + 3,
			font : {
				fontSize : 12
			},
			height : Ti.UI.SIZE,
			width : Ti.UI.FILL,
			left : 0
		});

		DataView.add(AssignedTo);

		All_Owners = "NONE";

		var myowner = Ti.UI.createLabel({
			text : "Owner:" + All_Owners,
			font : {
				fontSize : 12
			},
			height : Ti.UI.SIZE,
			left : 0
		});

		DataView.add(myowner);

		var myaddress = Ti.UI.createLabel({
			text : "Address:" + fakenumber + 4,
			font : {
				fontSize : 12
			},
			height : Ti.UI.SIZE,
			left : 0
		});

		DataView.add(myaddress);

		var email = fakenumber + 5;
		var phone_number = fakenumber + 6;

		///get the buisness contact for this location

		var myemail = Ti.UI.createLabel({
			text : "Email:" + email,
			font : {
				fontSize : 12
			},
			height : Ti.UI.SIZE,
			left : 0
		});

		DataView.add(myemail);

		var myphone = Ti.UI.createLabel({
			text : "Phone Number:" + phone_number,
			font : {
				fontSize : 12
			},
			height : Ti.UI.SIZE,
			left : 0
		});

		DataView.add(myphone);

		var myduedate = Ti.UI.createLabel({
			text : "Due Date: " + '2016-01-01',
			font : {
				fontSize : 12
			},
			height : Ti.UI.SIZE,
			left : 0
		});

		DataView.add(myduedate);

		myOuterView.add(DataWrapperView);

		var row = Titanium.UI.createTableViewRow({
			layout : "horizontal"
		});

		row.backgroundColor = "white";

		row.add(AssignmentStatusColorView);
		row.add(myOuterView);
		row.data = {
			"LOCATION_ID" : 1234,
			"NAV" : "ASSIGNMENT"
		};

		table.appendRow(row, {
			animationStyle : Ti.UI.iOS.RowAnimationStyle.NONE
		});
	}

	function buildLicenseTableHeader() {

		var tblLicenseHeaderView = Ti.UI.createView({
			backgroundColor : "#DBDDDE",
			height : "60",
			width : "400",
			layout : "vertical"
		});

		var lbltblLicenseHeader = Ti.UI.createLabel({
			text : "Licenses",
			top : "5",
			textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER
		});
		tblLicenseHeaderView.add(lbltblLicenseHeader);

		///create the column names for the headerview

		var HeaderLabelView = Ti.UI.createView({
			width : 360,
			height : "30",
			layout : "horizontal",
			bottom : "0"
		});

		var lblLicenceType = Ti.UI.createLabel({
			font : {
				fontSize : 12
			},
			text : "License Type",
			textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER
		});

		var lblLicenceStatus = Ti.UI.createLabel({
			font : {
				fontSize : 12
			},
			text : "Status",
			textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER
		});

		var lblLicenceEndDate = Ti.UI.createLabel({
			font : {
				fontSize : 12
			},
			text : "End Date",
			textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER
		});

		var lblLastInspection = Ti.UI.createLabel({
			font : {
				fontSize : 12
			},
			text : "Last Inspection"
		});

		var HeaderLicenseTypeView = Ti.UI.createView({
			width : 90,
			height : "30"
		});

		var HeaderLicenseStatusView = Ti.UI.createView({
			width : 90,
			height : "30"
		});

		var HeaderLicenceEndDateView = Ti.UI.createView({
			width : 90,
			height : "30"
		});

		var HeaderLastInspectionView = Ti.UI.createView({
			width : 90,
			height : "30"
		});

		HeaderLicenseTypeView.add(lblLicenceType);
		HeaderLicenseStatusView.add(lblLicenceStatus);
		HeaderLicenceEndDateView.add(lblLicenceEndDate);
		HeaderLastInspectionView.add(lblLastInspection);

		HeaderLabelView.add(HeaderLicenseTypeView);
		HeaderLabelView.add(HeaderLicenseStatusView);
		HeaderLabelView.add(HeaderLicenceEndDateView);
		HeaderLabelView.add(HeaderLastInspectionView);

		tblLicenseHeaderView.add(HeaderLabelView);

		return tblLicenseHeaderView;
	}

	function buildLicenseTableData(locationId) {
		var LicensetableData = [];
		///loop around and get the info for the licenses

		var licenseRow = Titanium.UI.createTableViewRow({

			height : Ti.UI.SIZE,
			width : 360,

		});

		var licenseView = Ti.UI.createView({
			height : Ti.UI.SIZE,
			width : 360,
			layout : "horizontal",
		});

		var licenseNameView = Ti.UI.createView({
			width : 90,
			height : "30"
		});

		var lbllicenseName = Ti.UI.createLabel({
			font : {
				fontSize : 12
			},
			text : "TEST",
			textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER
		});
		licenseNameView.add(lbllicenseName);

		var licenseStatusView = Ti.UI.createView({
			width : 90,
			height : Ti.UI.SIZE
		});

		var lbllicenseStatus = Ti.UI.createLabel({
			font : {
				fontSize : 12
			},
			text : "ACTIVE",
			textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER
		});
		licenseStatusView.add(lbllicenseStatus);

		var licenseEndDateView = Ti.UI.createView({
			width : 90,
			height : "30"
		});

		var lbllicenseEndDate = Ti.UI.createLabel({
			font : {
				fontSize : 12
			},
			text : '01/01/2000',
			textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER
		});
		licenseEndDateView.add(lbllicenseEndDate);

		var lastInspectionView = Ti.UI.createView({
			width : 90,
			height : "30"
		});

		var lastInspection;

		lastInspection = "NONE";

		var lbllastInspectionDate = Ti.UI.createLabel({
			font : {
				fontSize : 12
			},
			text : lastInspection,
			textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER
		});
		lastInspectionView.add(lbllastInspectionDate);

		licenseView.add(licenseNameView);
		licenseView.add(licenseStatusView);
		licenseView.add(licenseEndDateView);
		licenseView.add(lastInspectionView);

		licenseRow.add(licenseView);

		LicensetableData.push(licenseRow);

		return LicensetableData;

	}

	return win;
}

module.exports = tableViewRefress;
