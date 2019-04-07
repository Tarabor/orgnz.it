const firebase = require('firebase-admin');

const db = firebase.firestore();

exports.getAll = function() {
    return new Promise((resolve, reject) => {
        db.collection('groups')
          .get()
          .then(response => {
            const usersNameList = []
            response.forEach(singleUser => usersNameList.push(singleUser.data().name));
            resolve(usersNameList);
          })
          .catch(err => {
            console.log('Error getting groups documents', err);
            reject(err);
          });
    });
};

exports.createGroup = function(group) {
  return new Promise((resolve, reject) => {
    db.collection('groups')
      .add(group)
      .then(response => {
        console.log(`Group ${group.name} created correctly with id=${response.id}`);
        resolve(response.id);
      })
      .catch(err => {
        console.log('Error in event insertion', err);
        reject(err);
      });
  });
};