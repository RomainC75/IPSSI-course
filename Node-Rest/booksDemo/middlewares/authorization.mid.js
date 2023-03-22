const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
require('dotenv').config()

const authorization = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const { userId, email } = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = {
            userId,
            email,
        }
        next()
    } catch (error) {
        next('=> token not valid')
    }
}

module.exports = authorization
