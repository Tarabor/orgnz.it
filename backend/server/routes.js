/**
 * Main application routes
 */
import { initializeApp, credential as _credential } from 'firebase-admin';
import { initializeApp as _initializeApp } from 'firebase';
import testAccountKey from './account/accountTest.json';

const circles = require('./api/circles');
const users = require('./api/users');
const auth = require('./api/auth');

const CONFIG = require(`./config/environment/${process.env.NODE_ENV}.js`);

// initlize firebase
initializeApp({
  credential: _credential.cert(CONFIG.firebase.serviceAccount),
  databaseURL: CONFIG.firebase.databaseURL
});

// initlize firebase test
_initializeApp(testAccountKey);

export default function(app) {
  // Insert routes below
  app.use('/api/circles', circles);
  app.use('/api/users', users);
  app.use('/api/auth', auth);
}
