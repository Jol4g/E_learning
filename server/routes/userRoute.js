const userController = require('../controllers/userController')
const router = require('express').Router()

//////////////////  Start   //////////////////
router.route('/')
    .post(userController.auth)
    
router.route('/add')
    .post(userController.add)

router.route('/:id')
    .get(userController.index)

module.exports = router