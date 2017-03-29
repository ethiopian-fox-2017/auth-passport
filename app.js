var express = require('express');
var bodyParser = require('body-parser')
var passport = require('passport');
var passportLocal = require('passport-local');
var Strategy = passportLocal.Strategy;
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

// app.use('/', passport.authenticate('local',{ session: false }), function(req,res){
//   res.send('alive')
// })

app.listen(3000)

module.exports = app
