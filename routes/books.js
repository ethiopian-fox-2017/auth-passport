var express = require('express')
var router = express.Router()
var Book = require('../controllers/book')
var auth = require('../helper/auth')

router.get('/', auth.isAuthenticated, Book.list)

      .post('/', auth.isAuthenticated, Book.create)

      .get('/search', auth.isAuthenticated, Book.search)

      .get('/:id', Book.findWithId)

      .delete('/:id', auth.isAuthenticated,Book.delete)

      .put('/:id', auth.isAuthenticated,Book.update)





module.exports = router
