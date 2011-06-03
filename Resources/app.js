Ti.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK;
Ti.UI.backgroundColor = config.colors.black;

constants = {

};


Ti.include('lib/redux.js');
Ti.include('lib/oauth.js');
Ti.include('lib/sha1.js');
Ti.include('lib/oauth_adapter.js');
Ti.include('lib/oauth_android.js');
Ti.include('lib/oauth_wrapper.js');
Ti.include('lib/TiAir.js');
Ti.include('lib/TiStorage.js');
Ti.include('lib/tiajax.js');

//Ti.include('lib/functions.js');



var used = [
  Ti.UI.createView, Ti.UI.createLabel, Ti.UI.createImageView, Ti.UI.createButton, Ti.UI.createWindow,
  Ti.UI.createWebView, Ti.UI.createAnimation, Ti.Map.createView, Ti.UI.create2DMatrix, Ti.UI.createScrollView,
  Ti.UI.createScrollableView,
  Ti.UI.createTableView, Ti.UI.createTableViewRow, Ti.Network.createHTTPClient, Ti.UI.createTextField,
  Ti.UI.createActivityIndicator, Ti.UI.createAlertDialog, Ti.UI.createTextArea, Ti.UI.createProgressBar,
  Ti.UI.createEmailDialog, Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT
];



/*
oauthWrapper.setup({
    secret: constants.TwitterConsumerSecret,
    key: constants.TwitterConsumerKey
});
*/



includeRJSS(
  'content/styles/common.rjss'
);
 
 
 
 
TiAir.init({

  defaultURL: { controller: 'home', action: 'home' },


  controllers: [
    'home.js'
  ],


  models: [
    'track.js'
  ],


  navigator: 'default.js',


  views: {
    'home': [
      'home.js'
    ],
    'playlist': [
      'index.js'
    ]
  }
});
