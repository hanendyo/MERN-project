const { validationResult } = require('express-validator');
const AuthModel = require('../Models/Auth');
const bcrypt = require(`bcryptjs`);
const jwt = require('jsonwebtoken');

exports.userRegister = async (req, res, next)=> {
    try {
        // console.log(`reqbod`,req.body);
        // console.log(`exuser`, exUser);
        const exUser = await AuthModel.findOne();
        const {name, email, password} = req.body

        // validation
        const errors= validationResult(req);
        if(!errors.isEmpty()){
            const err = new Error (`Input Value Invalid`);
            err.errorStatus = 400;
            err.data = errors.array(); //array
            throw err;
        }
       

        // validate existing use
        const existingUser = await AuthModel.findOne({email})
        if(existingUser){
            return res.status(400).json({errorMessage: `An account with this email or username already exist`})
        }

        // hash the password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt)

        // save a new user account to DB
        const newUSer = new AuthModel({
            name: name,
            email: email,
            password: passwordHash
        });
        const savedUser = await newUSer.save()
        .then(result => {
                    console.log(`posting saved`);
                    const hasilPosting = {
                        message: `Register Success`,
                        data: result
                    }
                    res.status(201).json(hasilPosting);
                    next();
                })
                .catch(err => console.log(`register error:`,err))   

        // sign the token
        const token = jwt.sign({
            user: savedUser._id
        }, process.env.JWT_SECRET);
        // console.log(`jwt token:`,token);

        // send the token in a HTTP-only cookie
        res.cookie(`token`, token, {
            httpOnly: true,
        }).send()

    } catch (error) {
        console.error(error);
        res.status(500).send() 
    }
}


exports.userLogin= async (req, res, next) => {
    try {
        console.log(`reqbod`,req.body);
        const {email, password} = req.body

        // validation
        if(!email || !password) {
            return res.status(400).json({errorMessage: `Please enter all required fields`})
        }

        // validate existing user
        const existingUser = await AuthModel.findOne({email});
        
        if(!existingUser){
            return res.status(401).json({errorMessage: `Wrong email or password`})
        }
        // console.log(`eu`,existingUser);

        // validate password
        const correctPassword = await bcrypt.compare(password, existingUser.password);
        if(!correctPassword){
            return res.status(401).json({errorMessage: `Wrong email or password`})
        }
        // console.log(`cp`,correctPassword);

        // sign the token
        const token = jwt.sign({
            user: existingUser._id
        }, process.env.JWT_SECRET);
        console.log(`jwt token:`,token);

        // send the token in a HTTP-only cookie
        res.cookie(`token`, token, {
            httpOnly: true,
        }).send()

    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
}

exports.userLogout = (req, res, next) => {

        res.cookie('token', '', {
            httpOnly: true,
            expires: new Date(0)
        }).send()

}


