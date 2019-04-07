const firebase    = require('firebase-admin');

const db          = firebase.firestore();

exports.getAll = function() {
  return new Promise((resolve, reject) => {
    db.collection('events')
      .get()
      .then(response => {
        const eventsList = [];
        response.forEach(event => eventsList.push(event.data().name));
        resolve(eventsList);
      })
      .catch(err => {
        console.log('Error getting events documents', err);
        reject(err);
      });
  });
};

exports.getOne = function(id) {
  return new Promise((resolve, reject) => {
    db.collection('events')
      .doc(id)
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log('Document data:', doc.data());
          resolve(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
          resolve();
        }
      })
      .catch(err => {
        console.log('Error getting users documents', err);
        reject(err);
      });
  });
};

exports.insertEvent = function(event) {
  return new Promise((resolve, reject) => {
    db.collection('events')
      .add(event)
      .then(response => {
        console.log(`Event ${event.name} created correctly with id=${response.id}`);
        resolve(response.id);
      })
      .catch(err => {
        console.log('Error in event insetion', err);
        reject(err);
      });
  });
};

exports.updateEvent = function(event) {
  return new Promise((resolve, reject) => {
    db.collection('events')
      .doc(event.id)
      .set(event)
      .then(response => {
        console.log(`Event with ${event.id} was updated correctly`);
        resolve(response);
      })
      .catch(err => {
        console.log('Error in event update', err);
        reject(err);
      });
  });
};

exports.deleteEvent = function(event) {
  return new Promise((resolve, reject) => {
    db.collection('events')
      .doc(event.id)
      .delete()
      .then(response => {
        console.log(`Event with ${event.id} successfully deleted!`);
        resolve(response);
      })
      .catch(err => {
        console.log('Error in event deletion', err);
        reject(err);
      });
  });
};
