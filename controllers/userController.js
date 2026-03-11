const { User } = require('../models/index')
const { generateToken } = require('../helpers/token')
const { compare } = require('../helpers/password')


const UserController = {
    login: (req, res, next) => {
        const { email, password } = req.body
        //cek user exist
        User.findOne({ email })
            .then(user => {
                if (user) {
                    //cek pass match
                    const isMatch = compare(password, user.password)
                    if (isMatch) {
                        const token = generateToken({ id: user._id, email: user.email })
                        res.json({
                            id: user._id,
                            email: user.email,
                            token
                        })
                    } else {
                        res.status(401).json({ message: 'Invalid email or password' })
                    }
                } else {
                    res.status(401).json({ message: 'Invalid email or password' })
                }
            })
            .catch(err => { next(err) })
    },

    register: (req, res, next) => {
        const { email, password } = req.body || {}
        User.create({ email, password })
            .then(user => {
                res.json(user)
            })
            .catch(err => { next(err) })
    }
}

module.exports = UserController