const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('../config/db')

var userSchema = new Schema({
  username : String,
  password : String
})

var User = mongoose.model('User', userSchema)

module.exports = User
