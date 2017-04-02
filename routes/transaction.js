const express = require('express');
const router = express.Router()
const transactionController = require('../controllers/transaction-controller')
const verifier = require('../helpers/jwt');

router.post('/', verifier, transactionController.createTransaction)

router.get('/', verifier, transactionController.getAllTransaction)

router.put('/:id', verifier, transactionController.updateTransaction)

router.delete('/:id', verifier, transactionController.deleteTransaction)


module.exports = router;
