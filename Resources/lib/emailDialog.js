function emailSend() {

    var win = Ti.UI.createWindow({
        backgroundColor: 'green',
        layout: "vertical"
    });




    var webview = Titanium.UI.createWebView({
        url: 'http://www.appcelerator.com',
        width: Ti.UI.FILL,
        height: 400
    });

    win.add(webview);

    // Create a Button.
    var email = Ti.UI.createButton({
        title: 'Opne',
        height: 100,
        width: 100,
        //backgroundImage : "motiur.jpg",
        top: 30
    });

    // var CloudPush = require("ti.cloudpush");
    // // Process incoming push notifications
    // CloudPush.addEventListener('callback', function(evt) {
    //     alert("Notification received: " + evt.payload);
    // });

    // var CloudPush = require('ti.cloudpush');

    // // Process incoming push notifications
    //     CloudPush.addEventListener('callback', function(e) {
    //      alert("Notification received: " + e.payload);
            
    //     });

    email.addEventListener('click', function(e) {

        // var blobObjectOfWebView = webview.toImage();


        // var emailDialog = Ti.UI.createEmailDialog({html : true});
        // emailDialog.subject = "Test email with attachment";
        // emailDialog.toRecipients = ["motiur.mbstu@gmail.com"];

        // emailDialog.messageBody = '<b>Blob file as an attachment</b>';

        // //var img = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,blobObjectOfWebView);
        // //var img = Ti.Filesystem.getFile(blobObjectOfWebView);

        // emailDialog.addAttachment(blobObjectOfWebView);

        // emailDialog.open();



    });

    win.add(email);

    return win;

}

module.exports = emailSend;