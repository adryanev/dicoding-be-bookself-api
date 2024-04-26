const Book = require('./book')
let bookshelf = []


const addBook = (book) => {

  const newBook = new Book(book)
  bookshelf.push(newBook)

  return newBook

}
const removeBook = (bookId) => {

  return bookshelf.splice(bookshelf.findIndex(book => book.id === bookId), 1)[0]
}
const getBooks = (query) => {
  return bookshelf.filter(book => {
    let isFinished = true
    if (query.reading !== undefined) {
      isFinished = book.reading == query.reading
    }
    if (query.finished !== undefined) {
      isFinished = book.finished == query.finished
    }
    if (query.name !== undefined) {
      isFinished = book.name.toLowerCase().includes(query.name.toLowerCase())
    }
    return isFinished
  }).map(book => {
    return {
      id: book.id,
      name: book.name,
      publisher: book.publisher
    }
  })
}
const getBook = (bookId) => {

  return bookshelf.filter(book => book.id === bookId)[0]
}
const updateBook = (book, id) => {

  const index = bookshelf.findIndex(book => book.id === id)
  if (index === -1) {
    return undefined
  }


  const updatedBook = new Book({ ...bookshelf[index], ...book, updatedAt: new Date().toISOString() })
  updatedBook.id = id
  updateBook.updatedAt = new Date().toISOString()
  bookshelf[index] = updatedBook

  return updatedBook

}

module.exports = { addBook, updateBook, removeBook, getBooks, getBook }