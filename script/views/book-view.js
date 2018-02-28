'use strict';
//after code review
var app = app || {}; 

(function(module){
  const bookView = {};

  bookView.initIndexPage = function(){
    $('.container').hide();
    $('.book-list').show();
    module.Book.all.map(book => $('book-list').append(book.toHtml()));
  }

  module.bookView = bookView;

})(app)

$(function(){
  app.Book.fetchAll(app.bookView.initIndexPage);
})