const express = require('express');
const bodyParser = require('body-parser');
const passwordHash = require('password-hash');
const passport = require('passport');
const passportStrategy = require('passport-local').Strategy;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');

const index = require('./routes/index');
const books = require('./routes/books');
const customers = require('./routes/customers');
const transactions = require('./routes/transactions');
const users = require('./routes/users');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/books', books);
app.use('/customers', customers);
app.use('/transactions', transactions);
app.use('/users', users);

app.use(passport.initialize());

passport.use(new passportStrategy(
  function(username, password, cb) {
    // ganti
    let User = require('./models/user');
    User.findOne({ username: username }, function(err, user) {
      if (err) cb(err)
      if (passwordHash.verify(password, user.password)) {
        cb(null, user)
      } else {
        cb('Password is not correct')
      }
    })
    //
  }
));

app.listen('3000')