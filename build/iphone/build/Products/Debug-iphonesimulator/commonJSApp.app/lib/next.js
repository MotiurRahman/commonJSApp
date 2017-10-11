function view() {

    var win = Ti.UI.createWindow({

        title: "Test",

        backgroundColor: '#fff'

    });


    var aButton = Ti.UI.createButton({
        title: 'Test Connection',
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,

    });

    // Listen for click events.
    aButton.addEventListener('click', function() {

     Titanium.Analytics.featureEvent('You click on a button');
        if (Titanium.Network.networkType === Titanium.Network.NETWORK_NONE) {

            Titanium.API.info('no connection');

            alert('no connection');


        } else {

            Titanium.API.info('connection present');

            alert(' connection present');

        }


    });

    // Add to the parent view.
    win.add(aButton);




    return win;
};

module.exports = view;
