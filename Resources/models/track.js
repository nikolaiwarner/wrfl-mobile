function Track(){
  var self = this;
  
  this.dj = "";
  
  this.artist = "";
  this.album = "";
  this.title = "";
  
  this.time_start = "";
  this.time_end = "";
  
  this.artwork = Titanium.UI.createImageView({
    image: "images/album_bg.png"
  }); 
  
  
  this.fetch_album_art = function() {
    lastfm.artist.getInfo({artist: this.artist, album: this.album, track: this.title}, {
      success: function(){ self.fetch_album_art_success(); }, 
      error: function(){ self.fetch_album_art_error(); }
    });
  };
  
  this.fetch_album_art_success = function(data) {
    
    //this.artwork.image = data;
  
  };
  
  this.fetch_album_art_error = function() {
    
  };
  
  
  
}

