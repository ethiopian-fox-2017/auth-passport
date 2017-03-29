const monggo = require('mongoose');
const Schema = monggo.Schema;

const userSchema = new Schema({
  username: String,
  password: String
})

const User = monggo.model('User', userSchema)

module.exports = User;