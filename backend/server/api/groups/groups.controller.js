const groupRepo = require('./groups.repository');

exports.getAll = function(req, res) {
  groupRepo.getAll(req).then(response => {
    res.send(response);
  })
  .catch(err => {
    console.log('Error getting groups documents', err);
  });
};

exports.createGroup = function(req, res) {
  // TODO aggiungere riferimento all'utente che crea il gruppo
  const group = req.body;
  groupRepo.createGroup(group).then(response => {
    res.send(`Group ${group.name} created correctly with id=${response}`);
  })
  .catch(err => {
    console.log('Error in group insetion', err);
      res.status(500).send('Error');
  });
};

exports.updateGroup = function(req, res) {
  const group = req.body;
  groupRepo.updateGroup(group).then(response => {
    res.send(`Group with ID: ${response.id} was updated correctly`);
  })
  .catch(err => {
    console.log('Error in group update', err);
    res.status(500).send('Error');
  });
};

exports.deleteGroup = function(req, res) {
  groupRepo.deleteGroup(req.params.id).then(response => {
    console.log('Group deleted with ID: ', req.params.id);
    res.send(`Group with ID: ${req.params.id} successfully deleted!`);
  })
  .catch(err => {
    console.log('Error in group deletion', err);
    res.status(500).send('Error');
  });
};
