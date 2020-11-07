const router = require('express').Router()
//////////////////  Start   //////////////////
router.get('/', function(req, res){
    res.status(200).json({
        status: 'API Works',
        messsage: 'Welcome to Rest API'
    })
})


// Users
const userRoute = require('./userRoute');
router.use('/user',userRoute)

//Courses
const courseRoute = require('./courseRoute')
router.use('/course',courseRoute)

module.exports = router