function listView() {

	var win = Ti.UI.createWindow({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		backgroundColor : 'black'
	});
	var listWithNetworkTemplate = {
		childTemplates : [{// AddressView
			type : 'Ti.UI.View',
			bindId : 'addressView',
			properties : {
				layout : 'vertical',
				left : 8,
				width : '84%',
				touchEnabled : false,
				height : Ti.UI.SIZE,
				top : 10
			},
			childTemplates : [{// Title
				type : 'Ti.UI.Label',
				bindId : 'title',
				properties : {
					color : 'black',
					touchEnabled : false,
					left : 5
				}
			}, {// netWorkView
				type : 'Ti.UI.View',
				bindId : 'netWorkView',
				properties : {
					width : Ti.UI.SIZE,
					height : Ti.UI.SIZE,
					left : 5,
					bottom : 2,
					top : 2,
					borderWidth : 1,
					borderColor : '#00AFD8',
					touchEnabled : false
				},
				childTemplates : [{
					// Image NetWork
					type : 'Ti.UI.Label',
					bindId : 'networkImage',
					properties : {
						color : '#00AFD8',
						touchEnabled : false,
						width : Ti.UI.SIZE,
						height : Ti.UI.SIZE,
						top : 2,
						bottom : 2,
						left : 6,
						right : 6
					}
				}]
			}, {// subTitle
				type : 'Ti.UI.Label',
				bindId : 'subTitle',
				properties : {
					touchEnabled : false,
					color : 'blue',
					left : 5,
					bottom : 10
				}
			}]
		}]
	};
	var listTemplates = {
		'listWithNetworkTemplate' : listWithNetworkTemplate,
	};
	function createListViewItems(data) {
		var listItems = [];
		for (var i = 0,
		    j = 15; i < j; i++) {
			listItems.push({
				template : 'listWithNetworkTemplate',
				title : {
					text : "title"
				},
				subTitle : {
					text : "distance",
				},
				viewProfile : {
					text : "VIEW_PROFILE" + '\n'
				},
				networkImage : {
					text : "NETWORK PROVIDER"
				},
				properties : {
					height : Ti.UI.SIZE,
					backgroundColor : 'white'
				}
			});
		}
		return listItems;
	}

	var tableItems = createListViewItems();
	var tableSection = Ti.UI.createListSection({
		items : tableItems
	});
	var table = Ti.UI.createListView({
		templates : listTemplates,
		footerDividersEnabled : true,
		separatorColor : 'blue',
		defaultItemTemplate : 'listWithNetworkTemplate',
		sections : [tableSection]
	});
	win.add(table);
	return win;

}

module.exports = listView;
