'use strict'

const express = require('express');
let router = express.Router();
let Transaction = require('../models/transaction');
let controller = require('../controllers/transactionController');
let helpers = require('../helpers/authentication');

/* GET home page. */
router.get('/', helpers.authenticate, controller.getAll);

router.post('/', helpers.authenticate, controller.createOne);


module.exports = router;
