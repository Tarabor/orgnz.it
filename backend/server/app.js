/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;

var express = require('express');

// Setup server
var app = express();
var server = require('http').createServer(app);

require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(port);

// Expose app
exports = module.exports = app;
