function btnSignIn_onClick(e) {
	var isValid = validate();
	if (isValid.blnValid) {
		if (Titanium.Network.online == true) {
			loadingPopup.show();
			//alert('Welcome'); g.webservice.url +
			var url = g.webservice.url + "/AuthenticationApi/Authenticate";
			//var url = "http://ecom.ezyro.com/phpinfo.php";
			//alert('hellllooo');
			var client = Titanium.Network.createHTTPClient({
				onload : function(e) {
					var data = JSON.parse(this.responseText);

					if (data.IsSuccess == true) {

						g.user = {
							MemberID : data.Data.MemberID,
							SelectedLanguage : Ti.Locale.currentLanguage,
							DisplayName : data.Data.DisplayName,
							Username : data.Data.Username,
							Fullname : data.Data.Fullname,
							UserType : data.Data.UserType,
							Ranking : data.Data.Ranking,
							AdvanceRanking : data.Data.AdvanceRanking,
							IC : data.Data.IC,
							Email : data.Data.Email,
							CountryMobileCode : data.Data.CountryMobileCode,
							Mobile : data.Data.Mobile,
							DOB : data.Data.DOB,
							Gender : data.Data.Gender,
							Nationality : data.Data.Nationality,
							HomeTel : data.Data.HomeTel,
							OfficeTel : data.Data.OfficeTel,
							Fax : data.Data.Fax,
							Address : data.Data.Address,
							District : data.Data.District,
							City : data.Data.City,
							State : data.Data.State,
							Postcode : data.Data.Postcode,
							Country : data.Data.Country,
							Status : data.Data.Status,
							ActivationDate : data.Data.ActivationDate,
							SuspendEWallet : data.Data.SuspendEWallet,
							MemberType : data.Data.MemberType,
							GEM_Standard : data.Data.GEM_Standard,
							GEM_Premium : data.Data.GEM_Premium,
							GEMPointRate : data.Data.GEMPointRate,
							isMerchant : data.Data.isMerchant,
							objMerchantData : data.Data.objMerchantData,
							CategorySpending : data.Data.CategorySpending,
							TransactionProcessingFeePercentage : data.Data.TransactionProcessingFeePercentage,
							IsCameraReceipt : data.Data.IsCameraReceipt
						};

						Ti.App.Properties.setBool("isLogin", true);
						Ti.App.Properties.setObject("gUser", g.user);

						var windowToOpen = null;

						if (g.user.MemberType == "B") {
							windowToOpen = Alloy.createController("dashboard", {}).getView();
						} else if (g.user.MemberType == "M") {
							windowToOpen = Alloy.createController("dashboardM", {}).getView();
						}

						windowToOpen.open();

						$.login.close();
					} else {

						var windowToOpen = Alloy.createController("controls/popUp", {
							type : 'alert',
							actionTitle : L("global.ok"),
							message : data.Message
						}).getView();
						windowToOpen.open();
					}

					loadingPopup.close();
				},
				onerror : function(e) {
					Ti.API.debug(e.error);

					var windowToOpen = Alloy.createController("controls/popUp", {
						type : 'alert',
						actionTitle : L("global.ok"),
						message : e.error
					}).getView();
					windowToOpen.open();

					loadingPopup.close();
				},
				timeout : 7000
			});

			client.open("POST", url, false);

			client.setRequestHeader('Cache-Control', 'no-cache');
			client.setRequestHeader('Cache-Control', 'no-store');

			var args = {
				Password : $.txtPassword.value,
				Username : $.txtUserName.value,
				Language : Ti.Locale.currentLanguage
			};

			client.send(args);
		} else {

			alert(L("global.currentlyOffline"));
		}
	} else {
		var windowToOpen = Alloy.createController("controls/popUp", {
			type : 'alert',
			actionTitle : L("global.ok"),
			message : isValid.strMsg
		}).getView();
		windowToOpen.open();
	}
}

module.exports = btnSignIn_onClick; 