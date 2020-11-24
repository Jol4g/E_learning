const express = require("express")
const user = express.Router()
const cors = require("cors")
 const Cours = require("../models/Cours")
const jwt = require("jsonwebtoken")
const fs = require('fs')
//var User = mongoose.model('User')
user.use(cors())

const multer = require("multer");

// const filefilter =(req,file ,cb)=>{
//     if(file.mimetype ==='image/png' || file.mimetype==='image/jpeg')
//     cb(null,true)
//     else
//     cb(null,false)
// }
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './public/image/Cours')
//     }, 
//     filename: function (req, file, cb) {     
//    cb(null,   file.originalname )
//     }
//   })
  
var upload = multer({
    dest: 'uploads/',
    limits :{
        fileSize : 1024*1024*5}
    });

    user.get('/getChapter', (req, res)=> {
    })

    user.post('/addCours',upload.any(),(req, res) => {

        var chapters = [];
     req.files.forEach(element => {
         chapters.push(element.path);  
     })
    
    console.log(req.files)

    const today = new Date()
    const CoursData = {
        category: req.body.category,
        description  :req.body.description,
        chapitres : JSON.stringify(chapters),
        qcm : req.body.qcm,
        date : today,
        user_id :jwt.verify(req.headers.authorization, process.env.SECRET_KEY)._id,
  
    }
    Cours.create(CoursData)
    .then(sepadti => {
        res.json({ status:  ' registered true !' })
    })
    .catch(err => {
        res.send('error: ' + err)
    })

    })




module.exports = user