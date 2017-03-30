var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var passport = require('passport');
var passwordHash = require ('password-hash')
var Strategy = require('passport-local').Strategy
var User = require('./models/user')
var users = require('./routes/users');
// var customers = require('./routes/customers')
// var answers = require('./routes/answers')
// var votes = require('./routes/votes')
// var logins = require('./routes/logins')

var app = express();



passport.use(new Strategy(function(username, password, cb) {
  User.findOne({'username': username}, (err,data) => {
    if(err) {
      return cb(err);
    } else {
      if(data != null) {
        if (passwordHash.verify(password, data.password)) {
          return cb(null, data)
        } else {
          return cb('wrong password!')
        }
      } else {
        return cb('User not found')
      }

    }
  })
}));

app.use(passport.initialize());




app.use(logger('dev'))
mongoose.promise = global.promise
mongoose.connect('mongodb://localhost/authpassport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000)



app.use('/api/users', users)
// app.use('/api/customers', customers);
// app.use('/api/user', users);
// app.use('/api/answer', answers);
// app.use('/api/vote', votes);

module.exports = app
