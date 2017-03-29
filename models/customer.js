const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('../config/mongo.js')

const customerSchema = new Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
