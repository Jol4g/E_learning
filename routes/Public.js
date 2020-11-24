const express = require("express")
const Public = express.Router()
const cors = require("cors")
const Cours = require("../models/Cours")
//var image = require("../models/Image")
var fs = require('fs');
//var User = mongoose.model('User')
Public.use(cors())

Public.get('/all',function(req,res){
    Cours.find({}, function (err, data) {
        if(err){
         // return done(err);
         console.log(err)
        }
       // return done(null, data);
       res.json(data)
        }) 
})
module.exports = Public