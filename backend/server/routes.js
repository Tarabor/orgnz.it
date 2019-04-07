/**
 * Main application routes
 */
const groups = require('./api/groups');
const users = require('./api/users');
const events = require('./api/events');
const auth = require('./api/auth');
const mails = require('./api/mails');

module.exports = function(app) {
  // Insert routes below  
  app.use('/api/users', users);
  app.use('/api/groups', groups);
  app.use('/api/events', events);
  app.use('/api/auth', auth);
  app.use('/api/mails', mails);
};
