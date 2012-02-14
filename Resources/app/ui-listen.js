
app.ui.createListenWindow = function(options) {
  var album_text, artist_text, artwork_imageview, audio_stream, now_playing_data_client, now_playing_data_timer, now_playing_track, play_button, play_stream, playing, refresh_now_playing_data, refresh_now_playing_data_error, refresh_now_playing_data_success, stop_stream, toggle_play_stream, track_text, update_ui, window;
  options = options || {};
  options.title = options.title || "Listen";
  options.navBarHidden = true;
  window = new Window(options);
  audio_stream = Titanium.Media.createAudioPlayer();
  now_playing_track = new Track();
  playing = false;
  now_playing_data_timer = void 0;
  now_playing_data_client = Titanium.Network.createHTTPClient();
  artist_text = Titanium.UI.createLabel({
    className: "track_label"
  });
  album_text = Titanium.UI.createLabel({
    className: "track_label"
  });
  track_text = Titanium.UI.createLabel({
    className: "track_label"
  });
  artwork_imageview = Titanium.UI.createImageView({
    top: 10,
    left: 30,
    width: 260,
    height: 260
  });
  play_button = Titanium.UI.createImageView({
    top: 350,
    left: 10,
    width: 50,
    height: 50,
    image: "assets/images/playbutton.png"
  });
  refresh_now_playing_data = function() {
    var self, url;
    self = this;
    url = "http://nwarner.com/projects/sandbox/now_playing.json";
    now_playing_data_client.onload = refresh_now_playing_data_success;
    now_playing_data_client.onerror = refresh_now_playing_data_error;
    now_playing_data_client.open("GET", url);
    now_playing_data_client.send();
    clearInterval(now_playing_data_timer);
    return now_playing_data_timer = setTimeout(function() {
      return refresh_now_playing_data();
    }, 20000);
  };
  refresh_now_playing_data_success = function() {
    var response;
    response = JSON.parse(now_playing_data_client.responseText);
    now_playing_track = response.track;
    return update_ui();
  };
  refresh_now_playing_data_error = function() {};
  update_ui = function() {
    artist_text.text = now_playing.artist;
    album_text.text = now_playing.album;
    track_text.text = now_playing.title;
    return artwork_imageview.image = "assets/images/album_bg.png";
  };
  play_stream = function() {
    playing = true;
    audio_stream.setUrl(stream_url);
    audio_stream.start();
    return play_button.image = "assets/images/stopbutton.png";
  };
  stop_stream = function() {
    playing = false;
    audio_stream.stop();
    return play_button.image = "assets/images/playbutton.png";
  };
  toggle_play_stream = function() {
    if (playing) {
      return stop_stream();
    } else {
      return play_stream();
    }
  };
  window.add(artist_text);
  window.add(album_text);
  window.add(track_text);
  window.add(artwork_imageview);
  window.add(play_button);
  play_button.addEventListener("click", function() {
    return toggle_play_stream();
  });
  window.update = function() {
    return refresh_now_playing_data();
  };
  window.addEventListener("focus", function() {
    return window.update();
  });
  return window;
};
