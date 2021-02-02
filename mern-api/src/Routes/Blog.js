const express = require('express');
const {body} = require('express-validator')

const blogController = require('../Controller/Blog')

const router = express.Router();

router.post('/post', [
        body('title').isLength({min: 5}).withMessage(`Title Value Invalid`),
        body('body').isLength({min: 5}).withMessage(`Body Value Invalid`),
    ],
    blogController.createBlogPost)

// router.get()

module.exports = router;