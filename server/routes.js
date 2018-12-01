/**
 * Main application routes
 */

'use strict';

var path = require('path');
var config = require('./config/environment/' + process.env.NODE_ENV + '.js');
const firebase = require("firebase-admin");

//initlize firebase
firebase.initializeApp({
  credential: firebase.credential.cert(config.firebase.serviceAccount),
  databaseURL: config.firebase.databaseURL
});

module.exports = function(app) {

  // Insert routes below
  app.use('/api/circles', require('./api/circles'));
  app.use('/api/users', require('./api/users'));
  

};
