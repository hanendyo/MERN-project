const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthModel = new Schema({
    name: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model(`AuthModel`, AuthModel);
