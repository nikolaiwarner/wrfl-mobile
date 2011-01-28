var app = {

  defaults: {
    font: {
      fontSize:20, 
      fontFamily:'Helvetica Neue'
    }
  },
  
  
  online: Titanium.Network.online,
  
  tab_group: Titanium.UI.createTabGroup(),
  
  init: function(){
    this.view_listen.init();
    this.view_playlist.init();
    this.view_settings.init();
    this.tab_group.open();
  }
};


Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK;
Titanium.UI.setBackgroundColor('#000');
Titanium.include('lastfm.js', 'track.js', 'view_listen.js', 'view_playlist.js', 'view_settings.js');
app.init();





