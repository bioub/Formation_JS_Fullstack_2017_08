const mongoose = require('mongoose');

const Societe = mongoose.model('societes', {
  nom: {
    type: String,
    required: true
  },
  ville: String,
});

module.exports = Societe;
