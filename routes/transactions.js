var express = require('express');
var router = express.Router();
var transactionsController = require('../controllers/transactionsController');
var middleware = require('../helpers/authentication');


/* ADD TRANSACTION */
router.post('/', middleware.authenticateAdmin, transactionsController.addTransaction);

/* SHOW TRANASACTIONS */
router.get('/', middleware.authenticateAdmin, transactionsController.showTransactions)

module.exports = router;
