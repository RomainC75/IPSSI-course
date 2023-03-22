const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user.model')

router.post('/signup', async (req, res, next) => {
    try {
        if (!('email' in req.body && 'password' in req.body)) {
            return res
                .status(422)
                .json({ message: 'need 2 keys : email, password' })
        }
        const { email, password } = req.body
        const foundUser = await User.findOne({ email })
        if (foundUser) {
            return res.status(409).json({ message: 'email already used' })
        }
        const saltRounds = 10
        const hash = await bcrypt.hash(password, saltRounds)
        const ans = await User.create({ email, password: hash })
        res.status(201).json({
            message: 'user created',
            user: {
                id: ans._id,
                email,
            },
        })
    } catch (error) {
        next(error)
    }
})

router.post('/login', async (req, res, next) => {
    try {
        if (!('email' in req.body && 'password' in req.body)) {
            return res
                .status(422)
                .json({ message: 'need 2 keys : email, password' })
        }
        const { email, password } = req.body
        const foundUser = await User.findOne({ email })
        if (!foundUser) {
            return res.status(409).json({ message: 'wrong email or password' })
        }
        const isValid = await bcrypt.compare(password, foundUser.password)

        res.status(200).json({ message: isValid })
    } catch (error) {
        next(error)
    }
})

module.exports = router
