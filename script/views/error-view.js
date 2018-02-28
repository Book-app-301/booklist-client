'strict'


var errorView = {};


errorView.initErrorPage = function(err){
  $('.container').hide();
  $('.error-view').show();
  $('#error-message').text = ';';

  Handlebars.compile($('#error-template').append('#error-message'));
  // return template(this);
};