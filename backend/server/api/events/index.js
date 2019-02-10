const express = require('express');
const validate = require('express-jsonschema').validate;
const controller = require('./events.controller');

const EVENTS_SCHEMA = require('../../config/validation/events.json');

const router = express.Router();

router.get('/all', controller.getAll);
router.post('', validate({ body: EVENTS_SCHEMA.post }), controller.createEvent);
router.put('', validate({ body: EVENTS_SCHEMA.put }), controller.updateEvent);
router.delete('', validate({ body: EVENTS_SCHEMA.delete }), controller.deleteEvent);

module.exports = router;
