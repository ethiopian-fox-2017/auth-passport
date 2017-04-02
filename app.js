const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const dbUser = require('./models/user-model');
const passwordHash = require('password-hash');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/book')

const passport = require('passport');
const Strategy = require('passport-local').Strategy;

passport.use(new Strategy(
  function(username, password, cb) {
    dbUser.findOne({username: username}, (err, user) => {
      if (passwordHash.verify(password, user.password)) {
        var authenticated = false
        cb(null, {user: user, authenticated: true})
      }else {
        cb('username or password is not exist')
      }
    })
  }
))

app.use(passport.initialize())

const book = require('./routes/book')
const customer = require('./routes/customer')
const transaction = require('./routes/transaction')
const user = require('./routes/user')

app.use(bodyParser.urlencoded({extended: true}))


app.use('/books', book)
app.use('/customers', customer)
app.use('/transactions', transaction)
app.use('/users', user)

app.listen(3000)
