const express = require('express');
const {body} = require('express-validator')

const router = express.Router();

const blogController = require('../Controller/Blog')

// POST
router.post('/post', [
        body('title').isLength({min: 1}).withMessage(`Title Value Invalid`),
        body('body').isLength({min: 1}).withMessage(`Body Value Invalid`),
    ],
    blogController.createBlogPost)

// GET
router.get('/posts', blogController.getAllBlogPost)
router.get('/post/:postId', blogController.getBlogPostById)

// PUT 
router.put('/post/:postId', [
    body('title').isLength({min: 5}).withMessage(`Title Value Invalid`),
    body('body').isLength({min: 5}).withMessage(`Body Value Invalid`),
], blogController.updateBlogPost)

// DELETE
router.delete('/post/:postId', blogController.deleteBlogPost)

module.exports = router;