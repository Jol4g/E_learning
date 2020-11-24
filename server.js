var express =require("express")
var cors =require("cors")
var bodyParser =require("body-parser")
var app =express()
var mongosse =require("mongoose")
const jwt = require("jsonwebtoken")
var auth = require('./middleware/islogger');

mongosse.Promise = global.Promise;
var port = process.env.PORT || 5000
app.use(bodyParser.json())
app.use(cors())
//app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
const URL ="mongodb+srv://Fedi:Fedi@cluster0.oxfzo.mongodb.net/elearning?retryWrites=true&w=majority"

mongosse.connect(URL,{useNewUrlParser: true,useUnifiedTopology: true })
.then(() => console.log("MongoDB is connected"))
.catch(err =>console.log(err))
mongosse.set('useNewUrlParser', true);
mongosse.set('useFindAndModify', false);
mongosse.set('useCreateIndex', true);

app.use('/public/image/Sepadri',express.static('./public/image/Sepadri'))
//instance all routes inmy application 

var Public = require('./routes/Public')
var Users = require('./routes/Users')
var User= require('./routes/User')
var Admin = require('./routes/Admin')

//use middelware islogger in my route user
app.use('/User',User);
app.use('/users',Users)
app.use('/public',Public)
// app.use('/admin',auth.isadmin,Admin)
app.use('/admin',Admin)

//run server 
app.listen(port, () => {
    console.log("server is running " +port)
})
