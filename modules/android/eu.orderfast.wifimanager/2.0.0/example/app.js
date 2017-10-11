// For an application to be able to use the module the following android 
// security permissions are required in android manifest in tiapp.xml
//			<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
//          <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
//          <uses-permission android:name="android.permission.WAKE_LOCK"/>
//          <uses-permission android:name="android.permission.CHANGE_WIFI_STATE"/>

// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

var wifimanager = require('eu.orderfast.wifimanager');
Ti.API.info("module is => " + wifimanager);

if (Ti.Platform.name == "android") 
{	
	// Connect to a specified SSID and dont let the WiFi turn off.
	var SSID = 'my_test_SSID';
	ConnectToSSID(SSID);
	
	win.addEventListener('close', function(e)
  	{  
  		// Remove lock on WiFi since our program is terminating		
   		Wifimanager.releaseWiFiLock();		
  	});
}

function ConnectToSSID(SSID)
{
	var wifimanager = require('eu.orderfast.wifimanager');
	// turn on wifi
	if(Wifimanager.isWifiEnabled() == false)
	{		
		Wifimanager.setWifiEnabled(true);
	}	
	// Don't let wifi to turn off	
	Wifimanager.getWiFiLock();
		  	
	// Get WiFi MAC Address
	var MACAddress = Wifimanager.GetMACAddress();	
	var dlgMAC = Titanium.UI.createAlertDialog({        	
	        			'title' : 'WiFi Adapter MAC Address',
        				'message' : 'The WiFi adapter MAC Address is '+MACAddress,
        				'buttonNames' : [ 'OK' ]
    				});
    				dlgMAC.show();  	
	
  	// The name of the SSID to connect to  	
  	if(SSID != null && SSID != '')
	{	
		// Check if already connected to specified ssid
		var ssid_str = '';
		ssid_str = Wifimanager.GetCurrentSSID();
		if(SSID != ssid_str)
		{
			try
			{
				// You can use GetSSIDCount() to get the number of SSIDs that are stored in the device instead of scanning for SSIDs
				// Check if the given SSID is in the last wifi scan results
				var ScanSSIDCount = Wifimanager.GetScanSSIDCount();
				var n;
				var ssid_found_in_scan = false;		
				for(n=0; n<ScanSSIDCount; n++)
				{
					// You can use GetSSID() to get the SSID names that are stored in the device instead of scanning for SSIDs
					var ssid_str = Wifimanager.GetScanSSID(n);					
					if(ssid_str==SSID)
					{	
						ssid_found_in_scan = true;
					}			
				}
				if(ssid_found_in_scan == false)
				{
					// SSID not in scan results. Out of range?
					var dlg = Titanium.UI.createAlertDialog({        	
	        			'title' : 'Failed to connect to specified SSID.',
        				'message' : 'The WiFi '+SSID+' cannot be found.',
        				'buttonNames' : [ 'OK' ]
    				});
    				dlg.show();
    				//dlg.addEventListener('click', function(){});    	
    				return false;
				}
			}
			catch(e)
			{
				// exception may happen if not connected.				
				return false;
			}
		
			if(Wifimanager.ConnectToSSID(SSID) == false)
			{
				var dlg = Titanium.UI.createAlertDialog({        	
        			'title' : 'Failed to connect to the specified SSID.',
        			'message' : 'Failed to connect to WiFi '+SSID+'.',
        			'buttonNames' : [ 'OK' ]
    			});
    			dlg.show();
    			//dlg.addEventListener('click', function(){});    	
    			return false;
			}			
		}		
	}
}
