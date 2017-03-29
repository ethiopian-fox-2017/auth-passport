const express = require("express");
const app = express();
const passport = require('passport');
const passportLocal = require('passport-local');
const hash = require("password-hash");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const Strategy = passportLocal.Strategy;
const bodyParser = require("body-parser");

const db = require("./models/users_model");

app.use(bodyParser.urlencoded({extended: true}))

passport.use(new Strategy(
  (username, password, next) => {
    db.findOne({username: username}, (err, result) => {
      if (result == null) {
      }else {
          if (username == result.username && hash.verify(password, result.password)) {
            let token = jwt.sign({ username: users.username, role: users.role }, process.env.SECRET_KEY);
            next(null, {token: token})
          }else {
            next("Wrong username or password!")
          }
      }
    })
  }
))

app.use(passport.initialize());

let books = require("./routes/books");
let customers = require("./routes/customers");
let transactions = require("./routes/transactions");
let users = require("./routes/users");

app.use("/books", books);
app.use("/customers", customers);
app.use("/transactions", transactions);
app.use("/users", users);

app.listen(3000, () => {
  console.log(`Server started!`);
})
