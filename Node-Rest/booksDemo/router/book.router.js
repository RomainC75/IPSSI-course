const router = require('express').Router()
const isBookIdInDB = require('../middlewares/isBookIdInDB.mid')
const Book = require('../models/books.model')

const requiredBookKeys = ['title', 'author', 'price']

router.get('/', async (req, res, next) => {
    try {
        const foundBooks = await Book.find()
        res.status(200).json(foundBooks)
    } catch (error) {
        next(error)
    }
})

router.get('/:bookId', async (req, res, next) => {
    try {
        const { bookId } = req.params
        const foundBook = await Book.findById(bookId)
        if (!foundBook) {
            return res.status(404).json({ message: 'book not found' })
        }
        res.status(200).json(foundBook)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const book = req.body
        const isEveryKeyInRequest = requiredBookKeys.every((key) =>
            Object.keys(book).includes(key)
        )
        if (!isEveryKeyInRequest) {
            return res.status(422).json({
                message: 'need 3 keys : title, author and price',
            })
        }
        const ans = await Book.create(book)
        res.status(201).json(ans)
    } catch (error) {
        next(error)
    }
})

router.patch('/:bookId', isBookIdInDB, async (req, res, next) => {
    try {
        const isKeysValid = Object.keys(req.body).every((bodyKey) =>
            requiredBookKeys.includes(bodyKey)
        )
        if (!isKeysValid) {
            return res
                .status(422)
                .json({ message: 'authorized keys : title, author and price' })
        }

        if ('title' in req.body) {
            const foundBook = await Book.findOne({ title: req.body.title })
            if (foundBook && foundBook._id.toString() !== req.params.bookId) {
                return res
                    .status(401)
                    .json({ message: 'title is already used' })
            }
        }
        const ans = await Book.findByIdAndUpdate(req.params.bookId, req.body, {
            new: true,
        })
        res.status(200).json({ message: 'book updated !', updatedBook: ans })
    } catch (error) {
        next(error)
    }
})

router.delete('/:bookId', isBookIdInDB, async (req, res, next) => {
    try {
        await Book.findByIdAndDelete(req.params.bookId)
        return res.status(202).json({ message: 'book deleted !' })
    } catch (error) {
        next(error)
    }
})

module.exports = router
