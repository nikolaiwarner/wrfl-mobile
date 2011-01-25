app.view_listen = {

  stream_url: "http://wrfl.uky.edu:9000/",
  audio_stream: Titanium.Media.createAudioPlayer(),
  playing: false,
  now_playing_data_timer: undefined,
  
  now_playing: new Song(),

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
  	width:'auto',
  	top: 50,
  	left: 0
  }),
  album_text: Titanium.UI.createLabel({
  	color:'#FFF',
  	text:'',
  	font: app.defaults.font,
  	textAlign:'center',
  	width:'auto',
  	top: 75,
  	left: 0
  }),
  track_text: Titanium.UI.createLabel({
  	color:'#FFF',
  	text:'',
  	font: app.defaults.font,
  	textAlign:'center',
  	width:'auto',
  	top: 100,
  	left: 0
  }),
  
  
  artwork_imageview: Titanium.UI.createImageView({
    image: Titanium.Filesystem.getFile("images/album_bg.png")
  }),
  
  
  play_button: Titanium.UI.createButton({
    image: Titanium.Filesystem.getFile("images/playbutton.png"),
    width: 100,
    height: 100
  }),
  
  
  refresh_now_playing_data: function(){
    var self = this;
    
    // Fetch data
  //  NSURL *url = [NSURL URLWithString:@"http://wrfl.fm/index.cgi?m=nowplayajax"];

  
    clearInterval(this.now_playing_data_timer);
    this.now_playing_data_timer = setTimeout(self.refresh_now_playing_data, 20000);
  },
  
  
  refresh_now_playing_data_success: function(data){
    
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
  
  
  play_stream: function(){
    this.playing = true;
    this.audio_stream.setUrl(this.stream_url);
    this.audio_stream.start();
  },


  stop_stream: function(){
    this.playing = false;
    this.audio_stream.stop();
  },
  

  init: function(){
    var self = this;
    this.tab.window = this.window;
    app.tab_group.addTab(this.tab);
    
    this.window.add(this.artist_text);
    this.window.add(this.album_text);
    this.window.add(this.track_text);
    
    this.window.add(this.play_button);
    this.play_button.addEventListener('click',function(){
      (self.playing) ? self.stop_stream() : self.play_stream();
    });

    this.refresh_now_playing_data();
  }
};





