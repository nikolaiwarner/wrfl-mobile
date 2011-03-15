Ti.include('config.js');

Ti.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK;
Ti.UI.backgroundColor = config.colors.black;


var tab_group = Titanium.UI.createTabGroup();


  
var listen_window = Ti.UI.createWindow({
  url: 'views/listen/view.js',
  barColor: config.colors.black,
  navBarHidden: true
});

var playlist_window = Ti.UI.createWindow({
  url: 'views/playlist/view.js',
  barColor: config.colors.black
});

var settings_window = Ti.UI.createWindow({
  url: 'views/settings/view.js',
  barColor: config.colors.black
});



var listen_tab = Ti.UI.createTab({  
  icon:'images/listen_tab.png',
  title:'Listen',
  window: listen_window
});
tab_group.addTab(listen_tab);

var playlist_tab = Ti.UI.createTab({  
  icon:'images/playlist_tab.png',
  title:'Playlist',
  window: playlist_window
});
tab_group.addTab(playlist_tab);

var settings_tab = Ti.UI.createTab({  
  icon:'images/settings_tab.png',
  title:'Settings',
  window: settings_window
});
tab_group.addTab(settings_tab);  



tab_group.open();