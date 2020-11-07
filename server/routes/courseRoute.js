const courseController = require('../controllers/courseController')
const router = require('express').Router()

router
.get('/:id',courseController.getCourses)

module.exports = router
