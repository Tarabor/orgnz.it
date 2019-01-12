const express = require('express');
const controller = require('./auth.controller');

const router = express.Router();

router.get('/login', controller.login);
router.get('/verifytoken', controller.verifyToken);

module.exports = router;
