const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthModel = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true} //memberi waktu
)

module.exports = mongoose.model(`AuthModel`, AuthModel);
