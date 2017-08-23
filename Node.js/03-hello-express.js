
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

const app = express();

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

  res.json(contact);
});

// Remplacer : PUT /api/contacts/123

// Supprimer : DELETE /api/contacts/123

app.listen(1234, () => {
  console.log('Le serveur a démarré');
});
