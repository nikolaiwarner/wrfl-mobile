// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');



var defaults = {
  font: {
    fontSize:20, 
    fontFamily:'Helvetica Neue'
  }
};




 
// create tab group
var tabGroup = Titanium.UI.createTabGroup();



//
// create base UI tab and root window
//
var listen_window = Titanium.UI.createWindow({  
    title:'Listen',
    backgroundColor:'#000'
});
var listen_tab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Listen',
    window:listen_window
});

var now_playing_ui = {};

now_playing_ui.artist = Titanium.UI.createLabel({
	color:'#FFF',
	text:'Nikolai and the Private Particles',
	font: defaults.font,
	textAlign:'center',
	width:'auto',
	top: 50,
	left: 0
});

now_playing_ui.album = Titanium.UI.createLabel({
	color:'#FFF',
	text:'Torsos',
	font: defaults.font,
	textAlign:'center',
	width:'auto',
	top: 75,
	left: 0
});

now_playing_ui.track = Titanium.UI.createLabel({
	color:'#FFF',
	text:'Vacationiers March',
	font: defaults.font,
	textAlign:'center',
	width:'auto',
	top: 100,
	left: 0
});

listen_window.add(now_playing_ui.artist);
listen_window.add(now_playing_ui.album);
listen_window.add(now_playing_ui.track);








//
// create controls tab and root window
//
var playlist_window = Titanium.UI.createWindow({  
    title:'Playlist',
    backgroundColor:'#000'
});
var playlist_tab = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Playlist',
    window:playlist_window
});




Titanium.include('listen/listen.js', 'playlist/playlist.js');





//
//  add tabs
//
tabGroup.addTab(listen_tab);  
tabGroup.addTab(playlist_tab);  


// open tab group
tabGroup.open();
