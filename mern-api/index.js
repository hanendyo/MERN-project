const express = require('express'); //--> untuk membuat server!
const cors = require('cors') //--> Bypass CORS blockage
const bodyParser = require('body-parser') //--> parsing data
const mongoose = require('mongoose') //--> mongoDB
const multer = require('multer') //--> multiplatform / form-data
const path = require('path') //--> default nodejs
const moment = require('moment') //--> momentjs, for time

const app = express();

// Bypass CORS blockage //
app.use(cors());


// ROUTES
// const productsRoutes = require('./src/Routes/Products')
const authRoutes = require('./src/Routes/Auth')
const blogRoutes = require('./src/Routes/Blog')



// multer --> untuk upload image
const fileStorage = multer.diskStorage({
    
    destination: (req, file, cb)=>{
        cb(null, './images');
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

// MIDDLEWARE //
// Body-parser //
app.use(bodyParser.json());
// app.use(multer().array());
// express.static //
app.use(`/images`, express.static(path.join(__dirname,`images`))) //--> membuat url static untuk diakses
// 
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'))
//

//
// app.use('/v1/customer', productsRoutes); //--> path nya mau kemana.
app.use('/v1/auth', authRoutes);
app.use('/v1/blog', blogRoutes);



// check error secara global
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

//! Method default dari browser adalah GET, maka selain itu tidak bisa
//! ketika user mengakes data lewat url, maka http method hanya GET, karena memang hanya meng-GET data saja.