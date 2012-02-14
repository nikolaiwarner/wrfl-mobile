###   
              .             .     .     
           ,- |             |   o |     
, , , ;-.  |  |   ;-.-. ,-. |-. . | ,-. 
|/|/  |    |- |   | | | | | | | | | |-' 
' '   '    |  '   ' ' ' `-' `-' ' ' `-' 
          -'    
###



app =
  config:
    server: Ti.App.Properties.getString("channel_field") or "production"
    domain: "http://.wrfl.fm"
  ui: {}
  user: {}

app.config.urls =
  stream: "http://wrfl.uky.edu:9000/"
  login: app.config.domain + "/api/v1/sessions.json"
  logout: app.config.domain + "/sign_out.json"



used = [ Ti.Platform.locale, Ti.UI.createView, Ti.UI.createLabel, Ti.UI.createImageView, Ti.UI.createButton, Ti.UI.createWindow, Ti.UI.createWebView, Ti.UI.createAnimation, Ti.Map.createView, Ti.UI.create2DMatrix, Ti.UI.createScrollView, Ti.UI.createScrollableView, Ti.UI.createOptionDialog, Ti.UI.createSearchBar, Ti.Media.createVideoPlayer, Ti.UI.createTableView, Ti.UI.createTableViewRow, Ti.Network.createHTTPClient, Ti.UI.createTextField, Ti.UI.createActivityIndicator, Ti.UI.createAlertDialog, Ti.UI.createTextArea, Ti.UI.createProgressBar, Ti.UI.createEmailDialog, Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT ]

Ti.include    "vendor/redux.js"
includeGlobal "vendor/underscore-min.js"
includeGlobal "vendor/tiajax.js"
includeGlobal "vendor/TiLoad/TiLoad.js"

includeGlobal "app/ui-listen.js"
includeGlobal "app/ui-playlist.js"
includeGlobal "app/ui-settings.js"
includeGlobal "app/lib/track.js"

includeRJSS   "assets/stylesheets/app.rjss"

TiLoad.init rotate: true




listen_window = app.ui.createListenWindow
  title: "Listen"
  
playlist_window = app.ui.createPlaylistWindow
  title: "Playlist"


tab0 = Titanium.UI.createTab
  icon: "assets/images/12-eye.png"
  title: "Listen"
  window: listen_window
  
tab1 = Titanium.UI.createTab
  icon: "assets/images/12-eye.png"
  title: "Playlist"
  window: playlist_window

###
tab2 = Titanium.UI.createTab
  icon: "assets/images/12-eye.png"
  title: "Listen"
  window: listen_window
###

tabGroup = new TabGroup()
tabGroup.addTab tab0
tabGroup.addTab tab1
#tabGroup.addTab tab2
tabGroup.open()

