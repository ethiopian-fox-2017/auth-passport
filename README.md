# auth-passport

a simple library app demo with basic REST API using:
- database: mongodb via mongoose
- authentication : passport
- authorization : jsonwebtoken

## ROUTES

List of routes:

Books routes:

Route | HTTP | Description
----- | ---- | -----------
`/books` | POST | (admin only) Add new book
`/books` | GET | (admin and authorized member only) Get all books
`/books/:id` | GET | (admin and authorized member only) Get a single book by id
`/books/:id` | PUT | (admin only) Update selected book with new information
`/books/:id` | DELETE | (admin only) Delete selected book

Customer routes:

Route | HTTP | Description
----- | ---- | -----------
`/customers/signup` | POST | Sign up new costumer
`/customers/signin` | POST | Sign in customer
`/customers` | POST | (admin only) Add new customer
`/customers` | GET | (admin only) Get all customers
`/customers/:id` | GET | (admin only) Get a single customer by id
`/customers/:id` | PUT | (admin only) Update selected customer with new information
`/customers/:id` | DELETE | (admin only) Delete selected customer

Transaction routes:

Route | HTTP | Description
----- | ---- | -----------
`/transactions` | POST | (admin only) Add new transaction
`/transactions` | GET | (admin only) Get all transactions
`/transactions/:id` | GET | (admin only) Get a single transaction by id
`/transactions/:id` | DELETE | (admin only) Delete selected transaction

## Usage
With only npm:

> `npm install`

> `npm start` or `npm run dev`

Access the website via `http://localhost:3000` or API via `http://localhost:3000/api`.
