const Book = require('../models/books.model')

const isBookIdInDB = async (req, res, next) => {
    try {
        const foundBookById = await Book.findById(req.params.bookId)
        if (!foundBookById) {
            return res.status(404).json({ message: 'book not found' })
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = isBookIdInDB
