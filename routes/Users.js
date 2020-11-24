const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")

const bcrypt = require("bcrypt")

const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
    // const today = new Date()
    var newUser = new User()
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        cours: req.body.cours
        // created: today
    }

    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    newUser.first_name = userData.first_name
                    newUser.last_name = userData.first_name
                    newUser.email = userData.email
                    newUser.password = userData.password
                    newUser.cours = userData.cours

                    newUser.save()
                        .then(user => {
                            res.json({ message: user.email + ' registered!' })
                        })
                        .catch(err => {
                            res.json({message:  err})
                        })
                })
            } else {
                res.json({message: 'User already exists' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})
users.post('/hello',(req,res)=>{
res.json({hello: 'hello world'})
})

users.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                     payload = {
                        _id: user._id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email,
                        isrole :user.isrole,
                        cours : user.cours,
                        point: user.point
                    }
                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 24  *  60  *  60
                    })
                     payload = {...payload,
                        token : token,
                        expires_in : 24  *  60  *  60
                    }
                  

                    res.send(payload)
                } else {
                    res.json({ error: "User does not exist" })
                }
            } else {
                res.json({ error: "User does not exist" })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

users.get('/profile', (req, res) => {
    
    token=req.headers.authorization
    var decoded = jwt.verify(token, process.env.SECRET_KEY)

    console.log(decoded)

    User.findOne({
        _id: decoded._id
    })
        .then(user => {
            if (user) {
                res.json(user)
            } else {
                res.send("User does not exist")
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })

    

})

module.exports = users