'use strict'

const express = require('express');
let router = express.Router();
let Customer = require('../models/customer');
let controller = require('../controllers/customerController');
let helpers = require('../helpers/authentication');

/* GET home page. */
router.get('/', helpers.authenticate, controller.getAll);

router.post('/', helpers.authenticate, controller.createOne);

router.put('/:memberid', helpers.authenticate, controller.update);

router.delete('/:memberid', helpers.authenticate, controller.deleteOne);

module.exports = router;
