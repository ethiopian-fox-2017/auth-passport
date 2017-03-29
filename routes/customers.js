var express = require('express');
var customer = require('../controller/customer')
var router = express.Router();
var passport = require('passport');
var passportLocal = require('passport-local');
var Strategy = passportLocal.Strategy;

/* GET home page. */
router.get('/', customer.findAll);

router.post('/', customer.create);

router.delete('/:memberid', customer.delete);

router.put('/:memberid', customer.update);

router.post('/signup', customer.signup);

router.post('/signin', passport.authenticate('local',{ session: false }), customer.signin);

module.exports = router;
