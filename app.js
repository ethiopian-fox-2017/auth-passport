const express = require('express');
const app = express();
const monggo = require('mongoose');
const passport = require('passport');
const pwh = require('password-hash');
const passportLocal = require('passport-local');
const Strategy = passportLocal.Strategy;
const bodyParser = require('body-parser');
const index = require('./routes/index');
const User = require('./models/user');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));



passport.use(new Strategy(function(_username, _password, cb) {
  User.findOne({username:_username}, (err,data) => {
    if(err) {
      return cb(err);
    } else {
      if(data != null) {
        if (pwh.verify(_password,data.password)) {
          return cb(null, data)
        } else {
          return cb('wrong password!')
        }
      } else {
        return cb('User tidak ditemukan')
      }

    }
  })
}));

app.use(passport.initialize());


app.use('/',index);
monggo.Promise = global.Promise;
monggo.connect('mongodb://localhost/library');
monggo.connection.on('connected', function(){
  console.log('mongodb is connected');
})

app.listen(3000);