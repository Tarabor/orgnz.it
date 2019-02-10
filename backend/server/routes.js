/**
 * Main application routes
 */
const circles = require('./api/circles');
const users = require('./api/users');
const auth = require('./api/auth');
const mails = require('./api/mails');

module.exports = function(app) {
  // Insert routes below  
  app.use('/api/users', users);
  app.use('/api/circles', circles);
  app.use('/api/auth', auth);
  app.use('/api/mails', mails);
};
