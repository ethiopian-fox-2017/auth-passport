const express = require('express');
const router = express.Router()
const customerController = require('../controllers/customer');
const helper = require('../helpers/auth');

router.get('/', helper.isAuthorized, customerController.findAll)
  .get('/search', helper.isAuthorized, customerController.searchByName)
  .get('/:id', helper.isAuthorized, customerController.findOne)
  .post('/', helper.isAuthorized, customerController.insertOne)
  .put('/:id', helper.isAuthorized, customerController.updateOne)
  .delete('/:id', helper.isAuthorized, customerController.deleteOne)

module.exports = router