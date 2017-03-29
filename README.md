# auth-passport

Demo app with auth passport and basic mongoose CRUD.

### auth-passport & mongoose CRUD
List of book routes:

|    Route     |  HTTP  |         Description         |
| ------------ | ------ | --------------------------- |
| /books       | GET    | Get all books               |
| /books       | POST   | Create a book (require login)             |
| /books/:isbn | DELETE | Delete a book (require login)              |
| /books/:isbn | PUT    | Update a book with new info (require login) |

List of customer routes:

|        Route         |  HTTP  |            Description            |
| -------------------- | ------ | --------------------------------- |
| /customers           | GET    | Get all customers (require login) |
| /customers           | POST   | Create a customer (require login) |
| /customers/:memberid | DELETE | Delete a customer (require login) |
| /customers/:memberid | PUT    | Update a customer (require login) |

List of transaction routes:

|     Route     | HTTP |      Description      |
| ------------- | ---- | --------------------- |
| /transactions | GET  | Get all transactions (require login) |
| /transactions | POST | Create a transactions (require login) |

List of user routes:

|    Route     | HTTP |          Description          |
| ------------ | ---- | ----------------------------- |
| /users       | GET  | Get all users (require login) |
| /users       | POST | Create a user                 |
| /users/login | POST | User login                    |

### Usage
With only npm:

npm install

npm start

Access the website via http://localhost:3000/
