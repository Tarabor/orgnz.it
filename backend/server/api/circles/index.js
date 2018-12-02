'use strict';

var express = require('express');
var controller = require('./circles.controller');

var router = express.Router();

router.get('/all', controller.getAll);

module.exports = router;