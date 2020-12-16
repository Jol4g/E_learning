
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define collection and schema for user
let UserShema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String,
    required :true,
    //validate: [{ validator: value => isEmail(value), msg: 'Invalid email.' }]

  },
  password: {
    type: String,
   required :true
  },
  date: {
    type: Date,
    default : Date.now,
    //          1m   1h   1j * 30jrs
  },
  isrole: {
    type: String,
    default : "user"
  },
  // avatar: {
  //   type: String,
  //   default : "avatar.jpg"
  // },
  // isEmailVerified:
  // {
  //   type :Boolean ,
  //   default:false
//    }
//  ,
  

  

});

module.exports = mongoose.model('teacher', UserShema);