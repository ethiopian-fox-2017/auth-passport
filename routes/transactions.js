var express = require('express');
var transaction = require('../controller/transaction');
var check = require("../helper/check.js");
var router = express.Router();

router.get('/', check.verifyAdmin, transaction.findAll);

router.post('/', check.verifyAdmin, transaction.create);

router.delete('/:id', check.verifyAdmin, transaction.delete);

module.exports = router;
