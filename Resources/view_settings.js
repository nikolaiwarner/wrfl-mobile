app.view_settings = {

  window: Titanium.UI.createWindow({  
    title:'Settings',
    backgroundColor:'#000'
  }),
  tab: Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Settings'
  }),

  init: function(){
    this.tab.window = this.window;
    app.tab_group.addTab(this.tab);
  }
};