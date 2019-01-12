const express = require('express');
const controller = require('./users.controller');

const router = express.Router();

router.get('/all', controller.getAll);
router.post('/insert', controller.insertSingleUser);

module.exports = router;
