const express = require('express');
const validate = require('express-jsonschema').validate;
const controller = require('./users.controller');

const USER_SCHEMA = require('../../config/validation/users.json');

const router = express.Router();

router.get('/all', controller.getAll);
router.post('', validate({ body: USER_SCHEMA.post }), controller.insertUser);
router.put('', validate({ body: USER_SCHEMA.put }), controller.updateUser);
router.delete('', validate({ body: USER_SCHEMA.delete }), controller.deleteUser);

module.exports = router;
