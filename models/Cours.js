const mongoose = require('mongoose')
const Schema = mongoose.Schema
var coursShema = new Schema({
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  chapitres:{type:String} 
  ,
  qcm: [Object],
  user_id:{
  type : String,
  required : true
  },
  date: {
    type: Date,
    default : Date.now
  },
});

module.exports = mongoose.model('courses', coursShema);