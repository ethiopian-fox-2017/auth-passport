var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var middleware = require('../helpers/authentication');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//SIGN UP
router.post('/signup', usersController.signup)


//-----LOGIN------       ----USING PASSPORT AS MIDDLEWARE HERE---    --IF PASSPORT PASSED, GIVE TOKEN--//
router.post('/login', passport.authenticate('local',{session: false}), usersController.login)

//GET ALL USER ( ACCESS LEVEL : ADMIN ONLY )
router.get('/', middleware.authenticateAdmin, usersController.showUsers)

module.exports = router;
