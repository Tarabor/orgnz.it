const eventRepo   = require('./events.repository');
const userRepo    = require('../users//users.repository');
const circlesCtrl = require('../circles/circles.controller');

exports.getAll = function(req, res) {
  eventRepo.getAll(req).then(response => {
    res.send(response);
  })
  .catch(err => {
    console.log('Error getting events documents', err);
    res.status(500).send('Error');
  });
};

exports.getOne = function (req, res) {
  eventRepo.getOne(req.params.id).then(response => {
    res.send(response);
  })
  .catch(err => {
    console.log('Error getting events documents', err);
    res.status(500).send('Error');
  });
};

exports.createEvent = function(req, res) {
  const event = req.body;
  
  // TODO check user exists
  userRepo.getOne(event.userId)
    .then(data => {
      if (data === undefined) {
        return Promise.reject()
      }
      // then create event
      return eventRepo.insertEvent(event)
    })
    .then(response => {
      res.send(`Event ${event.name} created correctly with id=${response.id}`);
    })
    .catch(err => {
      console.log('Error in user insetion', err);
      res.status(500).send('Error');
    });
  // TODO check circle exists
};

exports.updateEvent = function(req, res) {
  const event = req.body;
  delete event.id;

  eventRepo.updateEvent(event).then(response => {
    res.send(`Event with ${response.id} was updated correctly`);
  })
  .catch(err => {
    console.log('Error in event update', err);
    res.status(500).send('Error');
  });

};

exports.deleteEvent = function(req, res) {
  const event = req.body;

  eventRepo.deleteEvent(event).then(response => {
    console.log('Document deleted with ID: ', response);
    res.send(`Event with ${event.id} successfully deleted!`);
  })
  .catch(err => {
    console.log('Error in Event deletion', err);
    res.status(500).send('Error');
  });
};
