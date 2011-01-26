app.view_listen = {
  
  
  now_playing: new Track(),

  stream_url: "http://wrfl.uky.edu:9000/",
  audio_stream: Titanium.Media.createAudioPlayer(),
  playing: false,
  
  now_playing_data_timer: undefined,
  now_playing_data_client: Titanium.Network.createHTTPClient(),
  
  
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
  	text:'',
  	font: app.defaults.font,
  	textAlign:'center',
  	width: '100%',
  	top: 160,
  	left: 0
  }),
  album_text: Titanium.UI.createLabel({
  	color:'#FFF',
  	text:'',
  	font: app.defaults.font,
  	textAlign:'center',
  	width: '100%',
  	top: 200,
  	left: 0
  }),
  track_text: Titanium.UI.createLabel({
  	color:'#FFF',
  	text:'',
  	font: app.defaults.font,
  	textAlign:'center',
  	width:'100%',
  	top: 235,
  	left: 0
  }),
  
  
  artwork_imageview: Titanium.UI.createImageView({
    top: 10,
    left: 30,
    width: 260,
    height: 260
  }),
  
  
  play_button: Titanium.UI.createButton({
    top: 350,
    left: 10,
    width: 50,
    height: 50
  }),

  
  volume_slider: Titanium.UI.createSlider({
    top: 365,
    left: 80,
    width: 220
  }),
  

  
  
  refresh_now_playing_data: function(){
    var self = this;
    var url = "http://nwarner.com/projects/sandbox/now_playing.json";
    
    this.now_playing_data_client.onload = function(){ self.refresh_now_playing_data_success(); };
    this.now_playing_data_client.onerror = function(){ self.refresh_now_playing_data_error(); };
    this.now_playing_data_client.open("GET", url);
    this.now_playing_data_client.send();
  
    clearInterval(this.now_playing_data_timer);
    this.now_playing_data_timer = setTimeout(function(){ self.refresh_now_playing_data(); }, 20000);
  },
  
  
  refresh_now_playing_data_success: function(){
    var response = JSON.parse(this.now_playing_data_client.responseText);
    
    this.now_playing = response.track;
    this.update_ui();
    
    
/*
    if (lastfm.isLoggedIn && ![previous_song.artist isEqualToString:@""]) {
      //[lastfm updateLastfmNowPlayingWithArtist:previous_song.artist andTrack:previous_song.track andAlbum:previous_song.album];
      [lastfm scrobbleWithArtist:previous_song.artist andTrack:previous_song.track andAlbum:previous_song.album andStartTime:previous_song.time_start];
    } else {
      // Log into lastfm, if desired
      [lastfm login];
    }
*/
    
    
  },
  
  
  
  refresh_now_playing_data_error: function(){
  
  },
  
  
  update_ui: function() {
    this.artist_text.text = this.now_playing.artist;
    this.album_text.text = this.now_playing.album;
    this.track_text.text = this.now_playing.title;
  
    this.artwork_imageview.image = Titanium.Filesystem.getFile("images/album_bg.png");
  },
  
  
  
  play_stream: function(){
    this.playing = true;
    this.audio_stream.setUrl(this.stream_url);
    this.audio_stream.start();
    this.play_button.image = Titanium.Filesystem.getFile("images/stopbutton.png");
  },


  stop_stream: function(){
    this.playing = false;
    this.audio_stream.stop();
    this.play_button.image = Titanium.Filesystem.getFile("images/playbutton.png");
  },
  
  
  toggle_play_stream: function() {
    if (this.playing){
      this.stop_stream();
    } else {
      this.play_stream();
    }
  },
  

  init: function(){
    var self = this;
    
    this.window.hideNavBar();
    this.tab.window = this.window;
    app.tab_group.addTab(this.tab);
    
    this.window.add(this.artist_text);
    this.window.add(this.album_text);
    this.window.add(this.track_text);
    this.window.add(this.artwork_imageview);
    
    this.window.add(this.volume_slider);
    
    this.window.add(this.play_button);
    this.play_button.addEventListener('click',function(){ self.toggle_play_stream(); });

    this.refresh_now_playing_data();
  }
};





