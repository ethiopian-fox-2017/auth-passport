var express = require('express');
var transaction = require('../controller/transaction')
var router = express.Router();

router.get('/', transaction.findAll);

router.post('/', transaction.create);

router.delete('/:id', transaction.delete);

module.exports = router;
