var express = require('express');
var router = express.Router();
var Customer = require('../controllers/customer')
var help = require('../helper/auth')

/*
  Routing for Customer with schema
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
*/
router.get('/', help.isAuthenticated,Customer.list)

      //Tampilkan list Customer
      .get('/list', help.isAuthenticated, Customer.list)


      // //Tampilkan form create
      .get('/create', (req, res, next) => {
        res.send('Tampilkan Form Create Book')
      })
      //
      //Tampilkan form update => http://localhost:3000/customers/update/58da5b5d1be0ec9b4f9282ed
     .get('/update/:id',Customer.find)

      //
      .put('/update/:id', Customer.update)


      //
      .post('/', help.isAuthenticated, Customer.create)
      //
      .delete('/:id',help.isAuthenticated, Customer.delete)

      .get('/search',help.isAuthenticated, Customer.search)

module.exports = router;
