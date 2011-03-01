Ti.include('config.js');


var table_data = [
  {title:'Row 1', color:'#999', selectedColor:'#fff'},
  {title:'Row 2', color:'#999', selectedColor:'#fff'},
  {title:'Row 3', color:'#999', selectedColor:'#fff'},
  {title:'Row 4', color:'#999', selectedColor:'#fff'}
],

var table_view = Titanium.UI.createTableView({
  data: table_data
});

  
table_view.data = table_data;
window.add(table_view);
