var express = require('express');
var router = express.Router();
const passport = require('passport')
const User = require('../controller/user')

/* GET users listing. */
router.get('/list', User.showUser);

/* POST user signup */
router.post('/signup', User.signUp)

/* POST user login */
router.post('/signin', passport.authenticate('local', {session: false}), User.signIn)

module.exports = router;
