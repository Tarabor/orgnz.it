const userRepo = require('./users.repository');

exports.getAll = function(req, res) {
  userRepo.getAll(req).then(response => {
    res.send(response);
  })
  .catch(err => {
    console.log('Error getting users documents', err);
  });
};

exports.getOne = function (req, res) {
  userRepo.getOne(req.params.id).then(response => {
    res.send(response);
  })
  .catch(err => {
    console.log('Error getting users documents', err);
  });
};

exports.insertUser = function(req, res) {
  const user = req.body;
  userRepo.insertUser(user).then(response => {
    res.send(`User ${user.name} created correctly with id=${response.id}`);
  })
  .catch(err => {
    console.log('Error in user insetion', err);
  });
};

exports.updateUser = function(req, res) {
  const user = req.body;
  delete user.id;

  userRepo.updateUser(user).then(response => {
    res.send(`User with ${response.id} was updated correctly`);
  })
  .catch(err => {
    console.log('Error in user insetion', err);
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
  });
};
