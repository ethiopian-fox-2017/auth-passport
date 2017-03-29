const mongoose =  require('mongoose')
let Schema = mongoose.Schema

const userSchema = new Schema ({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User