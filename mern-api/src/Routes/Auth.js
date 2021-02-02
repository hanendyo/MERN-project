const express = require('express');

const router = express.Router();

const authController = require('../Controller/Auth')

router.post('/register', authController.register)

module.exports = router;