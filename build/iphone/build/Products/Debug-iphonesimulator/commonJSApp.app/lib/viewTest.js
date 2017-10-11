function view() {

    var win = Ti.UI.createWindow({

        title: 'Test Window',

        backgroundColor: 'white',

    });



    var view = Ti.UI.createView({

        backgroundColor: 'red',
        //right: 10,
        //layout: "horizontal",

        width: Ti.UI.FILL,

        height: 50

    });

    var label1 = Ti.UI.createLabel({
        color: 'blue',
        text: 'A long hii ',
        //textAlign: Titanium.UI.TEXT_ALIGNMENT_RIGHT,
        right: 10,

    });


    var label2 = Ti.UI.createLabel({
        color: 'blue',
        text: 'label',
        // textAlign: Titanium.UI.TEXT_ALIGNMENT_RIGHT,
        //right: 10,

    });


    var label3 = Ti.UI.createLabel({
        color: 'blue',
        text: ' few line',
        // textAlign: Titanium.UI.TEXT_ALIGNMENT_RIGHT,
        //right: 10,

    });

    var width1;
    var width2;
    var width3;

    label1.addEventListener("postlayout",function(){
    	 width1 = label1.size;

    });

    label2.addEventListener("postlayout",function(){
    	 width2 = label2.size;

    	label2.right = width1;

    });

    label3.addEventListener("postlayout",function(){
    	 width3 = label3.size;
    	label3.right = width2+width1;

    });


    win.add(view);
    view.add(label1);
    view.add(label2);
    view.add(label3);

    return win;
};
module.exports = view;
