var express = require('express');
var router = express.Router();
var book = require('../controller/book');
var check = require("../helper/check.js");

/* GET home page. */
router.get('/', check.verify, book.findAll);

router.get('/:id', check.verify, book.findOne);

router.post('/', check.verifyAdmin, book.add);

router.delete('/:id', check.verifyAdmin, book.delete);

router.put('/:id', check.verifyAdmin, book.update);

module.exports = router;
