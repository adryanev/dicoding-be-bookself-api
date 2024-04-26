const ErrorResponse = require('./dto')

const validateAddBook = (request) => {
  const { name, readPage, pageCount } = request.payload

  if (name === undefined) {
    return new ErrorResponse({ status: 'fail', message: 'Gagal menambahkan buku. Mohon isi nama buku' })
  }

  if (readPage > pageCount) {
    return new ErrorResponse({ status: 'fail', message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount' })
  }
}

const validateUpdateBook = (request) => {
  const { name, readPage, pageCount } = request.payload

  if (name === undefined) {
    return new ErrorResponse({ status: 'fail', message: 'Gagal memperbarui buku. Mohon isi nama buku' })
  }

  if (readPage > pageCount) {
    return new ErrorResponse({ status: 'fail', message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount' })
  }
}

module.exports = { validateAddBook, validateUpdateBook }
