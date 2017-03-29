const routes = require('express').Router();
const buku = require('../controllers/bookControls');
const customer = require('../controllers/customerControls');
const transaction = require('../controllers/transactionControls')
const user = require('../controllers/userControls')
const passport = require('passport');
const auth = require('../helpers/jwtHelp')


//login
routes.post('/login',passport.authenticate('local', {session: false}), user.logIn)

//create
routes.post('/books',auth,buku.tambahBuku);
routes.post('/customers',auth, customer.createCustomer);
routes.post('/transactions',auth, transaction.createTransaction);
routes.post('/users',auth,user.createUser);


//read
routes.get('/books',auth, buku.tampilBuku);
routes.get('/customers',auth, customer.readCustomer);
routes.get('/transactions',auth, transaction.readTransaction);


//update
routes.put('/books/:id',auth, buku.updateBuku);
routes.put('/customers/:id',auth, customer.updateCustomer);
routes.put('/transactions/:id',auth, transaction.updateTransaction);

//delete
routes.delete('/books/:id',auth, buku.deleteBuku);
routes.delete('/customers/:id',auth, customer.deleteCustomer);
routes.delete('/transactions/:id',auth, transaction.deleteTransaction);



module.exports = routes;

