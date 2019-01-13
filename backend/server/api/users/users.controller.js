const firebase = require('firebase-admin');

const db = firebase.firestore();

exports.getAll = function(req, res) {
  db.collection('users')
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

exports.insertSingleUser = function(req, res) {
  const user = req.body;

  db.collection('users')
    .doc(user.username) // FIXME overwrites precedent users!!
    .set(user)
    .then(response => {
      res.send(response);
      console.log('Insert user: ', response);
    })
    .catch(err => {
      console.log('Error in user insetion', err);
    });
};
