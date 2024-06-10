
# GeAr-Shift:sold/buy cars

A brief description of what this project does and who it's for: 
Gearshift is your one-stop shop to buy and sell used cars. Browse a massive selection, filter for exactly what you need, and contact sellers directly. Dealers can easily list cars, manage leads, and mark vehicles as sold - all online. Buy or sell with confidence on Gearshift.


## Acknowledgements

 - Database Schema: https://dbdiagram.io/d/64a1c7e102bd1c4a5e5fc28c
 - DBdiagram: https://app.eraser.io/workspace/575AlTvOH8iJD5zbnjYg?origin=share

## Extra functionalities used
-using prettier for better effectient colobrative work
: https://www.npmjs.com/package/prettier

 -use nodemon for auto reloading of server
 :https://www.npmjs.com/package/nodemon

 -use of postman for checking:
 
## Appendix

Any additional information goes here
Appendix: Gearshift Backend with Node.js, MongoDB, and JWT Authentication
This appendix details the backend implementation of Gearshift, a car buying and selling platform, using Node.js, the MongoDB native driver, and JSON Web Tokens (JWT) for authentication. It adheres to the provided database schema and incorporates features like asynchronous error handling, data privacy projections, and secure transactions.

Technology Stack:

Backend: Node.js (ES6)
Database: MongoDB (hosted)
Authentication: JWT
Data Seeding: Faker.js
Error Handling: Promises
Authentication and Authorization:
 

## JWT Implementation
JWT Implementation:

Users (buyers and dealers) can register and login using email and password.
Upon successful login, a JWT containing user information (excluding sensitive data) is generated and sent to the client.
Subsequent requests must include the JWT in the authorization header for access control.
Admin users have elevated privileges for managing user accounts and dealership listings.\
## JWT invilidation
JWT Invalidation:

A mechanism is implemented to invalidate JWTs to facilitate logout and password changes.
This might involve blacklisting tokens on logout or setting short expiration times.
## RESTful APIs:
The backend exposes various RESTful APIs categorized by user type (user, dealer, admin) and functionality. Each endpoint utilizes promises for asynchronous error handling.

**Common Endpoints (User & Dealer)**:

GET /cars: Retrieve all cars.
GET /cars/:dealershipId: 
Retrieve cars belonging to a specific dealership.
User-Specific Endpoints:

GET /dealerships/cars/:carModel: Find dealerships selling a particular car model.
GET /cars/owned: View all vehicles owned by the user, including dealer information.
GET /deals/:carId: Retrieve details of all deals involving a specific car.
Dealership-Specific Endpoints:

POST /cars: Add new cars to the dealership inventory (multipart/form-data support).
POST /deals: Create a new deal record for a sold car.
GET /cars/sold: View all vehicles sold by the dealership, including owner information.

**Data Privacy with Projections:**

API responses are carefully crafted to omit sensitive user or dealer information by utilizing MongoDB projections. This ensures data privacy while providing necessary details for successful car transactions.
## Learning Resources
https://nodejs.org/en/docs/guides/getting-started-guide http://expressjs.com/en/starter/hello-world.html https://www.mongodb.com/docs/drivers/node/current/ 

Quick video introduction for NodeJS and MongoDB:
https://www.youtube.com/watch?v=-MTSQjw5DrM https://www.youtube.com/watch?v=-bt_y4Loofg

npm:https://www.npmjs.com/
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

