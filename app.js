var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan')
var express = require('express');

var app = express()

var passport = require('passport');
var Strategy = require('passport-local').Strategy

const index = require('./routes/index');

app.use(passport.initialize());
require('./helpers/auth')(passport)



app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', index)


app.listen(3000, function () {
  console.log('app listening on port 3000!');
});

module.exports = app
