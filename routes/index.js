'use strict'

var express = require('express');
var router = express.Router();
var Buku = require('../model/book');
var Customer = require('../model/customer');
var Transaction = require('../model/transaction');
var User = require('../model/user');
var control = require('../controller/controller');
var aut = require('../autentikasi/auths');

/* GET home page. */
router.post('/signup', control.createUsers)

router.get('/books', aut.authToken, control.getBooks);

router.post('/books', aut.authToken, control.createBooks);

router.get('/customers', aut.authToken, control.getCustomers);

router.post('/customers', aut.authToken, control.createCustomers);

router.get('/transactions', aut.authToken, control.getTransactions);

router.post('/transactions', aut.authToken, control.createTransactions);

module.exports = router;
