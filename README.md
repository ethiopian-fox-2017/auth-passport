# auth-passport

### List of **users** routes:

| Route | HTTP Method | Description | Admin Access | Member Access |
|-------|-------------|-------------|:------------:|:-------------:|
|`/users/signup` | POST | Sign up with new user info | :heavy_check_mark: | :heavy_check_mark: |
|`/users/login` | POST | Login while get an access token based on credentials, if already registered in Database | :heavy_check_mark: | :heavy_check_mark: |
|`/users/` | GET | Get all Users | :heavy_check_mark: | :x: |

-----
### List of **books** routes:

| Route | HTTP Method | Description | Admin Access | Member Access |
|-------|-------------|-------------|:------------:|:-------------:|
|`/books` | POST | Add new Book to Database | :heavy_check_mark: | :heavy_check_mark: |
|`/books` | GET | Get all Books from Database | :heavy_check_mark: | :heavy_check_mark: |
|`/books/:bookId` | PUT | Update 1 book info | :heavy_check_mark: | :x: |
|`/books/:bookId` | DELETE | Delete 1 book from Database | :heavy_check_mark: | :x: |

-----
### List of **customers** routes:

| Route | HTTP Method | Description | Admin Access | Member Access |
|-------|-------------|-------------|:------------:|:-------------:|
|`/customers` | POST | Add new Customer to Database | :heavy_check_mark: | :x: |
|`/customers` | GET | Get all Customers from Database | :heavy_check_mark: | :x: |
|`/customers/:customerId` | PUT | Update 1 Customer info | :heavy_check_mark: | :x: |
|`/customers/:customerId` | DELETE | Delete 1 Customer from Database | :heavy_check_mark: | :x: |

-----
### List of **transactions** routes:

| Route | HTTP Method | Description | Admin Access | Member Access |
|-------|-------------|-------------|:------------:|:-------------:|
|`/transactions` | POST | Add new Transactions to Database | :heavy_check_mark: | :x: |
|`/transactions` | GET | Get all Transactions from Database | :heavy_check_mark: | :x: |

:bulb: All HTTP Methods described above can be executed using a Chrome app named  [POSTMAN](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en).

------
### :rocket: Usage

With only npm:

```
npm install
npm start
```
