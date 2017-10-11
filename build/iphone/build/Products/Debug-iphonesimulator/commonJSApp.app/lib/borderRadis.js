function border(){

	var win = Ti.UI.createWindow({

title : 'Test Window',

backgroundColor : 'white',

});



var view = Ti.UI.createView({

borderRadius : 20,

backgroundColor : 'red',

width : 50,

height : 50

});

win.add(view);

return win;

}
module.exports = border;