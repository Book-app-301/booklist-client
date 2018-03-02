
page('/', () => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/:book_id', ctx => app.Book.fetchOne(ctx,app.bookView.initDetailPage));
page('/books/new', ctx => app.Book.initCreateFormPage(ctx));
page();

