![Static Badge](https://img.shields.io/badge/FCN-FITRI%20CINTA%20NUSANTARA-blue)
[![Jekyll site CI](https://github.com/KOSASIH/fcn-property-commerce-core/actions/workflows/jekyll-docker.yml/badge.svg)](https://github.com/KOSASIH/fcn-property-commerce-core/actions/workflows/jekyll-docker.yml)
[![StackHawk](https://github.com/KOSASIH/fcn-property-commerce-core/actions/workflows/stackhawk.yml/badge.svg)](https://github.com/KOSASIH/fcn-property-commerce-core/actions/workflows/stackhawk.yml)
[![Jekyll site CI](https://github.com/KOSASIH/fcn-property-commerce-core/actions/workflows/jekyll-docker.yml/badge.svg)](https://github.com/KOSASIH/fcn-property-commerce-core/actions/workflows/jekyll-docker.yml)

# fcn-property-commerce-core
The core repository for PT.FCN's property and e-commerce platform, containing the main business logic.

## Our App at Google PlayStore 

- [FCNmart app](https://play.google.com/store/apps/details?id=com.fcnmart.enjoy) 
- [FCNpartner](https://play.google.com/store/apps/details?id=com.fcnmart.partner)
- [FCNdriver](https://play.google.com/store/apps/details?id=com.fcnmart.driver) 

# fcn-property-commerce-core

The core repository for PT.FCN's property and e-commerce platform, containing the main business logic.

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

- Node.js (version 14 or higher)
- MongoDB
- PostgreSQL

## Installing

1. Clone the repository:

```
1. git clone https://github.com/KOSASIH/fcn-property-commerce-core.git
```

2. Install the dependencies:

```
1. npm install
```

3. Create a .env file in the root directory with the following environment variables:

```
1. DB_HOST=<your_mongodb_host>
2. DB_PORT=<your_mongodb_port>
3. DB_NAME=<your_mongodb_database_name>
4. JWT_SECRET=<your_jwt_secret_key>
5. EMAIL_HOST=<your_email_host>
6. EMAIL_PORT=<your_email_port>
7. EMAIL_USER=<your_email_user>
8. EMAIL_PASSWORD=<your_email_password>
```
3. Start the server:

```
1. npm start
```

## Testing

To run the tests, use the following command:

```
1. npm test
```

## Built With

1. Node.js - The JavaScript runtime used for the backend.
2. Express - The web framework used for the backend.
3. Mongoose - The Object Data Modeling (ODM) library used for MongoDB.
3. Sequelize - The Object-Relational Mapping (ORM) library used for PostgreSQL.
4. Jest - The testing framework used for the backend.

# Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

# Authors

Kosasih - Initial work - KOSASIH

# License

This project is licensed under the MIT License - see the LICENSE.md file for details.
