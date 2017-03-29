const Customer = require('../models/customer')

module.exports = {

  createCustomer : (req, res)=> {
    let newCustomer = Customer({
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    })
    newCustomer.save((err)=> {
        if(err) {
          res.send('Add new Customer failed')
        } else {
          res.send(`${req.body.name} added into Database`)
        }
    })
  },
  listCustomer : (req, res)=> {
    Customer.find({}, (err, customers)=> {
      if(err) {
        res.send('Request Data to server failed')
      } else {
        res.send(customers)
      }
    })
  },
  deleteCustomer : (req, res)=> {
    Book.findByIdAndRemove(req.params.objectId, (err, customer)=> {
      if(err){
        res.send('Delete customer failed')
      } else {
        res.send(`Customer ${customer.name} deleted`)
      }
    })
  },
  editCustomer : (req, res)=> {
    Customer.findOneAndUpdate(
      { _id: req.params.objectId},
      {
        name: req.body.name,
        memberid: req.body.memberid,
        address: req.body.address,
        zipcode: req.body.zipcode,
        phone: req.body.phone
      }, (err, customer)=> {
        if(err) {
          res.send('Update data Failed')
        } else {
          res.send(`Customer ${customer.name} updated`)
        }
      }
    )
  }
}