
app.ui.createListenWindow = function(options) {
  var window;
  options = options || {};
  options.title = options.title || "Listen";
  options.navBarHidden = true;
  window = new Window(options);
  window.audio_stream = Titanium.Media.createAudioPlayer();
  window.now_playing_track = new Track();
  window.playing = false;
  window.now_playing_data_timer = void 0;
  window.now_playing_data_client = Titanium.Network.createHTTPClient();
  window.artist_text = Titanium.UI.createLabel({
    className: "track_label"
  });
  window.album_text = Titanium.UI.createLabel({
    className: "track_label"
  });
  window.track_text = Titanium.UI.createLabel({
    className: "track_label"
  });
  window.artwork_imageview = Titanium.UI.createImageView({
    top: 10,
    left: 30,
    width: 260,
    height: 260
  });
  window.play_button = Titanium.UI.createImageView({
    top: 350,
    left: 10,
    width: 50,
    height: 50,
    image: "assets/images/playbutton.png"
  });
  window.refresh_now_playing_data = function() {
    var url;
    url = "http://nwarner.com/projects/sandbox/now_playing.json";
    Ti.ajax({
      url: url,
      success: function(response) {
        window.now_playing_track = response.track;
        log(window.now_playing_track);
        return window.update_ui();
      },
      error: function(response) {
        return alert("now_playing_track response error!");
      }
    });
    clearInterval(window.now_playing_data_timer);
    return window.now_playing_data_timer = setTimeout(function() {
      return window.refresh_now_playing_data();
    }, 20000);
  };
  window.update_ui = function() {
    window.artist_text.text = window.now_playing.artist;
    window.album_text.text = window.now_playing.album;
    window.track_text.text = window.now_playing.title;
    return window.artwork_imageview.image = "assets/images/album_bg.png";
  };
  window.play_stream = function() {
    window.playing = true;
    window.audio_stream.setUrl(app.config.urls.stream);
    window.audio_stream.start();
    return window.play_button.image = "assets/images/stopbutton.png";
  };
  window.stop_stream = function() {
    window.playing = false;
    window.audio_stream.stop();
    return window.play_button.image = "assets/images/playbutton.png";
  };
  window.toggle_play_stream = function() {
    if (window.playing) {
      return window.stop_stream();
    } else {
      return window.play_stream();
    }
  };
  window.update = function() {
    return window.refresh_now_playing_data();
  };
  window.add(window.artist_text);
  window.add(window.album_text);
  window.add(window.track_text);
  window.add(window.artwork_imageview);
  window.add(window.play_button);
  $(window.play_button).click(function() {
    return window.toggle_play_stream();
  });
  window.addEventListener("focus", function() {
    return window.update();
  });
  return window;
};
