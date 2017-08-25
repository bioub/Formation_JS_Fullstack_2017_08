const Router = require('express').Router;
const bodyParser = require('body-parser');
const ctrlContact = require('../controllers/contact');

const routes = new Router();

// Liste des contacts
routes.get('/',
  ctrlContact.list
);

// Créer un contact
routes.post('/',
  bodyParser.json(),
  ctrlContact.create
);

// Afficher un contact
routes.get('/:id',
  ctrlContact.show
);

// Remplacer un contact
routes.put('/:id',
  bodyParser.json(),
  ctrlContact.update
);

// Supprimer un contact
routes.delete('/:id',
  ctrlContact.delete
);


// Exercice
// Créer et implémenter GET /api/contacts/599ea451e03ce17900cee110
// Créer et implémenter DELETE /api/contacts/599ea451e03ce17900cee110


module.exports = routes;
