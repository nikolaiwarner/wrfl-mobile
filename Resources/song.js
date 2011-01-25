function Song(){
  var self = this;
  
  this.dj = "";
  this.artist = "";
  this.album = "";
  this.track = "";
  
  this.time_start = "";
  this.time_end = "";
  
  this.artwork = Titanium.UI.createImageView({
    image: Titanium.Filesystem.getFile("images/album_bg.png")
  }); 
  
  
  this.fetch_album_art = function() {
    lastfm.artist.getInfo({artist: this.artist, album: this.album, track: this.track}, {
      success: self.fetch_album_art_success, 
      error: self.fetch_album_art_error
    });
  };
  
  this.fetch_album_art_success = function(data) {
    
    //this.artwork.setImage(data);
  
  };
  
  this.fetch_album_art_error = function() {
    
  };
  
  
  
}

