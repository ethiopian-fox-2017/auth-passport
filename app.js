const express = require('express');
const index  = require('./routes/index');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const passportLocal = require('passport-local');
const Strategy  = passportLocal.Strategy;
const User = require('./models/user');
const pwh = require('password-hash');
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', index)

passport.use(new Strategy(function(username, password, cb) {
  User.findOne({username : username}, function(err, data) {
    if (err) {
      return cb(err)
    } else {
      if (data != null) {
        if (pwh.verify(password, data.password)) {
          return cb(null, data)
        } else {
          return cb("Password Salah cuy !")
        }
      } else {
        return cb("User tidak di temukan!")
      }
    }
  })
}))

mongoose.connect('mongodb://localhost/library')
mongoose.connection.on('connected', function() {
  console.log('Mongodb is running!');
})
app.listen(3000, function() {
  console.log("Server Jalan");
})