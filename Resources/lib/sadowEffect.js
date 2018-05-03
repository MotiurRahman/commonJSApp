function test() {


    var win = Ti.UI.createWindow({
        backgroundColor: '#EAEAEA',
        layout: 'vertical'
    });
    var secondWinLbl = Ti.UI.createLabel({
        top: 30,
        text: 'change the second view',
        color: 'black'
    });
    win.add(secondWinLbl);

    function getView() {
        //Create a container view
        var container = Ti.UI.createView({
            layout: 'vertical',
            width: '95%',
            height: 50, //Ti.UI.SIZE,
            top: 10,
            borderRadius: 5,
            backgroundColor: 'white',
            viewShadowRadius: 3,
            viewShadowColor: '#8AA0AE',
            viewShadowOffset: {
                x: 0,
                y: 4
            },
            elevation: 10
        });
        container.add(Ti.UI.createLabel({
            text: "Here is some content",
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            color: "#000"
        }));
        container.add(Ti.UI.createView({
            height: 1,
            borderWidth: 1,
            top: 5,
            borderColor: 'red',
            id: 'titleline'
        }));
        container.addEventListener('postlayout', function(e) {
            Ti.API.info('in post layout');
            e.source.applyProperties({
                elevation: 10
            });
        });
        return container;
    }

    var scrollView = Ti.UI.createScrollView({
        top: 20,
        layout: 'vertical',
        height: Ti.UI.FILL,
        width: Ti.UI.FILL
    });
    scrollView.add(getView());
    var v2 = getView();
    scrollView.add(v2);
    scrollView.add(getView());
    win.add(scrollView);
    secondWinLbl.addEventListener('click', function() {
        v2.height = Ti.UI.SIZE;
        v2.add(Ti.UI.createView({
            height: 50,
            top: 5,
            width: '100%'
        }));
    });

    return win;

}

module.exports = test;