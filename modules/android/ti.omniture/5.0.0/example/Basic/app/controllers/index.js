function Log(text) {
	$.textLog.value = $.textLog.value + '\n' + text;
	Ti.API.info(text);
}

var Omniture = require('ti.omniture'); // Did not change

Log('Default Omniture.debugLogging: ' + Omniture.debugLogging);
Omniture.debugLogging = true; // Did not change
Log('Omniture.debugLogging: ' + Omniture.debugLogging);

var rows = [
	{
		title: 'Omniture SDK version',
		onClick: function(){
			Log('Version: ' + Omniture.version); // Did not change
		}
	},
	{
		title: 'trackState',
		onClick: function(){
			/*
				session.trackAppState() is now Omniture.trackState():

					session.trackAppState({
						appState: 'state1',
						contextData: {
							key: 'value'
						}
					});
			*/
			Omniture.trackState('state1', { key: 'value' });
			Log('sent trackState');
		}
	},
	{
		title: 'trackAction',
		onClick: function(){
			/*
				There is no 'trackEvents' any more...
				
					session.trackEvents({
						eventNames: 'event1, event2',
						contextData: {
							key: 'value'
						}
					});
			*/
			Omniture.trackAction('action1', { key: 'value' });
			Log('sent trackAction');
		}
	},
	/*
		There are no variables, properties, heirs, and lists...
		
			{
				title: "track",
				onClick: function(){
					session.track({
						contextData: {
							key: "value"
						},
						variables: {
							prop1: "P ONE"
						}
					});
					Log("sent track");
				}
			},
			{
				title: "trackLink",
				onClick: function(){
					session.trackLink({
						linkURL: "http://example.com",
						linkType: session.LINK_TYPE_FILE_DOWNLOAD,
						linkName: "example_link",
						contextData: {
							contextKey: "contextValue"
						},
						variables: {
							eVar3: "E THREE"
						}
					});
					Log("sent trackLink");
				}
			},
			{
				title: "set Vars",
				onClick: function(){
					session.eVar1 = "E ONE";
					session.prop1 = "P ONE";
					Log("vars set");
				}
			},
			{
				title: "clearVars",
				onClick: function(){
					session.clearVars();
					Log("vars cleared");
				}
			},
			{
				title: "set Properties",
				onClick: function(){
					session.geoState = "CA";
					session.geoZip = "94043";
					session.persistentContextData = {
						"custom key": "value"
					};
					Log("properties set");
				}
			},
	*/
	{
		title: 'Media Tracker',
		onClick: function(){
			Alloy.createController('mediaTracker').getView().open();
		}
	},
	{
		title: 'Retrieve Tracking ID',
		onClick: function() {
			// This is an async function because it can cause a blocking network call.
			Omniture.retrieveTrackingId(function(trackingId) {
				Log('Tracking ID:' + trackingId);
			});
		}
	},
	{
		title: 'Visitor profile',
		onClick: function() {
			if (Omniture.audienceVisitorProfile) {
				Object.keys(Omniture.audienceVisitorProfile).forEach(
					function(key) {
						Log('audienceVisitorProfile[' + key + ']: ' +
										Omniture.audienceVisitorProfile[key]);
				});
			} else {
				Log('audienceVisitorProfile is null');
			}
		}
	},
	{
		title: 'Tracking Queue Size',
		onClick: function() {
			Log('Tracking queue size: ' + Omniture.trackingQueueSize);
		}
	},
	{
		title: 'Send Queued Hits',
		onClick: function() {
			Omniture.trackingSendQueuedHits();
		}
	},
	{
		title: 'Clear Tracking Queue',
		onClick: function() {
			Omniture.trackingClearQueue();
		}
	},
	{
		title: 'Timed Event',
		onClick: function() {
			Omniture.trackTimedActionStart('timedActionOne', {
				data1: 'value1',
				data2: 'value2'
			});
			setTimeout(function() {
				Log('Timed Action One exists: ' + // Should say 'true'
							Omniture.trackTimedActionExists('timedActionOne'));
				Log('Timed Action Two exists: ' + // Should say 'false'
							Omniture.trackTimedActionExists('timedActionTwo'));
			}, 200);
			setTimeout(function() {
				Omniture.trackTimedActionEnd('timedActionOne', function(e) {
					Log('timedActionOne inAppDuration: ' + e.inAppDuration);
					Log('timedActionOne totalDuration: ' + e.totalDuration);
					if (e.data) {
						Object.keys(e.data).forEach(function(key) {
							Log('timedActionOne data[' + key + ']: ' +
																e.data[key]);
						});
					}
					return true;
				});
				Log('Timed Action One exists: ' + // Should say 'false'
							Omniture.trackTimedActionExists('timedActionOne'));
			
			}, 1000);

		}
	}
];

/*
	There is no 'session' any more. Related configuration is done via
	the ADBMobileConfig.json file. Download a pre-configured config file
	from the Adobe Mobile Services web site.  
	
		var session = Omniture.startSession({
			reportSuiteIDs: "my_rsid",
			trackingServer: "<< YOUR TRACKING SERVER ADDRESS HERE >>",
			ssl: false
		});
*/

function onRowClick(e) {  
	rows[e.index].onClick && rows[e.index].onClick();
}

$.tableView.data = rows;
$.win.open();

