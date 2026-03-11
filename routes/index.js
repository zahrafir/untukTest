const express = require('express')
const router = express.Router()
const { UserController, ProductController } = require('../controllers/index')
const { authentication, authorization } = require('../middlewares/auth')

const { sendEmail } = require('../helpers/mailer')

router.get('/test-email', async (req, res, next) => {
    try {
        await sendEmail({
            to: 'nadasabs19@gmail.com',
            subject: 'test email',
            html: '<h1>hai cwk</h1>',
        })
        res.json({ message: 'email sent successfully' })

    } catch (err) {
        next(err)
    }
})



router.post('/login', UserController.login)

router.post('/register', UserController.register)

router.get('/', ProductController.find)

router.use(authentication)

router.get('/:id', ProductController.findById)

router.post('/', ProductController.create)

router.put('/:id', authorization, ProductController.update)

router.delete('/:id', authorization, ProductController.delete)

module.exports = router;