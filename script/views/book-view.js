'use strict';

var app = app || {};

(function(module){

  const bookView = {};

  bookView.initIndexPage = function(ctx){
    $('.container').hide();
    $('.book-view').show();
    $('#book-list').empty();
    $('#book-list').show();
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));
  };

  bookView.initDetailPage = function(ctx){
    $('.container').hide();
    $('.detail-view').show();
    $('#book-detail').empty();
    let template = Handlebars.compile($('#book-detail-template').text());
    console.log(template);
    $('#book-detail').append(template(ctx));
  };
  bookView.test = function(){
    console.log('help');
    $('.create-view').show();
  };

  bookView.initCreateFormPage = function(ctx){
    $('.create-view').show();
    $('#create-form').on('submit', function(event){
      event.preventDefault();
      let book = {
        author: event.target.author.value,
        title: event.target.title.value,
        isbn: event.target.isbn.value,
        image_url: event.target.image_url.value,
        description: event.target.description.value,
      };

      module.Book.create(book);
    });

  };

  module.bookView = bookView;

})(app);

// $(function(){
//   app.Book.fetchAll(app.bookView.initIndexPage);
// });

// $(function(){
//   app.Book.fetchOne(ctx,app.bookView.initDetailPage);
// })