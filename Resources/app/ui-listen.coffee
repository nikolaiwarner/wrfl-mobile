app.ui.createListenWindow = (options) ->
  options = options or {}
  options.title = options.title or "Listen"
  options.navBarHidden = true
  
  window = new Window(options)
  audio_stream = Titanium.Media.createAudioPlayer()
   
  now_playing_track = new Track()
  
  
  
  playing = false
  now_playing_data_timer = undefined
  now_playing_data_client = Titanium.Network.createHTTPClient()
  
  
  artist_text = Titanium.UI.createLabel
    className: "track_label"
  
  album_text = Titanium.UI.createLabel
    className: "track_label"
      
  track_text = Titanium.UI.createLabel
    className: "track_label"    

  artwork_imageview = Titanium.UI.createImageView
    top: 10
    left: 30
    width: 260
    height: 260
  
  play_button = Titanium.UI.createImageView
    top: 350
    left: 10
    width: 50
    height: 50
    image: "assets/images/playbutton.png"
  
  refresh_now_playing_data = ->
    self = this
    url = "http://nwarner.com/projects/sandbox/now_playing.json"
    now_playing_data_client.onload = refresh_now_playing_data_success
    now_playing_data_client.onerror = refresh_now_playing_data_error
    now_playing_data_client.open "GET", url
    now_playing_data_client.send()
    clearInterval now_playing_data_timer
    now_playing_data_timer = setTimeout(->
      refresh_now_playing_data()
    , 20000)
  
  refresh_now_playing_data_success = ->
    response = JSON.parse(now_playing_data_client.responseText)
    now_playing_track = response.track
    update_ui()
  
  refresh_now_playing_data_error = ->
  
  update_ui = ->
    artist_text.text = now_playing.artist
    album_text.text = now_playing.album
    track_text.text = now_playing.title
    artwork_imageview.image = "assets/images/album_bg.png"
  
  play_stream = ->
    playing = true
    audio_stream.setUrl stream_url
    audio_stream.start()
    play_button.image = "assets/images/stopbutton.png"
  
  stop_stream = ->
    playing = false
    audio_stream.stop()
    play_button.image = "assets/images/playbutton.png"
  
  toggle_play_stream = ->
    if playing
      stop_stream()
    else
      play_stream()
  
  window.add artist_text
  window.add album_text
  window.add track_text
  window.add artwork_imageview
  window.add play_button
  play_button.addEventListener "click", ->
    toggle_play_stream()
  
  
  
  
  
  
  
  window.update = ->
    refresh_now_playing_data()

  
  window.addEventListener "focus", ->
    window.update()
            
  window




