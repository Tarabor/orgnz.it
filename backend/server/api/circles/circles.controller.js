const firebase = require('firebase-admin');

const db = firebase.firestore();

exports.getAll = function(req, res) {
  db.collection('circles')
    .get()
    .then(response => {
      const circleList = [];
      response.forEach(singleUser => circleList.push(singleUser.data()));
      res.send(circleList);
    })
    .catch(err => {
      console.log('Error getting users documents', err);
    });
};
