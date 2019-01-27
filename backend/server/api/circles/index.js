const express = require('express');
const validate = require('express-jsonschema').validate;
const controller = require('./circles.controller');

const CIRCLE_SCHEMA = require('../../config/validation/circles.json');

const router = express.Router();

router.get('/all', controller.getAll);

module.exports = router;
