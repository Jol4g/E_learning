const express = require("express")
const Admin = express.Router()
const cors = require("cors")
const Sepadri = require("../models/Cours")
//var image = require("../models/Image")
var User = require("../models/User")
var fs = require('fs');
//var User = mongoose.model('User')
Admin.use(cors())
//accept new post
Admin.get('/accept/:_id', (req, res) => {
   
Sepadri.findByIdAndUpdate(req.params._id,{  isaccept : true },function (err, sepadri) {
    if (err) 
    console.log(err)
    else
   console.log(sepadri)
   
  })
  res.json({ "okk": req.params._id })
})
//blocked post 
Admin.get('/bloked/:_id', (req, res) => {
   
    Sepadri.findByIdAndUpdate(req.params._id,{  isaccept : false },function (err, sepadri) {
        if (err) 
        console.log(err)
        else
       console.log(sepadri)
       
      })
      res.json({ "okk": req.params._id })
    })


Admin.get('/delete/:_id', (req, res) => {
    res.json({ "okk": "welcome Admin" })

   Sepadri.findById(req.params._id,(error,data)=>{
        if(error)
        console.log('erreur')
        else
    console.log(data.product_image)
    obj = JSON.parse(data.product_image)
    console.log(obj)
    for(var k in obj) {
        console.log(obj[k]);
        fs.unlink(obj[k], function (err) {
            if (err) throw err;
            // if no error, file has been deleted successfully
            console.log('File deleted!');
        });
    }
    
    })

Sepadri.findByIdAndRemove(req.params._id, (error, data)=>{
        if(error){
            console.log("error in deleting yo!");
            throw error;
        } else {
            console.log("data all gone and deleted yo");
            res.status(204);

        }
    });


})


Admin.get('/isblocked',function(req,res){
    Sepadri.find({ 'isaccept': false }, function (err, data) {
        if(err){
         // return done(err);
         console.log(err)
        }
       // return done(null, data);
       res.json(data)
        }) 
})

//******************************** */selection user
Admin.get('/alluser',function(req,res){
    User.find({}, function (err, data) {
        if(err){
         // return done(err);
         console.log(err)
        }
       // return done(null, data);
      
       res.setHeader("Access-Control-Allow-Credential",true)
       res.setHeader("Access-Control-Allow-Headers","Content-Range")
       res.setHeader("Access-Control-Expose-Headers","Content-Range")
       res.setHeader("X-Total-Count",data.length)

       res.json(data)
        }) 
})
Admin.get('/alladmin',function(req,res){
    User.find({'isrole': "admin"}, function (err, data) {
        if(err){
         // return done(err);
         console.log(err)
        }
       // return done(null, data);
       res.json(data)
        }) 
})
Admin.get('/deleteuser/_id',function(req,res){
    User.findByIdAndRemove(req.params._id, (error, data)=>{
        if(error){
            console.log("error in deleting user!");
            throw error;
        } else {
            console.log("deleted  user");
            res.status(204);

        }
    });
})


module.exports = Admin