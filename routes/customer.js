const express = require('express');
const router = express.Router()
const customerController = require('../controllers/customer-controller');
const verifier = require('../helpers/jwt');

router.post('/', verifier, customerController.createCustomer)

router.get('/', verifier, customerController.getAllCustomer)

router.put('/:id', verifier, customerController.updateCustomer)

router.delete('/:id', verifier, customerController.deleteCustomer)



module.exports = router;
