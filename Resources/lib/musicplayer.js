function view() {

	var player = Ti.Media.appMusicPlayer;

	var win = Ti.UI.createWindow({
		backgroundColor : '#fff',
		layout : 'vertical'
	});

	var Trigger = Ti.UI.createButton({
		title : 'Trigger',
		top : 100
	});

	var Play = Ti.UI.createButton({
		title : 'play',
		top : 100
	});

	var next = Ti.UI.createButton({
		title : 'Next',
		top : 100
	});

	win.add(Trigger);
	win.add(Play);
	win.add(next);

	Trigger.addEventListener('click', function() {
		if (Ti.Media.hasMusicLibraryPermissions()) {
			openMusicLibrary();
		} else {
			Ti.Media.requestMusicLibraryPermissions(function(e) {
				if (!e.success) {
					alert("No permissions!");
					return;
				}
				openMusicLibrary();
			});
		}
	});

	function openMusicLibrary() {
		Ti.Media.openMusicLibrary({
			allowMultipleSelections : true,
			mediaTypes : Titanium.Media.MUSIC_MEDIA_TYPE_MUSIC | Titanium.Media.MUSIC_MEDIA_TYPE_ANY_AUDIO,
			success : function(event) {

				player.setQueue(event);

			},
			cancel : function() {
				alert("Aborting ");
			},
			error : function(error) {
				// called when there's an error
				var a = Titanium.UI.createAlertDialog({
					title : 'Music Library'
				});
				if (error.code == Titanium.Media.NO_MUSIC_PLAYER) {
					a.setMessage('Please run this test on device.');
				} else {
					a.setMessage('Unexpected error: ' + error.code);
				}
				a.show();
			}
		});
	}


	Play.addEventListener('click', function() {
		player.play();

	});

	next.addEventListener('click', function() {
		player.skipToNext();
	});

	player.addEventListener("statechange", function() {
		Ti.API.info(player.playbackState);

		if (Titanium.Media.MUSIC_PLAYER_STATE_STOPPED) {
			player.skipToNext();
		}

	});

	return win;
};

module.exports = view;
