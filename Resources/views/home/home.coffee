@view = (model) ->
  window = new View { className: 'Window' }
  
  window.add AirView 'titlebar', { center: 'wrfl' }  
  
  window