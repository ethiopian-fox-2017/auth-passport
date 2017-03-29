var express = require('express');
var customer = require('../controller/customer');
var check = require("../helper/check.js");
var router = express.Router();
var passport = require('passport');
var passportLocal = require('passport-local');
var Strategy = passportLocal.Strategy;

/* GET home page. */
router.get('/', check.verifyAdmin, customer.findAll);

router.get('/:id', check.verifyAdmin, customer.findOne);

router.post('/', check.verifyAdmin, customer.create);

router.delete('/:id', check.verifyAdmin, customer.delete);

router.put('/:id', check.verify, customer.update);

router.post('/signup', customer.signup);

router.post('/signin', passport.authenticate('local',{ session: false }), customer.signin);

module.exports = router;
