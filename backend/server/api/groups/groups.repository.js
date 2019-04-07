const firebase = require('firebase-admin');

const db = firebase.firestore();

exports.getAll = function() {
    return new Promise((resolve, reject) => {
        db.collection('circles')
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