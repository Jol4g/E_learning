const express = require("express")
const user = express.Router()
const cors = require("cors")
const Cours = require("../models/Cours")
const Teacher = require("../models/Teacher")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
//var User = mongoose.model('User')
user.use(cors())

const multer = require("multer");
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
        cb(null, file.originalname);
    },
});

let upload = multer({
    storage: storage,
    limits: {fileSize: 5 * 1024 * 1024},
}).single("file");

user.post('/uploadFile', upload, (req, res) => {

    console.log(req.file.path);
    res.status(200).json({status: 'done'});

})

user.get('/getFiles', (req, res) => {

    const fs = require('fs')
    let files = [];

    fs.readdirSync('uploads/').forEach(file => {
        console.log(file);
        files.push(file);
    });
    res.status(200).send({files:files})
    // var file = fs.createReadStream('./uploads/016057882890_td2csmacd-correctionex4.pdf');
    // res.setHeader('Content-Type', 'application/pdf');
    // res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');
    // file.pipe(res);
})

user.get('/getChapter', (req, res) => {
    Cours.find({})
        .then(
            (doc) => {
                res.status(200).json(doc);
            })
})

user.post('/addCourse', (req, res) => {

    const TeacherData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    }

    Teacher.findOne({email: TeacherData.email})
        .then(user => {
            if (!user) {
                bcrypt.hash(TeacherData.password, 10, (err, hashed) => {
                    Teacher.create({
                        first_name: TeacherData.first_name,
                        last_name: TeacherData.last_name,
                        email: TeacherData.email,
                        password: hashed
                    }).then(
                        doc => {
                            Cours.create({
                                    category: req.body.categorie,
                                    description: req.body.description,
                                    user_id: doc._id
                                }
                            ).then(sepadti => {
                                res.json({status: ' registered true !'})
                            })
                                .catch(err => {
                                    res.send('error: ' + err)
                                })
                        }
                    )
                        .catch(err => res.status(500).json({message: err}))

                })
            } else {
                res.status(500).json({message: "user exists"})

            }
        })

})


module.exports = user
