app.view_listen = {

  stream_url: "http://wrfl.uky.edu:9000/",
  audio_stream: Titanium.Media.createAudioPlayer(),

  window: Titanium.UI.createWindow({  
    title:'Listen',
    backgroundColor:'#000'
  }),
  tab: Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Listen'
  }),
  
  artist_text: Titanium.UI.createLabel({
  	color:'#FFF',
  	text:'Nikolai and the Private Particles',
  	font: app.defaults.font,
  	textAlign:'center',
  	width:'auto',
  	top: 50,
  	left: 0
  }),
  album_text: Titanium.UI.createLabel({
  	color:'#FFF',
  	text:'Torsos',
  	font: app.defaults.font,
  	textAlign:'center',
  	width:'auto',
  	top: 75,
  	left: 0
  }),
  track_text: Titanium.UI.createLabel({
  	color:'#FFF',
  	text:'Vacationiers March',
  	font: app.defaults.font,
  	textAlign:'center',
  	width:'auto',
  	top: 100,
  	left: 0
  }),

  

  init: function(){
    this.tab.window = this.window;
    app.tab_group.addTab(this.tab);
    
    this.window.add(this.artist_text);
    this.window.add(this.album_text);
    this.window.add(this.track_text);
    
    this.audio_stream.setUrl(this.stream_url);
    this.audio_stream.start();

  }
};





