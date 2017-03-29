var express = require('express');
var router = express.Router();
var customersController = require('../controllers/customersController');
var middleware = require('../helpers/authentication');


/* ADD CUSTOMER */
router.post('/', middleware.authenticateAdmin, customersController.addCustomer);

/* SHOW CUSTOMERS */
router.get('/', middleware.authenticateAdmin, customersController.showCustomers);

/* DELETE CUSTOMER */
router.delete('/:customerId', middleware.authenticateAdmin, customersController.deleteCustomer);

/* UPDATE CUSTOMER */
router.put('/:customerId', middleware.authenticateAdmin, customersController.updateCustomer)

module.exports = router;
