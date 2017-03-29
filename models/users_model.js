const mongoose = require("mongoose");
const db = require("./db");

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password:{
    type: String,
  },
  email: {
    type: String,
    unique: true
  },
  role: {
    type: String,
  },
});

let User = db.model("User", userSchema);

module.exports = User
