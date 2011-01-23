var app = {

  defaults: {
    font: {
      fontSize:20, 
      fontFamily:'Helvetica Neue'
    }
  },
  
  tab_group: Titanium.UI.createTabGroup(),
  
  init: function(){
    this.view_listen.init();
    this.view_playlist.init();
    this.view_settings.init();
    this.tab_group.open();
  }
};



Titanium.UI.setBackgroundColor('#000');
Titanium.include('view_listen.js', 'view_playlist.js', 'view_settings.js');
app.init();




