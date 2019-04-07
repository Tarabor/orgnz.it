const userRepo = require('./groups.repository');

exports.getAll = function(req, res) {
  userRepo.getAll(req).then(response => {
    res.send(response);
  })
  .catch(err => {
    console.log('Error getting groups documents', err);
  });
};
