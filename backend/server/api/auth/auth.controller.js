const firebase = require('firebase-admin');
const firebaseTest = require('firebase');

const authService = firebase.auth();

exports.verifyToken = function(req, res, next) {
  const idToken = req.headers.authorization.split(" ")[1];
  if (!idToken || idToken === '') {
    res.status(500).send('Invalid Token');
  } else {
    authService
      .verifyIdToken(idToken)
      .then(decodedToken => {
        console.log('User ID: ', decodedToken.uid);
        next();
      })
      .catch(error => {
        res.status(500).send('Invalid Token');
      });
  }
};

exports.login = function(req, res) {
  const email = '*************';
  const password = '***********';
  firebaseTest
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(firebaseUser => {
      res.send(firebaseUser.user);
      console.log('UserID: ', firebaseUser.user);
    })
    .catch(error => {
      console.log('Error during user login: ', error);
    });
};

exports.createLogin = function(req, res) {
  const user = req.body;
  firebaseTest
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(firebaseUser => {
      res.send(firebaseUser.user);
      console.log('UserID: ', firebaseUser.user);
    })
    .catch(error => {
      console.log('Error during user login: ', error);
      res.status(500).send(error.message);
    });
};
