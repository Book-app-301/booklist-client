
var app = app || {};

var __API_URL__ = 'http://localhost:3000';
// var __API_URL__ = 'https://jr-da-booklist.herokuapp.com';

(function (module) {
  function errorCallback(err) {
    console.log('this is an error');
    module.errorView.initErrorPage(err);
  }


  function Book(bookObject){
    Object.keys(bookObject).forEach(key => this[key] = bookObject[key]);
  }

  Book.prototype.toHtml = function(){
    let template = Handlebars.compile($('#book-list-template').text());
    return template(this);
  };

  Book.all = [];

  Book.create = book =>
    $.post(`${__API_URL__}/api/v1/books`, book)
      .then(()=> page('/'))
      .catch(errorCallback);

  Book.loadAll = rows => {Book.all = rows.sort((a, b) => b.title - a.title).map(book => new Book(book));};

  Book.fetchAll = callback =>
    $.get(`${__API_URL__}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);


  Book.fetchOne = (ctx, callback) =>
    $.get(`${__API_URL__}/api/v1/books/${ctx.params.book_id}`)
      .then(results=>ctx.book = results[0])
      .then(callback)
      .catch(errorCallback);


  module.Book = Book;

})(app);

