
var app={};
// var __API_URL__ = 'http://localhost:3000';
var __API_URL__ = 'https://jr-da-booklist.herokuapp.com';

(function (module) {
    function errorCallback(err) {
      console.error(err);
      module.errorView.initErrorPage(err);
    }

function Book(bookObject){
    Object.keys(bookObject).forEach(key => this[key] = bookObject[key]);
}

Book.prototype.toHtml = function(){
    let template = Handlebars.compile($('#book-template').text());
    return template(this);
}

Book.all = [];

Book.loadAll = rows => {
  Book.all = rows.sort((a, b) => b.title - a.title).map(book => new Book(book));
}

Book.fetchAll = callback =>
$.get(`${_API_URL_}/books`)
    .then(Books.loadAll)
    .then(callback)
    .catch(errorCallback);
