const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book');
const helper = require('../helpers/auth');

router.get('/', helper.isAuthorized, bookController.findAll)
  .get('/search', helper.isAuthorized, bookController.searchByTitle)
  .get('/:id', helper.isAuthorized, bookController.findOne)
  .post('/', helper.isAuthorized, bookController.insertOne)
  .put('/:id', helper.isAuthorized, bookController.updateOne)
  .delete('/:id', helper.isAuthorized, bookController.deleteOne)

module.exports = router