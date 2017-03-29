var express = require('express');
var bodyParser = require('body-parser');
var passHash = require('password-hash');
var passport = require('passport');
var passportLocal = require('passport-local');
var Strategy = passportLocal.Strategy;
var Customer = require('./models/customer');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/passport_crud')

var index = require('./routes/index');
var books = require('./routes/books');
var transactions = require('./routes/transactions');
var customers = require('./routes/customers');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', index);
app.use('/books', books);
app.use('/transactions', transactions);
app.use('/customers', customers);

app.use(passport.initialize());

passport.use(new Strategy((username,password,callback) => {
  Customer.findOne({username:username}, (error,user) => {
    if(error || user == null){
      callback('username not found')
    } else {
      if(password != null && passHash.verify(password, user.password)){
        callback(null,user)
      } else {
        callback('invalid username or password')
      }
    }
  })
}));

app.listen(3000)

module.exports = app
