const firebase = require('firebase-admin');
const userRepo = require('./users.repository');

const db = firebase.firestore();

exports.getAll = function(req, res) {
  userRepo.getAll(req).then(response => {
    res.send(response);
  })
  .catch(err => {
    console.log('Error getting users documents', err);
  });
};

exports.getOne = function (req, res) {
  db.collection('users')
    .doc(req.params.id)
    .get()
    .then(doc => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        res.send(doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(err => {
      console.log('Error getting users documents', err);
    });
};

exports.insertUser = function(req, res) {
  const user = req.body;

  db.collection('users')
    .add(user)
    .then(response => {
      res.send(`User ${user.name} created correctly with id=${response.id}`);
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
