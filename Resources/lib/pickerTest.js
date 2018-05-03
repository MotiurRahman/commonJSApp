function pickerTest() {

	var win = Ti.UI.createWindow({
  layout: 'vertical'
});
 
var picker = Ti.UI.createPicker({
  top:20
});
 
var fruit = [];

for (var i = 0; i < 5; i++) {
	fruit.push(Ti.UI.createPickerRow({title:'Bananas:'+i}));
}

picker.add(fruit);
win.add(picker);
 
var btn = Ti.UI.createButton({
    title: "Add _row",
    top:50
});

btn.addEventListener('click', function() {

	fruit.length=0;
	fruit.push(Ti.UI.createPickerRow({title:'Bananas'})); 
    picker.add(fruit);
});
win.add(btn);
	return win;

}

module.exports = pickerTest;
