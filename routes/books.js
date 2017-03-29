'use strict'

const express = require('express');
let router = express.Router();
let Book = require('../models/book');
let controller = require('../controllers/bookController');
let helpers = require('../helpers/authentication');

/* GET home page. */
router.get('/', controller.getAll);

router.post('/', helpers.authenticate,controller.createOne);

router.put('/:isbn', helpers.authenticate,controller.update);

router.delete('/:isbn', helpers.authenticate,controller.deleteOne);


module.exports = router;
