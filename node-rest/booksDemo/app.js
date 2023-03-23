const express = require('express')
require('dotenv').config()
require('./db')
const bookRouter = require('./router/book.router')
const authRouter = require('./router/auth.router')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/book', bookRouter)
app.use('/auth', authRouter)

app.use((err, req, res, next) => {
    res.status(500).json({ status: 'error', message: err })
})
app.use((req, res) => {
    res.status(404).json({ message: 'not found : check the url !' })
})

app.listen(PORT, () => {
    console.log(`=> server launched on port : ${PORT}`)
})
