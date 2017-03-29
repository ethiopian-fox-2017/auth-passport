var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport')
var Strategy = require('passport-local').Strategy

var index = require('./routes/index');
var users = require('./routes/users');
var books = require('./routes/books');
var customers = require('./routes/customers')
var transactions = require('./routes/transactions')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var LocalStrategy= require('passport-local').Strategy

passport.use(new LocalStrategy(function(username,password, cb){
  // let dataLogin = {username : 'ridho', password : 'sadega'}
  // if (username === dataLogin.username){
  //   cb(null, dataLogin)
  // }else {
  //   console.log('error');
  //   cb('password Salah')
  // }
  var User = require('./models/user')
  User.findOne({username : username}, (err, user) => {
    if (err) res.send({success : false, error : err , data : null})
    if (user !== null){
      console.log(user);
      cb(null, user)
    }else {
      console.log(user);
      cb('password Salah')
    }
  })

}))

app.use(passport.initialize())


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index)
app.use('/users', users)
app.use('/books', books)
app.use('/customers', customers)

app.use('/transaction', transactions)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});





module.exports = app;
