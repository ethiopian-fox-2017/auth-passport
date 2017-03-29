'use strict'

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create a Schema
let customerSchema = new Schema({
  name: String,
  memberid: {type: String, required: true, unique: true},
  address: String,
  zipcode: String,
  phone: String
});

//the schema is useless so far
//we need to create a model using it
let Customer = mongoose.model('Customer', customerSchema);

//make this available to our users in our Node Applications
module.exports = Customer;
