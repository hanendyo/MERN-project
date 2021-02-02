const express = require('express'); //--> untuk membuat server!
const cors = require('cors') //--> Bypass CORS blockage
const bodyParser = require('body-parser') //--> parsing data
const mongoose = require('mongoose') //--> mongoDB
const multer = require('multer') //--> multiplatform / form-data
const path = require('path') //-->
const moment = require('moment') //--> momentjs, for time

const app = express();

// ROUTES
// const productsRoutes = require('./src/Routes/Products')
const authRoutes = require('./src/Routes/Auth')
const blogRoutes = require('./src/Routes/Blog')



// multer --> untuk upload image
const fileStorage = multer.diskStorage({
    
    destination: (req, file, cb)=>{
        cb(null, './images');
        // console.log(`path: `,cb(`images`));
    },
    filename: (req, file, cb)=>{
        cb(null, moment().format(`DD-MM-YYYY`) + '-' + file.originalname ) //--> pake moment js
    }


})

const fileFilter = (req, file, cb) =>{
    console.log(`mime:`, file.mimetype);
    if(
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/jpg' 
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

// MIDDLEWARE
// Body-parser
app.use(bodyParser.json());
// app.use(multer().array());
//
app.use(`/images`, express.static(path.join(__dirname,`images`))) //-->//express.static// membuat url static untuk diakses
// 
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'))
//
// Bypass CORS blockage
app.use(cors());
//
// app.use('/v1/customer', productsRoutes); //--> path nya mau kemana.
app.use('/v1/auth', authRoutes);
app.use('/v1/blog', blogRoutes);



//
app.use((error, req, res, next)=>{
    
    // const {status, message, data } = error
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;
    
    res.status(status).json({message: message, data: data})
})

// mongoose // connecting to mongoDB
mongoose.connect(`mongodb+srv://hanendyo:graffity15@cluster-mern.bd3fr.mongodb.net/blog?retryWrites=true&w=majority`)
.then(()=>{
    // .listen() // menjalankan server di port 5000
    app.listen(5000, ()=> console.log(`connection to mongoDB success!`));
})
.catch(err => console.log(err))
//! ketika user mengakes data lewat url, maka http method hanya GET, karena memang hanya meng-GET data saja.