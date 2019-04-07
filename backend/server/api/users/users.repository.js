const firebase = require('firebase-admin');

const db = firebase.firestore();

exports.getAll = function() {
    return new Promise((resolve, reject) => {
        db.collection('users')
          .get()
          .then(response => {
            console.log(response);
            const usersNameList = []
            response.forEach(singleUser => usersNameList.push(singleUser.data().name));
            resolve(usersNameList);
          })
          .catch(err => {
            console.log('Error getting users documents', err);
            reject(err);
          });
    });
};

exports.getOne = function (req) {
    return new Promise((resolve, reject) => {
        db.collection('users')
          .doc(req.params.id)
          .get()
          .then(doc => {
            if (doc.exists) {
              console.log("Document data:", doc.data());
              resolve(doc.data());
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
              resolve();
            }
          })
          .catch(err => {
            console.log('Error getting users documents', err);
            reject(err);
          });
    });
};

exports.insertUser = function(req) {
    const user = req.body;
    return new Promise((resolve, reject) => {
        db.collection('users')
          .add(user)
          .then(response => {
            console.log(`User ${user.name} created correctly with id=${response.id}`);
            resolve(response.id);
          })
          .catch(err => {
            console.log('Error in user insetion', err);
            reject(err);
          });
    });
};

exports.updateUser = function(req) {
  const user = req.body;
  const id = user.id;
  delete user.id;
  return new Promise((resolve, reject) => {
    db.collection('users')
        .doc(id)
        .set(user)
        .then(response => {
          console.log(`User with ${id} was updated correctly`);
          resolve(response);
        })
        .catch(err => {
          console.log('Error in user insetion', err);
          reject(err);
        });
    });
};

exports.deleteUser = function(req) {
  const user = req.body;
  return new Promise((resolve, reject) => {
      db.collection('users')
        .doc(user.id)
        .delete()
        .then(response => {
          console.log(`User with ${user.id} successfully deleted!`);
          resolve(response);
        })
        .catch(err => {
          console.log('Error in user deletion', err);
          reject(err);
        });
    });
};
