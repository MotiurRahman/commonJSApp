function upload() {

    var win = Ti.UI.createWindow(),
        btn = Ti.UI.createButton({
            title: 'OPEN GALLERY',
        });

    btn.addEventListener('click', function() {
        Ti.Media.openPhotoGallery({
            mediaTypes: [Titanium.Media.MEDIA_TYPE_PHOTO],
            success: function(e) {
                alert('media.width: ' + e.media.width +
                    '\nmedia.height: ' + e.media.height +
                    '\nmedia.length: ' + e.media.length +
                    '\nmedia.mimeType: ' + e.media.mimeType +
                    '\nmedia.nativePath: ' + e.media.nativePath);
            },
            error: function(e) {
                alert('error opening image: ' + e);
            }
        });
    });

    win.add(btn);
  

    return win;
}
module.exports = upload;