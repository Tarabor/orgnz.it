/**
 * Express configuration
 */
const morgan = require('morgan');
const bodyParser = require('body-parser');
const firebase = require('firebase-admin');
const firebaseTest = require('firebase');

const CONFIG = require(`./environment/${process.env.NODE_ENV}.js`);
const testAccountKey = require('../account/accountTest.json');

// initialize firebase
firebase.initializeApp({
  credential: firebase.credential.cert(CONFIG.firebase.serviceAccount),
  databaseURL: CONFIG.firebase.databaseURL
});

// initialize firebase test
firebaseTest.initializeApp(testAccountKey);

module.exports = function(app) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
};
