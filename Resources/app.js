Ti.include('config.js');

Ti.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK;
Ti.UI.backgroundColor = config.colors.black;


var tab_group = Titanium.UI.createTabGroup();

  


tab_group.open();