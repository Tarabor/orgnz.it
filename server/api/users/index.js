'use strict';

var express = require('express');
var controller = require('./users.controller');

var router = express.Router();

router.get('/all', controller.getAll);

module.exports = router;