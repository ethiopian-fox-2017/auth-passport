'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema ({
  "name"     : String,
  "memberid" : String,
  "address"  : String,
  "zipcode"  : String,
  "phone"    : String,
  "username" : String,
  "password" : String,
  "role"     : String
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer
