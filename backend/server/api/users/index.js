const express = require('express');
const validate = require('express-jsonschema').validate;
const authController = require('../auth/auth.controller');
const controller = require('./users.controller');

const USER_SCHEMA = require('../../config/validation/users.json');

const router = express.Router();

router.get('/all', authController.verifyToken, controller.getAll);
router.get('/:id', authController.verifyToken, controller.getOne);
router.post('', authController.verifyToken, validate({ body: USER_SCHEMA.post }), controller.insertUser);
router.put('', authController.verifyToken, validate({ body: USER_SCHEMA.put }), controller.updateUser);
router.delete('', authController.verifyToken, validate({ body: USER_SCHEMA.delete }), controller.deleteUser);

module.exports = router;
