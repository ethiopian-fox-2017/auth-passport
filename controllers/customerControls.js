const Customer = require('../models/customer')

let createCustomer = (req, res) => {
  let newCust = new Customer({
    name:req.body.name,
    memberid:req.body.memberid,
    address:req.body.address,
    zipcode:req.body.zipcode,
    phone:req.body.phone
  })

  newCust.save((err,data) => {
    if(err) {
      res.send(err.message);
    } else {
      res.send(data)
    }
  })

}

let readCustomer = (req, res) => {
  Customer.find((err,results) => {
    if(err) {
      res.send(err.message);
    } else {
      res.send(results)
    }
  })
}

let updateCustomer = (req, res) => {
  Customer.findByIdAndUpdate(req.params.id,{
    name:req.body.name,
    memberid:req.body.memberid,
    address:req.body.address,
    zipcode:req.body.zipcode,
    phone:req.body.phone
  },(err) => {
    if(err) {
      res.send(err.message)
    } else {
      res.send('data berhasil di apdet');
    }

  })
}

let deleteCustomer = (req, res) => {
  Customer.findByIdAndRemove(req.params.id, (err) => {
    if(err) {
      res.send(err.message)
    } else {
      res.send('data berhasil diapus');
    }
  })
}

module.exports = {createCustomer,deleteCustomer,readCustomer,updateCustomer};