var express = require('express')
var passport = require('passport')
var passportLocal = require('passport-local')
var Strategy = passportLocal.Strategy
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');
var jwt = require('jsonwebtoken');
var User = require('./model/user');
var app = express()

app.use(bodyParser.urlencoded({ extended: true }))

var index = require('./routes/index');

app.use('/', index);

passport.use(new Strategy(
	function(username, password, cb) {
		User.findOne({ username: username }, function(err, person) {
			if(err) res.send(err.message);

			if(person.username == username && person.password == password) {
				console.log(username);
				console.log(password);
				cb(null, person);
			}else {
				cb('USERNAME AND PASSWORD NOT MATCH!')
			}

		});

	}

))

app.use(passport.initialize());

app.use('/login', passport.authenticate('local', { session: false }), (req,res,next) => {
	var token = jwt.sign({username: req.body.username, password: req.body.password}, 'secret');
    res.send(token);
})

app.listen(3000)

module.exports = app;