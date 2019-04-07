const userRepo = require('./users.repository');

exports.getAll = function(req, res) {
  userRepo.getAll(req).then(response => {
    res.send(response);
  })
  .catch(err => {
    console.log('Error getting users documents', err);
    res.status(500).send('Error');
  });
};

exports.getOne = function (req, res) {
  userRepo.getOne(req.params.id).then(response => {
    res.send(response);
  })
  .catch(err => {
    console.log('Error getting users documents', err);
    res.status(500).send('Error');
  });
};

exports.insertUser = function(req, res) {
  const user = req.body;
  userRepo.insertUser(user).then(response => {
    res.send(`User ${user.name} created correctly with id=${response.id}`);
  })
  .catch(err => {
    console.log('Error in user insetion', err);
    res.status(500).send('Error');
  });
};

exports.updateUser = function(req, res) {
  const user = req.body;
  delete user.id;

  userRepo.updateUser(user).then(response => {
    res.send(`User with ${response.id} was updated correctly`);
  })
  .catch(err => {
    console.log('Error in user update', err);
    res.status(500).send('Error');
  });
};

exports.deleteUser = function(req, res) {
  const user = req.body;

  userRepo.deleteUser(user).then(response => {
    console.log('Document deleted with ID: ', response);

    res.send(`User with ${user.id} successfully deleted!`);
  })
  .catch(err => {
    console.log('Error in user deletion', err);
    res.status(500).send('Error');
  });
};
