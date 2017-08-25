
const contacts = [{
  prenom: 'John',
  nom: 'Doe',
  id: 123
}, {
  prenom: 'Jean',
  nom: 'Dupont',
  id: 456
}];

const express = require('express');
const morgan = require('morgan');

const app = express();

// Logs
app.use(morgan('dev'));
/*
app.use((req, res, next) => {
  console.log(req.method + ' ' + req.url);
  next();
});
*/

// Auth
app.use('/api/contacts', (req, res, next) => {
  if (req.headers.authorization === '12345') {
    return next();
  }
  res.statusCode = 401;
  res.json({
    msg: 'Unauthorized'
  });
});

// API RESTful
// Prefix : /api/contacts
// Détails : /api/contacts/123

// 5 URLs
// Liste : GET /api/contacts
app.get('/api/contacts', (req, res) => {
  res.json(contacts);
});

// Ajout : POST /api/contacts

// Afficher : GET /api/contacts/123
app.get('/api/contacts/:id', (req, res) => {
  const id = req.params.id;

  const contact = contacts.find(c => c.id === Number(id));

  if (!contact) {
    req.msg = 'Contact not found';
    return next();
  }

  res.json(contact);
});

// Remplacer : PUT /api/contacts/123

// Supprimer : DELETE /api/contacts/123


// 404 API
app.use('/api', (req, res, next) => {
  res.statusCode = 404;
  res.json({
    msg: req.msg || 'Not Found'
  });
});

// 500 API
app.use('/api', (err, req, res, next) => {
  res.statusCode = 500;
  res.json({
    msg: err.message || 'Exception'
  });
});


app.listen(1234, () => {
  console.log('Le serveur a démarré');
});
