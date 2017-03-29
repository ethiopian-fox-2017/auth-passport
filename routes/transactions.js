const express = require('express');
const router = express.Router()
const transactionController = require('../controllers/transaction');
const helper = require('../helpers/auth');

router.get('/', helper.isAuthorized, transactionController.findAll)
  .get('/search', helper.isAuthorized, transactionController.searchById)
  .get('/:id', helper.isAuthorized, transactionController.findOne)
  .post('/', helper.isAuthorized, transactionController.insertOne)
  .put('/:id', helper.isAuthorized, transactionController.updateOne)
  .delete('/:id', helper.isAuthorized, transactionController.deleteOne)

module.exports = router