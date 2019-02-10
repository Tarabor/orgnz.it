const express = require('express');
const controller = require('./mails.controller');


const router = express.Router();

router.get('/sendMail', controller.sendInvitation);

module.exports = router;
