var express = require('express');
var router = express.Router();
var Book = require('../controller/book')
var jwt = require('../helpers/jwt')

/* GET book list page. */
router.get('/list', Book.listBook)

/* POST add new book */
router.post('/add', Book.createBook)

/* DELETE one book */
router.delete('/delete/:objectId', jwt.verifyAdmin, Book.deleteBook)

/* PUT update a book */
router.put('/update/:objectId', jwt.verifyAdmin, Book.editBook)

module.exports = router;
