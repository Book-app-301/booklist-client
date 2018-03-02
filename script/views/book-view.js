'use strict';

var app = app || {};

(function(module){

  const bookView = {};
  function reset(){
    $('.container').hide();
    $('.container').empty();
  }

  bookView.initIndexPage = function(){
    $('.container').hide()
    $('.error-view').hide();
    $('.book-view').show();
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

  bookView.initcreateFormPage = function(ctx){
    reset();
    console.log('youre hitting initCreate');
    $('.container').hide();
    $('.create-view').show();
   
    $('#create-form').on('submit'), function(event){
      let newBook = {
        author: event.target.author.value,
        title: event.target.title.value,
        isbn: event.target.isbn.value,
        image_url: event.target.image_url.value,
        description: event.target.description.value,
      };
      module.Book.create(newBook);
    };
  };

  module.bookView = bookView;

})(app);

// $(function(){
//   app.Book.fetchAll(app.bookView.initIndexPage);
// });

// $(function(){
//   app.Book.fetchOne(ctx,app.bookView.initDetailPage);
// })