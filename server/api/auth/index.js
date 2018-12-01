'use strict';

var express = require('express');
var controller = require('./auth.controller');

var router = express.Router();

router.get('/login', controller.login);
router.get('/verifytoken', controller.verifyToken);

module.exports = router;