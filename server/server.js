//import express framework
const express = require ('express');
//import /api routes 
const apiRoutes = require('./routes/route');
//import body parser
const bodyParser = require('body-parser');
//import mongoose
const mongoose = require('mongoose');
//import cors
const cors = require('cors');

////////////////////-Begin-//////////////////////////
// Start a express app
const app = express();

//use cors

//connect to mongoose
const uri = "mongodb+srv://Fedi:Fedi@cluster0.oxfzo.mongodb.net/elearning?retryWrites=true&w=majority";
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(uri, options);
mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})

//configure bodyparser to handel the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


//use api- routes from routes route file
app.use('/api',apiRoutes)






//////////////// Config Port and Serve ////////////
const PORT = 5000
app.listen(PORT, () => console.log(PORT))
///////////////////- End -/////////////////////////