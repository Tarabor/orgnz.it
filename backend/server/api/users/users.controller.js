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
    .add(user)
    .then(response => {
      res.send(response.id);
      console.log('Document written with ID: ', response.id);
    })
    .catch(err => {
      console.log('Error in user insetion', err);
    });
};

exports.updateUser = function(req, res) {
  const user = req.body;
  const id = user.id;
  delete user.id;

  db.collection('users')
    .doc(id)
    .set(user)
    .then(response => {
      res.send(`User with ${id} was updated correctly`);
      console.log('Document written with ID: ', response);
    })
    .catch(err => {
      console.log('Error in user insetion', err);
    });
};

exports.deleteUser = function(req, res) {
  const user = req.body;

  db.collection('users')
    .doc(user.id)
    .delete()
    .then(response => {
      res.send(`User with ${user.id} successfully deleted!`);
      console.log('Document written with ID: ', response);
    })
    .catch(err => {
      console.log('Error in user deletion', err);
    });
};
