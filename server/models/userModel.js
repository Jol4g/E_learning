const mongoose = require('mongoose');

//schema
var userSchema = new mongoose.Schema({
    cin: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true 
    },
    type: {
        type: String,
        required: true,
        lowercase: true
    },
})

var userModel = module.exports = mongoose.model('User',userSchema)