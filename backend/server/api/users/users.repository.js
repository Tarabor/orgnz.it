const firebase    = require('firebase-admin');
const WINLOGGER   = require('../../utils/logger')

const logger      = new WINLOGGER('info')
const db          = firebase.firestore();

exports.getAll = function() {
  return new Promise((resolve, reject) => {
    db.collection('users')
      .get()
      .then(response => {
        const usersNameList = [];
        response.forEach(singleUser => usersNameList.push(singleUser.data().name));
        resolve(usersNameList);
      })
      .catch(err => {
        logger.error('Error getting users documents', err);
        reject(err);
      });
  });
};

exports.getOne = function(id) {
  return new Promise((resolve, reject) => {
    db.collection('users')
      .doc(id)
      .get()
      .then(doc => {
        if (doc.exists) {
          logger.info('Document data:', doc.data());
          resolve(doc.data());
        } else {
          logger.info('No such document!');
          resolve();
        }
      })
      .catch(err => {
        logger.error('Error getting users documents', err);
        reject(err);
      });
  });
};

exports.insertUser = function(user) {
  return new Promise((resolve, reject) => {
    db.collection('users')
      .add(user)
      .then(response => {
        logger.info(`User ${user.name} created correctly with id=${response.id}`);
        resolve(response.id);
      })
      .catch(err => {
        logger.error('Error in user insetion', err);
        reject(err);
      });
  });
};

exports.updateUser = function(user) {
  return new Promise((resolve, reject) => {
    db.collection('users')
      .doc(user.id)
      .set(user)
      .then(response => {
        logger.info(`User with ${user.id} was updated correctly`);
        resolve(response);
      })
      .catch(err => {
        logger.error('Error in user insetion', err);
        reject(err);
      });
  });
};

exports.deleteUser = function(user) {
  return new Promise((resolve, reject) => {
    db.collection('users')
      .doc(user.id)
      .delete()
      .then(response => {
        logger.info(`User with ${user.id} successfully deleted!`);
        resolve(response);
      })
      .catch(err => {
        logger.error('Error in user deletion', err);
        reject(err);
      });
  });
};
