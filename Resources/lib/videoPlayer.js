function video() {
	var vidWin = Titanium.UI.createWindow({
		title : 'Video View Demo',
		backgroundColor : '#fff'
	});

	var videoPlayer = Titanium.Media.createVideoPlayer({
		top : 2,
		autoplay : true,
		backgroundColor : 'blue',
		height : 300,
		width : 300,
		//showsControls :true,
		mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
		scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
	});

	videoPlayer.url = "https://www.youtube.com/watch?v=9NKR01w626U";
	
	vidWin.add(videoPlayer);
	return vidWin;
}

module.exports = video;
