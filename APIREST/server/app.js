const express = require('express');
const mongoose = require('mongoose');
const routesContact = require('./routes/contact');

mongoose.connect('mongodb://localhost/addressbook', {
  useMongoClient: true,
});
mongoose.Promise = Promise;

const app = express();

app.use('/api/contacts', routesContact);

// 404 API
app.use('/api', (req, res, next) => {
  res.statusCode = 404;
  res.json({
    msg: 'Not Found',
  });
});

// 500 API
app.use('/api', (err, req, res, next) => {
  res.statusCode = 500;
  res.json({
    msg: err.message,
  });
});

module.exports = app;
