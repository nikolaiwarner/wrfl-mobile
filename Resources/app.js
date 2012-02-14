/*                                                                                            
              .             .     .     
           ,- |             |   o |     
, , , ;-.  |  |   ;-.-. ,-. |-. . | ,-. 
|/|/  |    |- |   | | | | | | | | | |-' 
' '   '    |  '   ' ' ' `-' `-' ' ' `-' 
          -'    
*/



// Set the server ... 'dev', 'staging', 'beta', 'production'
var server = Ti.App.Properties.getString("channel_field") || 'production'


//===========================================================================================

// Setup namespace
var app = {
  config: {},
  ui: {},
  user: {}
};

app.config.domain = "http://"+server+".wrfl.fm";
//app.config.domain = "http://localhost:3000";

app.config.urls = {
  login: app.config.domain + "/api/v1/sessions.json",   
  logout: app.config.domain + "/sign_out.json"
};      






var used = [
  Ti.Platform.locale, Ti.UI.createView, Ti.UI.createLabel, Ti.UI.createImageView, Ti.UI.createButton, Ti.UI.createWindow,
  Ti.UI.createWebView, Ti.UI.createAnimation, Ti.Map.createView, Ti.UI.create2DMatrix, Ti.UI.createScrollView,
  Ti.UI.createScrollableView, Ti.UI.createOptionDialog, Ti.UI.createSearchBar, Ti.Media.createVideoPlayer,
  Ti.UI.createTableView, Ti.UI.createTableViewRow, Ti.Network.createHTTPClient, Ti.UI.createTextField,
  Ti.UI.createActivityIndicator, Ti.UI.createAlertDialog, Ti.UI.createTextArea, Ti.UI.createProgressBar,
  Ti.UI.createEmailDialog, Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT
];





Ti.include('vendor/redux.js');
includeGlobal('vendor/underscore-min.js');
includeGlobal('vendor/tiajax.js');
includeGlobal('vendor/TiLoad/TiLoad.js');
//includeRJSSGlobal('d.rjss');

includeGlobal('app/ui-playlist.js');
includeGlobal('app/ui-listen.js');
includeGlobal('app/ui-settings.js');
includeGlobal('app/lib/track.js');

includeRJSS('assets/stylesheets/app.rjss');


TiLoad.init({ rotate: true });



/*
var NavigationController = require('NavigationController').NavigationController;
var navigationController = new NavigationController();
//open initial window
navigationController.open(new TestWindow(navigationController));
*/









var latest_looks_window = app.ui.createLooksWindow({  
  title:'Latest Looks',
  url: app.config.urls.latest_looks
});

var my_looks_window = app.ui.createLooksWindow({  
  title:'My Looks',
  url: app.config.urls.my_looks + app.current_user.user_id(),
  require_sign_in: true
});

var capture_window = app.ui.createCaptureWindow({ require_sign_in: true });
var login_window = app.ui.createLoginWindow({ isNotModal: true });





//  add tabs
var tab0 = Titanium.UI.createTab({  
    icon:'assets/images/12-eye.png',
    title: 'Latest',
    window: latest_looks_window
});
var tab1 = Titanium.UI.createTab({  
    icon:'assets/images/145-persondot.png',
    title: 'My Looks',
    window: my_looks_window
});
var tab2 = Titanium.UI.createTab({  
    icon:'assets/images/56-cloud.png',
    title:'Post',
    window: capture_window
});
var tab3 = Titanium.UI.createTab({  
    icon:'assets/images/19-gear.png',
    title:'Settings',
    window: login_window
});

var tabGroup = new TabGroup();
tabGroup.addTab(tab0); 
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3); 

// open tab group
tabGroup.open();


///============================================


Ti.include('/lib/vendor/redux-8.3.js');
Ti.include('/lib/track.js');


Ti.include('config.js');


config2 = {

  fonts: {
    normal: {
      fontSize: 20, 
      fontFamily: 'Helvetica Neue'
    }
  },

  colors: {
    black: '#000'
  }
};




Ti.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK;
Ti.UI.backgroundColor = config.colors.black;


var tab_group = Titanium.UI.createTabGroup();


  
var listen_window = Ti.UI.createWindow({
  url: 'views/listen/view.js',
  barColor: config.colors.black,
  navBarHidden: true
});

var playlist_window = Ti.UI.createWindow({
  url: 'views/playlist/view.js',
  barColor: config.colors.black
});

var settings_window = Ti.UI.createWindow({
  url: 'views/settings/view.js',
  barColor: config.colors.black
});



var listen_tab = Ti.UI.createTab({  
  icon:'images/listen_tab.png',
  title:'Listen',
  window: listen_window
});
tab_group.addTab(listen_tab);

var playlist_tab = Ti.UI.createTab({  
  icon:'images/playlist_tab.png',
  title:'Playlist',
  window: playlist_window
});
tab_group.addTab(playlist_tab);

var settings_tab = Ti.UI.createTab({  
  icon:'images/settings_tab.png',
  title:'Settings',
  window: settings_window
});
tab_group.addTab(settings_tab);  



tab_group.open();