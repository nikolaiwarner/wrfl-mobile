var playlist_tableview = {
  

  data: [
    {title:'Row 1', color:'#999', selectedColor:'#fff'},
    {title:'Row 2', color:'#999', selectedColor:'#fff'},
    {title:'Row 3', color:'#999', selectedColor:'#fff'},
    {title:'Row 4', color:'#999', selectedColor:'#fff'}
  	
  ],
  
  init: function() {
  
    this.tableview = Titanium.UI.createTableView({
  	 data: this.data
    });
    
    playlist_window.add(this.tableview);
  }

};

playlist_tableview.init();