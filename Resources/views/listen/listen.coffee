



var now_playing = new Track();

var audio_stream = Titanium.Media.createAudioPlayer();
var playing = false;
  
var now_playing_data_timer = undefined;
var now_playing_data_client = Titanium.Network.createHTTPClient();
  
  
var artist_text = Titanium.UI.createLabel({
	color:'#FFF',
	text:'',
	font: config.fonts.normal,
	textAlign:'center',
	width: '100%',
	top: 160,
	left: 0
});
var album_text = Titanium.UI.createLabel({
	color:'#FFF',
	text:'',
	font: config.fonts.normal,
	textAlign:'center',
	width: '100%',
	top: 200,
	left: 0
});
var track_text = Titanium.UI.createLabel({
	color:'#FFF',
	text:'',
	font: config.fonts.normal,
	textAlign:'center',
	width:'100%',
	top: 235,
	left: 0
});


var artwork_imageview = Titanium.UI.createImageView({
  top: 10,
  left: 30,
  width: 260,
  height: 260
});


var play_button = Titanium.UI.createImageView({
  top: 350,
  left: 10,
  width: 50,
  height: 50,
  image: Titanium.Filesystem.getFile("images/playbutton.png")
});






var refresh_now_playing_data = function(){
  var self = this;
  
  now_playing_data_client.onload = refresh_now_playing_data_success;
  now_playing_data_client.onerror = refresh_now_playing_data_error;
  now_playing_data_client.open("GET", config.urls.now_playing);
  now_playing_data_client.send();

  clearInterval(now_playing_data_timer);
  now_playing_data_timer = setTimeout(function(){ refresh_now_playing_data(); }, 20000);
};


var refresh_now_playing_data_success = function(){
  var response = JSON.parse(now_playing_data_client.responseText);
  
  now_playing.artist = response[0].fields.artist;
  now_playing.album = response[0].fields.album;
  now_playing.title = response[0].fields.track;
  
  update_ui();
  
  
/*
  if (lastfm.isLoggedIn && ![previous_song.artist isEqualToString:@""]) {
    //[lastfm updateLastfmNowPlayingWithArtist:previous_song.artist andTrack:previous_song.track andAlbum:previous_song.album];
    [lastfm scrobbleWithArtist:previous_song.artist andTrack:previous_song.track andAlbum:previous_song.album andStartTime:previous_song.time_start];
  } else {
    // Log into lastfm, if desired
    [lastfm login];
  }
*/
  
  
};
  
  
  
var refresh_now_playing_data_error = function(){
  
};
  
  
var update_ui = function() {
  artist_text.text = now_playing.artist;
  album_text.text = now_playing.album;
  track_text.text = now_playing.title;

  artwork_imageview.image = Titanium.Filesystem.getFile("images/album_bg.png");
};



var play_stream = function(){
  playing = true;
  audio_stream.setUrl(config.urls.audio_stream);
  audio_stream.start();
  play_button.image = Titanium.Filesystem.getFile("images/stopbutton.png");
};


var stop_stream = function(){
  playing = false;
  audio_stream.stop();
  play_button.image = Titanium.Filesystem.getFile("images/playbutton.png");
};


var toggle_play_stream = function() {
  if (playing){
    stop_stream();
  } else {
    play_stream();
  }
};
  
  

window.add(artist_text);
window.add(album_text);
window.add(track_text);
window.add(artwork_imageview);

window.add(play_button);
play_button.addEventListener('click', function(){ toggle_play_stream(); });

refresh_now_playing_data();
