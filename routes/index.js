var express = require('express');
var passport = requir('passport');
// var Strategy

var app = express.Router()
var helper = require('../helpers/auth');

app.post('/register', helper.register);
app.post('/login', );

module.exports = app
