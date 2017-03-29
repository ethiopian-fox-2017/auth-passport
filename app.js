var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var passport = require('passport')
// const pwHash = require('password-hash')
// const Strategy = require('passport-local').Strategy
// const User = require('./models/user')

mongoose.connect('mongodb://localhost/library')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', ()=> {
  console.log('Mongo Database Connection established')
})

// passport.use(new Strategy( (username, password, cb)=> {
//   User.findOne({username: username}, (err, user)=> {
//     if(err) {
//       cb(err)
//     } else if(pwHash.verify(password, user.password)) {
//       cb(null, user)
//     } else {
//       cb(null, false)
//     }
//   })
// }))

var index = require('./routes/index');
var users = require('./routes/users');
var book = require('./routes/book');
var customer = require('./routes/customer');
var transaction = require('./routes/transaction');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize())

app.use('/', index);
app.use('/users', users);
app.use('/book', book);
app.use('/customer', customer);
app.use('/transaction', transaction);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
