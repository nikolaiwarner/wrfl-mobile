(function() {
  /*
  Titanium.App.Properties.getString("lastfm_username");
  Titanium.App.Properties.getString("lastfm_password");
  Titanium.App.Properties.getBool("lastfm_scrobble");
  */  this.view = function(model) {
    var window;
    window = new View({
      className: 'Window'
    });
    window.add(AirView('titlebar', {
      left: AirView('button', {
        view: view,
        type: 'Back'
      }),
      center: ''
    }));
    return window;
  };
}).call(this);
