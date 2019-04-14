const eventRepo   = require('./events.repository');
const userRepo    = require('../users/users.repository');
const groupsCtrl  = require('../groups/groups.controller');
const WINLOGGER   = require('../../utils/logger');

const logger = new WINLOGGER('info')

exports.getAll = function(req, res) {
  eventRepo.getAll(req).then(response => {
    logger.info('Retrieve successfully');
    res.send(response);
  })
  .catch(err => {
    logger.error('Error getting events documents', err);
    res.status(500).send('Error');
  });
};

exports.getOne = function (req, res) {
  eventRepo.getOne(req.params.id).then(response => {
    res.send(response);
  })
  .catch(err => {
    logger.error('Error getting events documents', err);
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
      logger.error('Error in user insetion', err);
      res.status(500).send('Error');
    });
  // TODO check group exists
};

exports.updateEvent = function(req, res) {
  const event = req.body;
  eventRepo.updateEvent(event).then(response => {
    res.send(`Event with ${response.id} was updated correctly`);
  })
  .catch(err => {
    logger.error('Error in event update', err);
    res.status(500).send('Error');
  });

};

exports.deleteEvent = function(req, res) {
  eventRepo.deleteEvent(req.params.id).then(response => {
    logger.info('Document deleted with ID: ', response);
    res.send(`Event with ${req.params.id} successfully deleted!`);
  })
  .catch(err => {
    logger.error('Error in Event deletion', err);
    res.status(500).send('Error');
  });
};