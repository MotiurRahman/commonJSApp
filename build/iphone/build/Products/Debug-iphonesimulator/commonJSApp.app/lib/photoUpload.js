function upload() {

    var win = Ti.UI.createWindow({
        backgroundColor: 'Green',
        layout: "vertical"

    });


    // Create a Button.
    var Gallery = Ti.UI.createButton({
        title: 'Opne Gallery',
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: 50,

    });

    win.add(Gallery);

    var ind = Titanium.UI.createProgressBar({
        width: 200,
        height: 50,
        min: 0,
        max: 1,
        value: 0,
        // style: Titanium.UI.ios.ProgressBarStyle.PLAIN,
        top: 20,
        message: 'Uploading image',
        font: { fontSize: 12, fontWeight: 'bold' },
        color: '#888'
    });

    win.add(ind);


    Gallery.addEventListener('click', function(e) {

        Titanium.Media.openPhotoGallery({
            success: function(event) {
                //upload(event);
                ind.show();
                var xhr = Titanium.Network.createHTTPClient();
                xhr.onload = function(e) {
                    Ti.UI.createAlertDialog({
                        title: 'Success',
                        message: 'status code ' + this.status
                    }).show();
                };

                xhr.onerror = function(e) {
                    Ti.API.info('post,E.ERROR:' + e.error);
                    alert('post,E.ERROR:' + e.error);
                };
                xhr.onsendstream = function(e) {
                    ind.value = e.progress;
                    Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress);

                };

                xhr.open("POST", "https://mobile.cycu.edu.tw/api/sos/panic/");
                //xhr.setRequestHeader('Content-Type','multipart/form-data');

                xhr.send({
                    "app_id": '3',
                    "app_token": 'BEDF0C6702',
                    "access_id": '181',
                    "access_token": '181',
                    "coord": '',
                    "file": event.media
                });


            },
            cancel: function() {
                // called when user cancels taking a picture
                // alert("cancel");
            },
            error: function(error) {
                // called when there's an error
                alert("error: " + error);
            },
            saveToPhotoGallery: false,
            animated: true,
            //overlay: true,
            // allowEditing and mediaTypes are iOS-only settings
            // allowEditing : false,
            mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO] // Ti.Media.MEDIA_TYPE_VIDEO,
        });

    });


    return win;
}
module.exports = upload;
