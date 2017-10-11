# wifimanager Module

## Description

OrderFAST WiFi Android module for Appcelerator
This module can be used to access the WiFi state in andorid, turn on WiFi, turn off,
get WiFi lock, get available SSIDs, connect to an SSID and more.

## Accessing the wifimanager Module

To access this module from JavaScript, you would do the following:

	var wifimanager = require("eu.orderfast.wifimanager");

The wifimanager variable is a reference to the Module object.	

## Reference

Available functions :

WifimanagerModule()

boolean isWifiEnabled ()
	returns true if WiFi enabled on device, otherwise false.

boolean setWifiEnabled (boolean enabled)
	Attempts to turn on WiFi. Returns true on success otherwise false.

boolean getWiFiLock()
	Attempts to get a WiFi lock. Returns true on success otherwise false.

boolean releaseWiFiLock()
	Relesase a WiFi lock. Returns true on success otherwise false.

boolean ConnectToSSID(String SSID)
	Connect to an SSID (already setup in the device). The SSID is specified by its 	name in the  String SSID. Returns true on success otherwise false.

int GetSSIDCount()
	Returns the count of SSIDs already setup in the device.

String GetSSID(int pos)
	Returns the name of the SSID in the list of configured SSIDs at position pos (0, 	1, etc).

int GetScanSSIDCount()
	Returns the count of SSIDs detected during scanning WiFis

String GetCurrentSSID()
	Returns the name of the SSID in the list of scanned SSIDs at position pos (0, 	1, etc).

### ___PROJECTNAMEASIDENTIFIER__.function

var wifimanager = require('eu.orderfast.wifimanager');
	// turn on wifi
	if(Wifimanager.isWifiEnabled() == false)
	{		
		Wifimanager.setWifiEnabled(true);
	}	
	// Don't let wifi to turn off	
	Wifimanager.getWiFiLock();

## Usage

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
				// Check if the given SSID is in the last wifi scan results
				var ScanSSIDCount = Wifimanager.GetScanSSIDCount();
				var n;
				var ssid_found_in_scan = false;		
				for(n=0; n<ScanSSIDCount; n++)
				{
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


## Author

Antonis Kladogenis
kladogen@gmail.com 

## License

Individual. A license for each seat must be purchased to use this module.
