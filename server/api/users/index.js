'use strict';

var express = require('express');
var controller = require('./users.controller');

var router = express.Router();

router.get('/all', controller.getAll);
router.post('/insert', controller.insertSingleUser);

module.exports = router;