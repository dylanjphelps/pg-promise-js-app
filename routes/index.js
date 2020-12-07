var express = require('express');
var router = express.Router();
var db = require('../queries');

router.get('/api/actors', db.getAllActors);
router.get('/api/customers', db.getAllCustomers);

console.log(router);

module.exports = router;