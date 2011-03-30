Ti.include('../../config.js', '../../models/track.js');

var window = Ti.UI.currentWindow;
var data_client = Titanium.Network.createHTTPClient();
var table_data = [];
var tracks = [];


var table_view = Titanium.UI.createTableView({
  data: table_data
});

  
table_view.data = table_data;
window.add(table_view);





function refresh_table_view(){
  table_data = [];
  tracks.forEach(function(track){
    var row = Ti.UI.createTableViewRow({
      backgroundColor: config.colors.black,
      height: 90
    });

    var title = Ti.UI.createLabel({
      text: track.title,
      font: {fontSize:13,fontWeight:'bold'},
      color: config.colors.white,
      shadowColor: config.colors.white_shadow,
	    shadowOffset: { x:0, y:1 },
      textAlign: 'left',
      top: 10,
      left: 5,
      height:16
    });
  
    var artist = Ti.UI.createLabel({
      text: track.artist,
      font: {fontSize:13,fontWeight:'normal'},
      color: config.colors.white,
      shadowColor: config.colors.white_shadow,
	    shadowOffset: { x:0, y:1 },
      textAlign: 'left',
      top: 30,
      left: 5,
      height:16
    });
    
    var album = Ti.UI.createLabel({
      text: track.album,
      font: {fontSize:11,fontWeight:'normal'},
      color: config.colors.white,
      shadowColor: config.colors.white_shadow,
	    shadowOffset: { x:0, y:1 },
      textAlign: 'left',
      top: 50,
      left: 5,
      height:35
    });
    
/*
    var date = Ti.UI.createLabel({
      text: track.datetime,
      font: {fontSize:12,fontWeight:'bold'},
      color: config.colors.white,
      shadowColor: config.colors.white_shadow,
	    shadowOffset: { x:0, y:1 },
      textAlign: 'right',
      top: 15,
      right: 5,
      height: 16,
      width: 150
    });
*/
   
    row.add(title);
    row.add(artist);
    row.add(album);
    /* row.add(date); */
    row.hasChild = false;
    row.className = 'playlist_row';
    row.track = track;
     
    table_data.push(row);
  });

  table_view.setData(table_data);  
}



function refresh_playist_data(){  
  data_client.onload = refresh_playist_data_success;
  data_client.onerror = refresh_playist_data_error;
  data_client.open("GET", config.urls.playlist);
  data_client.send();
};


function refresh_playist_data_success(){
  var response = JSON.parse(data_client.responseText);
  
  response.forEach(function(response_track){
    var track = new Track();
    track.artist = response_track.fields.artist;
    track.album = response_track.fields.album;
    track.title = response_track.fields.track;
    tracks.push(track);
  });
  
  refresh_table_view();
};


function refresh_playist_data_error(){

}




window.addEventListener('focus', refresh_playist_data);
