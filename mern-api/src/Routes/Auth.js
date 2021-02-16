const { body } = require('express-validator');
const router = require('express').Router();

const authController = require('../Controller/Auth')

// REGISTER
router.post('/register', [
    body('name').isLength({min: 6}).withMessage(`Name Value Invalid`),
    body('email').isLength({min: 3}).withMessage(`Email Value Invalid`),
    body('password').isLength({min: 6}).withMessage(`Password Value Invalid`),
], authController.userRegister)

// router.get('/register', authController.getAllRegisteredData)

// LOGIN
router.post('/login', authController.userLogin)

// LOGOUT
router.get('/logout', authController.userLogout)

module.exports = router;