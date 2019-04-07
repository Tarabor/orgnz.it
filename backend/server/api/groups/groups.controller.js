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
