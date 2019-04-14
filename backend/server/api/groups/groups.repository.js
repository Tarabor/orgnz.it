const firebase = require('firebase-admin');

const db = firebase.firestore();

exports.getAll = function() {
    return new Promise((resolve, reject) => {
        db.collection('groups')
          .get()
          .then(response => {
            const groupsList = []
            response.forEach(singleGroup => {
              groupsList.push(singleGroup.data().name);
            });
            resolve(groupsList);
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


exports.updateGroup = function(group) {
  const idToUpdate = group.id;
  delete group.id;
  return new Promise((resolve, reject) => {
    db.collection('groups')
      .doc(idToUpdate)
      .set(group)
      .then(response => {
        console.log(`Group with ID: ${idToUpdate} was updated correctly`);
        resolve(response);
      })
      .catch(err => {
        console.log('Error in group update', err);
        reject(err);
      });
  });
};

exports.deleteGroup = function(groupId) {
  return new Promise((resolve, reject) => {
    db.collection('groups')
      .doc(groupId)
      .delete()
      .then(response => {
        console.log(`Group with ID: ${groupId} successfully deleted!`);
        resolve(response);
      })
      .catch(err => {
        console.log('Error in group deletion', err);
        reject(err);
      });
  });
};