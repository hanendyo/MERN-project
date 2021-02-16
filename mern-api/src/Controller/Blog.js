const moment = require("moment");
const {validationResult} = require("express-validator");
const path = require('path') 
const fs = require('fs') //-->filesystem nodejs
const BlogPostModel = require('../Models/Blog');


// POST
exports.createBlogPost = (req, res, next)=>{

    // console.log(`path: `, req.file.path);
    // check error untuk inputan string
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        const err = new Error (`Input Value Invalid`);
        err.errorStatus = 400;
        err.data = errors.array(); //array
        throw err;
    }
    
    //check error untuk inputan file
    if(!req.file){
            const err = new Error('Must Upload An Image');
            err.errorStatus = 422;
            throw err;
        }
        
        
        const title = req.body.title;
        const body = req.body.body;
        const image = req.file.path
        // const {title, body} = req.body;
        // const {image} = req.file.path
        
        // posting dari model BlogPostModel
        const Posting = new BlogPostModel({
            title: title,
            body: body,
            image: image,
            author: {
                uid: 1,
                name: "hanendyo"
            }
    })
    
    Posting.save() //! --> SIMPAN KE DATABASE
    .then(result => {
        const hasilPosting = {
            message:'Create Blog Post Success',
            data: result
        }
        res.status(201).json(hasilPosting);
        console.log(`file: `, req.file);
        next();
    })
    .catch(err => console.log(`something wrong:`,err))
}

// GET
exports.getAllBlogPost =(req,res,next)=>{
    const currentPage = parseInt(req.query.page || 1);
    const perPage = parseInt(req.query.perPage || 3);
    let totalItems; 

    BlogPostModel.find()
    .countDocuments() //--> hitung total data
    .then(count => {
        totalItems = count
        return BlogPostModel.find()
        .skip((currentPage - 1) * perPage) //--> skip berapa data
        .limit(perPage); //--> limit berapa data
    })
    .then(result=>{
        res.status(200).json({
            message: `data Blog Post berhasil di-GET`,
            data: result,
            total_data: totalItems,
            current_page: currentPage,
            per_page: perPage
        });
    })
    .catch(err=>{
        next(err);
    })
    

}

// GET
exports.getBlogPostById =(req, res, next)=>{
    const postId = req.params.postId
    BlogPostModel.findById(postId)
    .then(result=>{
        if(!result){
            const error = new Error (`NOT FOUND: Blog Post tidak ditemukan`)
            error.errorStatus = 404;
            throw error;
        }

        res.status(200).json({
            message: `FOUND: Blog Post dengan id: ${postId} telah ditemukan`,
            data: result
        })
    })
    .catch(err=>{
        next(err)
    })
}

// PUT
exports.updateBlogPost =(req, res, next)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        const err = new Error (`Input Value Invalid`);
        err.errorStatus = 400;
        err.data = errors.array(); //array
        throw err;
    }
    
    //check error untuk inputan file
    if(!req.file){
            const err = new Error('Must Upload An Image');
            err.errorStatus = 422;
            throw err;
        }
        
        const title = req.body.title;
        const body = req.body.body;
        const image = req.file.path
        const postId = req.params.postId

        BlogPostModel.findById(postId)
        .then(post => {
            if(!post){
                const error = new Error (`NOT FOUND: Blog Post tidak ditemukan`)
                error.errorStatus = 404;
                throw error;
            }

            post.title = title
            post.body = body
            post.image = image

            return post.save();
        })
        .then(result=>{
            res.status(200).json({
                message: `update Blog Post sukses!`,
                data: result
            });
        })
        .catch(err=>{
            next(err);
        })
}

// DELETE
exports.deleteBlogPost =(req, res, next)=>{
    const postId = req.params.postId

    BlogPostModel.findById(postId)
    .then(post=>{
        if(!post){
            const err = new Error (`Blog Post tidak ditemukan`);
            err.errorStatus = 404;
            throw err;
        }

        removeImage(post.image); //--> remove image

        return BlogPostModel.findByIdAndRemove(postId) //--> remove (data) blog post
    })
    .then(result=>{
        res.status(200).json({
            message: `Blog Post berhasil dihapus`,
            data: result
        })
    })
    .catch(err => {
        next(err)
    })
}

const removeImage =(filepath)=>{
    console.log(`filepath:`, filepath);
    console.log(`__dirname:`, __dirname);

    //C:\Users\Lenovo\Desktop\Prawito-MERN\mern-api\images\image-name.jpg
    filepath = path.join(__dirname, `../..`, filepath);
    fs.unlink(filepath, err=>console.log(err))
}