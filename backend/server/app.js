/**
 * Main application file
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;

const express = require('express');

// Setup server
const app = express();
const server = require('http').createServer(app);

require('./config/express')(app);
require('./routes')(app);
require('./errors')(app);

// Start server
server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

// Expose app
module.exports = app;
