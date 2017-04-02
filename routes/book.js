const express = require('express');
const router = express.Router()
const bookController = require('../controllers/book-controller');
const verifier = require('../helpers/jwt');

router.post('/', verifier, bookController.createBook)

router.get('/', verifier, bookController.getAllBook)

router.put('/:id', verifier, bookController.updateBook)

router.delete('/:id', verifier, bookController.deleteBook)


module.exports = router;
