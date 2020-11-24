
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define collection and schema for user
let imageShema = new Schema({
 
      url: {
        type: String,
        required :true
      },
      sepadri_id :{
        type : String,
        required :true
        }
  
});


module.exports = mongoose.model('image', imageShema);