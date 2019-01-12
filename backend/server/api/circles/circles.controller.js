const firebase = require('firebase-admin');

const db = firebase.firestore();

exports.getAll = function(req, res) {
  db.collection('circles')
    .get()
    .then(response => {
      const usersNameList = [];
      response.forEach(singleUser => usersNameList.push(singleUser.data().name));
      res.send(usersNameList);
    })
    .catch(err => {
      console.log('Error getting users documents', err);
    });
};
