const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('../config/mongo.js')



const userSchema = new Schema({
  username : String,
  email : String,
  password : String,
  role : String
})

const User = mongoose.model('User', userSchema)

module.exports = User
