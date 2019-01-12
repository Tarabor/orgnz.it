/**
 * Main application file
 */
const express = require('express');

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;

// Setup server
const app = express();
const server = require('http').createServer(app);

require('./config/express')(app);
require('./routes').default(app);

// Start server
server.listen(port);

// Expose app
module.exports = app;
