app.view_playlist = {

  window: Titanium.UI.createWindow({  
    title:'Playlist',
    backgroundColor:'#000',
    barColor: '#000'
  }),
  tab: Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Playlist'
  }),


  table_view_data: [
    {title:'Row 1', color:'#999', selectedColor:'#fff'},
    {title:'Row 2', color:'#999', selectedColor:'#fff'},
    {title:'Row 3', color:'#999', selectedColor:'#fff'},
    {title:'Row 4', color:'#999', selectedColor:'#fff'}
  ],
  
  table_view: Titanium.UI.createTableView({
    data: this.table_view_data
  }),

  
  
  init: function() {
    this.tab.window = this.window;
    app.tab_group.addTab(this.tab);
    
    this.table_view.data = this.table_view_data;
    this.window.add(this.table_view);
  }
};