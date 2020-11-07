//userController.js
//Import User Model 
const nodemailer = require('nodemailer')
const bcrypt = require('bcrypt')
var User = require('../models/userModel');

// mail ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const main = {email:'fjol4g@gmail.com'}
let testAccount ;
var transporter;
nodemailer.createTestAccount().then(r=>{
    testAccount = r
}).then(()=>{
    
 transporter= nodemailer.createTransport({
       host: 'smtp.ethereal.email',
       port: 587,
       secure: false,
       auth: {
         user: testAccount.user,
         pass: testAccount.pass
       },
     });

})

//   ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// generate password
const generatePassword = (length=8) => {
    const charset='AZERTYUIOPQSDFGHJKLMWXCVBNM1234567890azertyuiopqsdfghjklmwxcvbn';
    let password = ''
    for (let index = 0; index < length; index++) {
        let at = Math.floor(Math.random()*(charset.length+1))
        password+=charset[at]
    }
    return password;
}

//For index
exports.index = async (req, res) => {
try {
   let data = await User.findById(req.params.id)
   data ? res.status(200).json({
        status: "success",
        message: "Got user Successfully!",
        data:data
    }) :  res.status(404).json({
        status: "fail",
        message: "user not found!"
    });
} catch (error) {
    res.status(409).res({message:error.message})
}
   
};

//For creating new user
exports.add = async (req, res)=> {
     var user = req.body;
     let tpassword = generatePassword();
     user.password = await bcrypt.hashSync(tpassword,10, (err, hash) =>{
        return user.password=hash
     });
     
     var newUser = new User(user);
     console.log(tpassword  )
    try {
        await newUser.save()
        
        var mailOptions = {
            from: main.email,
            to: user.email,
            subject: 'Your new password on Elearning!',
            text: 'Your password is '+tpassword
        };

        await transporter.sendMail(mailOptions,function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          })
        res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json({message: error.message})
    }

};

// find a user with email and password 
exports.auth = async (req, res) => {
    const {email, password} = req.body;

    try {
        let userFound = await User.findOne({"email":email})
        
    bcrypt.compareSync(password,userFound.password) ?
        res.status(200).json({
            message : "success",
            data: userFound
        }):
        res.status(404).json({
            message : "not found",
            data: "Your email or your password is invalid.."
        })

    } catch (error) {
        res.status(404).json({message:error.message})
    }
}



// View user
exports.view = function (req, res) {
    user.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'user Details',
            data: user
        });
    });
};

// Update user
exports.update = function (req, res) {
    user.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        user.name = req.body.name ? req.body.name : user.name;
        user.email = req.body.email;
        user.phone = req.body.phone;
        user.address = req.body.address;

//save and check errors
        user.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "user Updated Successfully",
                data: user
            });
        });
    });
};

// Delete user
exports.delete = function (req, res) {
    user.deleteOne({
        _id: req.params.user_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'user Deleted'
        })
    })
}