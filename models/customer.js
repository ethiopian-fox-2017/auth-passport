const mongoose =  require('mongoose')
let Schema = mongoose.Schema

const customerSchema = new Schema ({
  name : String,
  memberid : String,
  address : String,
  zipcode : String,
  phone : String
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer