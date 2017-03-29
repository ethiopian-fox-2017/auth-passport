var express = require('express');
var router = express.Router();
var booksController = require('../controllers/booksController');
var middleware = require('../helpers/authentication');

/* ADD BOOK */
router.post('/', middleware.authenticateBoth, booksController.addBook);

/* SHOW BOOKS */
router.get('/', middleware.authenticateBoth, booksController.showBooks);

/* DELETE BOOK */
router.delete('/:bookId', middleware.authenticateAdmin, booksController.deleteBook);

/* UPDATE BOOK */
router.put('/:bookId', middleware.authenticateAdmin, booksController.updateBook);

module.exports = router;
