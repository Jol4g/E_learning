const express = require("express")
const user = express.Router()
const cors = require("cors")
const Cours = require("../models/Cours")
const Teacher = require("../models/Teacher")
const jwt = require("jsonwebtoken")
const fs = require('fs')
const bcrypt = require('bcrypt')
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
        Cours.find({})
            .then(
                (doc)=>{
                    res.status(200).json(doc);
                })
    })

    user.post('/addCourse',(req, res) => {
        
        const TeacherData = {
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email: req.body.email,
            password : req.body.password
        }

    Teacher.findOne({email:TeacherData.email})
        .then(user=>{
            if(!user){
                bcrypt.hash(TeacherData.password,10,(err,hashed)=>{
                    Teacher.create({
                        first_name:TeacherData.first_name,
                        last_name:TeacherData.last_name,
                        email:TeacherData.email,
                        password:hashed
                    }).then(
                        doc =>{
                            Cours.create({
                                category: req.body.categorie,
                                description  :req.body.description,
                                user_id : doc._id
                            }
                            ).then(sepadti => {
                                res.json({ status:  ' registered true !' })
                            })
                            .catch(err => {
                                res.send('error: ' + err)
                            })
                        }
                    )
                    .catch(err=>res.status(500).json({message:err}))

                })
            }
            else{
                res.status(500).json({message:"user exists"})

            }
        })

    })




module.exports = user