'use strict';

const firebase = require("firebase-admin");

const db = firebase.firestore();

exports.getAll = function(req, res) {
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
};

exports.insertSingleUser = function(req, res) {
  var user = req.params;
  console.log("USERSSSSS: ", req)
  /*{
    name: 'Peppe',
    surname: 'Giiiiiiiiiii',
    age: '55'
  };*/
  
  db.collection('users').doc().set(user)
  .then(response => {
    res.send(response);
    console.log("Insert user: ", response);
  })
  .catch(err => {
    console.log("Error in user insetion", err);
  });
};