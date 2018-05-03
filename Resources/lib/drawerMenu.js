function drawerMenu() {

	var win = Ti.UI.createWindow();


var leftView = Ti.UI.createView({ backgroundColor:'red' });
var centerView = Ti.UI.createView({ backgroundColor:'yellow' });
var rightView = Ti.UI.createView({ backgroundColor:'orange' });

var drawer = Ti.UI.Android.createDrawerLayout({
    leftView: leftView,
    centerView: centerView,
    rightView: rightView
});
var btn = Ti.UI.createButton({ title: 'RIGHT' });

btn.addEventListener('click', function() {
    drawer.toggleRight();
});

centerView.add(btn);

win.addEventListener('open', function(){
		win.activity.actionBar.hide();
    var activity = win.getActivity(),
        actionBar = activity.getActionBar();

    if (actionBar) {
        actionBar.displayHomeAsUp = true;
        actionBar.onHomeIconItemSelected = function() {
            drawer.toggleLeft();
        };
    }
});

win.add(drawer);
return win;
}

module.exports = drawerMenu;
