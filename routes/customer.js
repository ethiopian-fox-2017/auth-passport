var express = require('express');
var router = express.Router();
var Customer = require('../controller/customer')
var jwt = require('../helpers/jwt')

/* GET book list page. */
router.get('/list', Customer.listCustomer)

/* POST add new book */
router.post('/add', Customer.createCustomer)

/* DELETE one book */
router.delete('/delete/:objectId', jwt.verifyAdmin, Customer.deleteCustomer)

/* PUT update a book */
router.put('/update/:objectId', jwt.verifyAdmin,Customer.editCustomer)

module.exports = router;
