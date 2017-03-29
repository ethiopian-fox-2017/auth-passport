const express = require('express');
const router = express.Router()
const userController = require('../controllers/user');
const helper = require('../helpers/auth');

router.get('/', helper.isAuthorized, userController.findAll)
  .get('/:id', helper.isAuthorized, userController.findOne)
  .post('/', helper.isAuthorized, userController.insertOne)
  .put('/:id', helper.isAuthorized, userController.updateOne)
  .delete('/:id', helper.isAuthorized, userController.deleteOne)

module.exports = router