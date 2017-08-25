const Societe = require('../models/societe');

exports.list = (req, res, next) => {
  Societe.find({}, 'nom')
    .then(societes => {
      res.json(societes);
    })
    .catch(next);
};

exports.show = (req, res, next) => {
  Societe.findById(req.params.id)
    .then(societe => {
      if (!societe) {
        return next();
      }
      res.json(societe);
    });
};
