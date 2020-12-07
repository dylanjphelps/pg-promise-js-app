const pgp = require('pg-promise')();

const connection = {
    "host": "localhost",
    "port": 5432,
    "database": "dvdrental",
    "user": "postgres",
    "password": ""
}

var db = pgp(connection);

function getAllActors(req, res, next) {    
    db.any('SELECT first_name, last_name FROM actor')
    .then(function (data) {
    res.status(200)
        .json({
            status: 'success',
            data: data
        });
    })
    .catch(function (err) {
        return next(err);
    });
}

function getAllCustomers(req, res, next) {    
    db.any('SELECT first_name, last_name FROM customer')
    .then(function (data) {
    res.status(200)
        .json({
            status: 'success',
            data: data
        });
    })
    .catch(function (err) {
        return next(err);
    });
}

module.exports = {
    getAllActors: getAllActors,
    getAllCustomers: getAllCustomers
};

