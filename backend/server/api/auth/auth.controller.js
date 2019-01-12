const firebase = require('firebase-admin');
const firebaseTest = require('firebase');

const authService = firebase.auth();

exports.verifyToken = function(req, res) {
  const idToken = '************';
  authService
    .verifyIdToken(idToken)
    .then(decodedToken => {
      const uid = decodedToken.uid;
      res.send(uid);
      console.log('UserID: ', uid);
    })
    .catch(error => {
      console.log('Error during user check', error);
    });
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
