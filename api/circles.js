const express = require("express");
const routerC = express.Router();

const firebase = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://povertyapp.firebaseio.com"
});

const db = firebase.firestore();

routerC.get("/all", (req, res) => {
  db.collection("users")
    .get()
    .then(response => {
      let usersNameList = [];
      response.forEach( singleUser => usersNameList.push(singleUser.data().name) );
      res.send(usersNameList);
    })
    .catch(err => {
      console.log("Error getting users documents", err);
    });
});

module.exports = routerC;