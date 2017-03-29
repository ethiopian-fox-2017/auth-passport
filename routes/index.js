const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/user');

router.get('/', function(req, res, next) {
  res.send('Welcome to Library App')
})

router.post('/login', passport.authenticate('local', { session: false }), userController.login);
router.post('/logout', function(req, res, next) {
  req.logout()
  res.send('Logout')
});

module.exports = router