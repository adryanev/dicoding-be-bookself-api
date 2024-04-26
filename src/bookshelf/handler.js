const { addBook, updateBook, removeBook, getBooks, getBook } = require("./bookshelf")
const { validateAddBook, validateUpdateBook } = require("./validator")

const addBookToBookshelf = async (req, res) => {

  const validated = validateAddBook(req)

  if (validated !== undefined) {
    return res.response(validated).code(400)
  }
  try {
    const added = addBook(req.payload)
    return res.response({ status: 'success', message: 'Buku berhasil ditambahkan', data: { bookId: added.id } }).code(201)
  }
  catch (error) {
    console.error(error)
    return res.response({ status: 'error', message: 'Buku gagal ditambahkan' }).code(500)
  }

}
const getBookshelf = async (req, res) => {
  const query = req.query
  return res.response({ status: 'success', data: { books: getBooks(query) } }).code(200)
}
const getBookFromBookshelf = async (req, res) => {
  try {
    const book = getBook(req.params.id)
    if (book === undefined) {
      return res.response({ status: 'fail', message: 'Buku tidak ditemukan' }).code(404)
    }
    return res.response({ status: 'success', data: { book } }).code(200)
  }
  catch (error) {
    console.error(error)
    return res.response({ status: 'fail', message: 'Buku tidak ditemukan' }).code(404)
  }
}

const updateBookInBookshelf = async (req, res) => {
  const validated = validateUpdateBook(req)

  if (validated !== undefined) {
    return res.response(validated).code(400)
  }

  const id = req.params.id
  try {
    const updated = updateBook(req.payload, id)
    if (updated === undefined) {
      return res.response({ status: 'fail', message: 'Gagal memperbarui buku. Id tidak ditemukan' }).code(404)
    }
    return res.response({ status: 'success', message: 'Buku berhasil diperbarui' }).code(200)
  }
  catch (error) {
    console.error(error)
    return res.response({ status: 'error', message: 'Buku gagal diperbarui' }).code(500)
  }
}
const deleteBookFromBookshelf = async (req, res) => {
  try {
    const removed = removeBook(req.params.id)
    if (removed === undefined) {
      return res.response({ status: 'fail', message: 'Buku gagal dihapus. Id tidak ditemukan' }).code(404)
    }
    return res.response({ status: 'success', message: 'Buku berhasil dihapus' }).code(200)
  }
  catch (error) {
    console.error(error)
    return res.response({ status: 'error', message: 'Buku gagal dihapus' }).code(500)
  }
}


module.exports = { addBookToBookshelf, getBookshelf, getBookFromBookshelf, updateBookInBookshelf, deleteBookFromBookshelf }