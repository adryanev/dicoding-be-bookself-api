const { addBookToBookshelf, getBookshelf, getBookFromBookshelf, updateBookInBookshelf, deleteBookFromBookshelf } = require('./bookshelf/handler')
const router = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookToBookshelf
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBookshelf
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookFromBookshelf
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: updateBookInBookshelf
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookFromBookshelf
  }
]


module.exports = router