var express = require('express');
var router = express.Router();
var help = require('../helper/auth')
const Transaction = require('../controllers/transaction')


router.post('/',help.isAuthenticated,Transaction.create)

router.get('/:id',help.isAuthenticated,Transaction.findId)

router.put('/:id', Transaction.update )

router.get('/', Transaction.findAll)




module.exports = router;
