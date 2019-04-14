const CONFIG    = require(`../../config/environment/${process.env.NODE_ENV}.js`);
const firebase  = require('firebase-admin');
const WINLOGGER = require('../../utils/logger');

const db        = firebase.firestore();
const logger    = new WINLOGGER(CONFIG.loggerLevel);


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
            logger.error('Error getting groups documents', err);
            reject(err);
          });
    });
};

exports.createGroup = function(group) {
  return new Promise((resolve, reject) => {
    db.collection('groups')
      .add(group)
      .then(response => {
        logger.info(`Group ${group.name} created correctly with id=${response.id}`);
        resolve(response.id);
      })
      .catch(err => {
        logger.error('Error in event insertion', err);
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
        logger.info(`Group with ID: ${idToUpdate} was updated correctly`);
        resolve(response);
      })
      .catch(err => {
        logger.error('Error in group update', err);
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
        logger.info(`Group with ID: ${groupId} successfully deleted!`);
        resolve(response);
      })
      .catch(err => {
        logger.error('Error in group deletion', err);
        reject(err);
      });
  });
};