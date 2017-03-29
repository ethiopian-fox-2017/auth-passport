var express = require('express');
var router = express.Router();
var book = require('../controller/book')

/* GET home page. */
router.get('/', book.findAll);

router.post('/', book.add);

router.delete('/:isbn', book.delete);

router.put('/:isbn', book.update);

module.exports = router;
