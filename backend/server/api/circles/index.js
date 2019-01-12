const express = require('express');
const controller = require('./circles.controller');

const router = express.Router();

router.get('/all', controller.getAll);

module.exports = router;
