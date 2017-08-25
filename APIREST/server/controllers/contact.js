const Contact = require('../models/contact');

exports.list = (req, res, next) => {
  Contact.find({}, 'prenom nom')
    .then(contacts => {
      res.json(contacts);
    })
    .catch(next);
};

exports.create = (req, res, next) => {
  const contact = new Contact(req.body);
  contact.save()
    .then(contact => {
      res.statusCode = 201;
      res.json(contact);
    })
    .catch(next);
};


exports.show = (req, res, next) => {
  const id = req.params.id;

  Contact.findById(id)
    .then(contact => {
      res.json(contact);
    })
    .catch(next);
};

exports.update = (req, res, next) => {
  const id = req.params.id;

  Contact.findByIdAndUpdate(id, req.body)
    .then(contact => {
      res.json(contact);
    })
    .catch(next);
};

exports.delete = (req, res, next) => {
  const id = req.params.id;

  Contact.findByIdAndRemove(id)
    .then(contact => {
      res.json(contact);
    })
    .catch(next);
};

