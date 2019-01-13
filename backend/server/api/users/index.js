const express = require('express');
const validate = require('express-jsonschema').validate;
const controller = require('./users.controller');

const USER_SCHEMA = require('../../config/validation/users.json');

const router = express.Router();

router.get('/all', controller.getAll);
router.post('/insert', validate({ body: USER_SCHEMA.post }), controller.insertSingleUser);
router.put('/update', validate({ body: USER_SCHEMA.put }), controller.updateUser);

module.exports = router;
