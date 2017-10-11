function listView() {

	var win = Ti.UI.createWindow({
		backgroundColor : 'white'
	});

	var view_list = Titanium.UI.createView({

		height : Ti.UI.SIZE

	});

	var view_bottom = Titanium.UI.createView({

		height : 70,
		bottom : 0,
		backgroundColor : "red"

	});

	// Create a Button.
	var check = Ti.UI.createButton({
		title : 'check',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,

	});

	// Listen for click events.
	check.addEventListener('click', function() {
		alert('\'check\' was clicked!');
	});

	// Add to the parent view.
	view_bottom.add(check);

	var data = [{
		properties : {
			title : 'Row 1'
		}
	}, {
		properties : {
			title : 'Row 2'
		}
	}, {
		properties : {
			title : 'Row 3'
		}
	}];

	// Add the list data items to a section
	var listSection = Titanium.UI.createListSection({
		items : data
	});

	// Add the list section to a list view
	var listView = Titanium.UI.createListView({
		sections : [listSection]
	});

	view_list.add(listView);
	win.add(view_list);
	win.add(view_bottom);
	return win;

}

module.exports = listView;
