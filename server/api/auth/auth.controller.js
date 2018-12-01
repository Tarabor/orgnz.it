"use strict";

const firebase = require("firebase-admin");
const firebaseTest = require("firebase");

const authService = firebase.auth();

exports.verifyToken = function(req, res) {
  let idToken = "************";
  authService.verifyIdToken(idToken)
    .then(function(decodedToken) {
      var uid = decodedToken.uid;
      res.send(uid);
      console.log("UserID: ", uid);
    })
    .catch(function(error) {
      console.log("Error during user check", error);
    });
};

exports.login = function(req, res) {
  const email = "*************";
  const password = "***********";
  firebaseTest.auth().signInWithEmailAndPassword(email, password)
    .then(function(firebaseUser) {
      res.send(firebaseUser.user);
      console.log("UserID: ", irebaseUser.user);
    })
    .catch(function(error) {
      console.log("Error during user login: ", error);
    });
};
