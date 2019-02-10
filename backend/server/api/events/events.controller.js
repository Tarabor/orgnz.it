const firebase = require('firebase-admin');

const db = firebase.firestore();

exports.getAll = function(req, res) {
  db.collection('events')
    .get()
    .then(response => {
      const eventsList = [];
      response.forEach(event => eventsList.push(event.data().name));
      res.send(eventsList);
    })
    .catch(err => {
      console.log('Error getting events documents', err);
    });
};

exports.createEvent = function(req, res) {
  const event = req.body;

  //TODO check user exists
  //TODO check circle exists
  //then create event

  db.collection('events')
    .add(event)
    .then(response => {
      res.send(`Event ${event.name} created correctly with id=${response.id}`);
      console.log('Document written with ID: ', response.id);
    })
    .catch(err => {
      console.log('Error in event insetion', err);
    });
};

exports.updateEvent = function(req, res) {
  const event = req.body;
  const id = event.id;
  delete event.id;

  db.collection('events')
    .doc(id)
    .set(event)
    .then(response => {
      res.send(`Event with ${id} was updated correctly`);
      console.log('Document written with ID: ', response);
    })
    .catch(err => {
      console.log('Error in event update', err);
    });
};

exports.deleteEvent = function(req, res) {
  const event = req.body;

  db.collection('events')
    .doc(event.id)
    .delete()
    .then(response => {
      res.send(`Event with ${event.id} successfully deleted!`);
      console.log('Document written with ID: ', response);
    })
    .catch(err => {
      console.log('Error in event deletion', err);
    });
};
