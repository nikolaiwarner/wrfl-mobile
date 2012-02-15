app.ui.createListenWindow = (options) ->
  options = options or {}
  options.title = options.title or "Listen"
  options.navBarHidden = true
  
  window = new Window(options)
  window.audio_stream = Titanium.Media.createAudioPlayer()
   
  window.now_playing_track = new Track()
  
  
  
  window.playing = false
  window.now_playing_data_timer = undefined
  window.now_playing_data_client = Titanium.Network.createHTTPClient()
  
  
  window.artist_text = Titanium.UI.createLabel
    className: "track_label"
  
  window.album_text = Titanium.UI.createLabel
    className: "track_label"
      
  window.track_text = Titanium.UI.createLabel
    className: "track_label"    

  window.artwork_imageview = Titanium.UI.createImageView
    top: 10
    left: 30
    width: 260
    height: 260
  
  window.play_button = Titanium.UI.createImageView
    top: 350
    left: 10
    width: 50
    height: 50
    image: "assets/images/playbutton.png"
  
  
  
  
  window.refresh_now_playing_data = ->
    url = "http://nwarner.com/projects/sandbox/now_playing.json"
    
    Ti.ajax
      url: url
      success: (response) ->
        #warn response
        #response = JSON.parse(response)
        window.now_playing_track = response.track
        log window.now_playing_track
        window.update_ui()

      error: (response) ->
        alert "now_playing_track response error!"    
    
    clearInterval window.now_playing_data_timer
    window.now_playing_data_timer = setTimeout(->
      window.refresh_now_playing_data()
    , 20000)
  
  
  
  
  window.update_ui = ->
    window.artist_text.text = window.now_playing.artist
    window.album_text.text = window.now_playing.album
    window.track_text.text = window.now_playing.title
    window.artwork_imageview.image = "assets/images/album_bg.png"
  
  
  
  window.play_stream = ->
    window.playing = true
    window.audio_stream.setUrl app.config.urls.stream
    window.audio_stream.start()
    window.play_button.image = "assets/images/stopbutton.png"
  
  
  
  window.stop_stream = ->
    window.playing = false
    window.audio_stream.stop()
    window.play_button.image = "assets/images/playbutton.png"
  
  
  
  window.toggle_play_stream = ->
    if window.playing
      window.stop_stream()
    else
      window.play_stream()
  

  
  window.update = ->
    window.refresh_now_playing_data()


  
  window.add window.artist_text
  window.add window.album_text
  window.add window.track_text
  window.add window.artwork_imageview
  window.add window.play_button
  
  $(window.play_button).click ->
    window.toggle_play_stream()
  
  
  
  
  window.addEventListener "focus", ->
    window.update()
            
  window




