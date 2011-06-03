(function() {
  this.view = function(model) {
    var window;
    window = new View({
      className: 'Window'
    });
    window.add(AirView('titlebar', {
      center: 'wrfl'
    }));
    return window;
  };
}).call(this);
