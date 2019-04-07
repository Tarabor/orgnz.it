const express = require('express');
const validate = require('express-jsonschema').validate;
const authController = require('../auth/auth.controller');
const controller = require('./circles.controller');

const CIRCLE_SCHEMA = require('../../config/validation/circles.json');

const router = express.Router();

router.get('/all', authController.verifyToken, controller.getAll);

module.exports = router;
