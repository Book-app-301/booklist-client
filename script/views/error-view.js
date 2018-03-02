'use strict';

(function(module){

  var errorView = {};

  module.errorView.initErrorPage = function(err){
    $('.container').hide();
    $('.error-view').show();
    $('#error-message').empty();

    let template = Handlebars.compile($('#error-template').append('#error-message'));
    return template(this);
  };
 
  module.errorView = errorView;
});