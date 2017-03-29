var express = require('express');
var router = express.Router();
var url = 'mongodb://localhost/library';
var bookController = require("../controller/bookcontroller");
var customerController = require("../controller/customercontroller");
var transactionController = require("../controller/transactioncontroller");
var passport = require('passport')
var userController = require("../controller/usercontroller");
var auth = require('../helpers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Index")
});

router.get('/books', auth, bookController.getAllBook);
router.post('/books', auth, bookController.createBook);
router.put('/books/:id', auth, bookController.updateBook);
router.delete('/books/:id', auth, bookController.deleteBook);


router.get('/transaction', transactionController.getAllTransaction);
router.post('/transaction', transactionController.createTransaction);
router.put('/transaction/:id', transactionController.updateTransaction);
router.delete('/transaction/:id', transactionController.deleteTransaction);

router.post('/customer', customerController.createCustomer);
router.get('/customer', customerController.getAllCustomer);
router.put('/customer/:id', customerController.updateCustomer);
router.delete('/customer/:id', customerController.deleteCustomer);

router.post('/users', userController.createUser);
router.post('/login', passport.authenticate('local', {session: false}), userController.login);


module.exports = router;
