const express           = require('express');
const validate          = require('express-jsonschema').validate;
const controller        = require('./events.controller');
const authController    = require('../auth/auth.controller');

const EVENTS_SCHEMA = require('../../config/validation/events.json');

const router = express.Router();

router.get('/all', authController.verifyToken, controller.getAll);
router.get('/:id', authController.verifyToken, controller.getOne);
router.post('', authController.verifyToken, validate({ body: EVENTS_SCHEMA.post }), controller.createEvent);
router.put('', authController.verifyToken, validate({ body: EVENTS_SCHEMA.put }), controller.updateEvent);
router.delete('/:id', authController.verifyToken, controller.deleteEvent);

module.exports = router;
