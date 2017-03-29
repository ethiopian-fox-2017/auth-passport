const express = require('express');
const router = express.Router()
const transactionController = require('../controllers/transaction-controller')

router.post('/', transactionController.createTransaction)

router.get('/', transactionController.getAllTransaction)

router.put('/:id', transactionController.updateTransaction)

router.delete('/:id', transactionController.deleteTransaction)


module.exports = router;
