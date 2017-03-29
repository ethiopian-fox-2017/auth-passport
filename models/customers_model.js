const mongoose = require("mongoose");
const db = require("./db");

let customerSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  memberid: {
    type: String,
    unique: true
  },
  address: String,
  zipcode: String,
  phone: String
});

let Customer = db.model("Customer", customerSchema);

module.exports = Customer
