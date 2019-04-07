const express = require('express');
const validate = require('express-jsonschema').validate;
const authController = require('../auth/auth.controller');
const controller = require('./groups.controller');

const GROUP_SCHEMA = require('../../config/validation/groups.json');

const router = express.Router();

router.get('/all', authController.verifyToken, controller.getAll);
router.post('', authController.verifyToken, validate({ body: GROUP_SCHEMA.post }), controller.createGroup);

module.exports = router;
