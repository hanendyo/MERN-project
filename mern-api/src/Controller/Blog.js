const moment = require("moment");
const {validationResult} = require("express-validator");
const BlogPostModel = require('../Models/Blog')

exports.createBlogPost = (req, res, next)=>{

    // check for error
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        const image = req.file
        const err = new Error (`Input Value Invalid`);
        err.errorStatus = 400;
        err.data = errors.array(); //array
        
        console.log(`isempty: `,errors.isEmpty());
        console.log(`data: `,err.data);
        console.log(`errStat: `,err);
        console.log(`gile: `,image);
        
        throw err;
    }
    
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
        
        const Posting = new BlogPostModel({
            title: title,
            body: body,
            image: image,
            author: {
                uid: 1,
                name: "hanendyo"
            }
    })
    
    Posting.save() //--> SIMPAN KE DATABASE
    .then(result => {
        res.status(201).json({
            message:'Create Blog Post Success',
            data: result
        });
        next();
    })
    .catch(err => console.log(`something wrong:`,err))
}