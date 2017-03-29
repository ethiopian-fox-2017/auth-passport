const express = require('express');
const router = express.Router()
const bookController = require('../controllers/book-controller');

router.post('/', bookController.createBook)

router.get('/', bookController.getAllBook)

router.put('/:id', bookController.updateBook)

router.delete('/:id', bookController.deleteBook)


module.exports = router;
