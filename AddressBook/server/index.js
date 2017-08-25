const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const contactRoutes = require('./routes/contact');
const societeRoutes = require('./routes/societe');
const mongoose = require('mongoose');
const fs = require('fs');

mongoose.connect('mongodb://localhost/addressbook', {
  useMongoClient: true,
});

mongoose.Promise = Promise;

const port = process.env.PORT || 8080;
const app = express();

// On est en dev si pas de variable d'environnement PORT
if (!process.env.PORT) {
  const webpackConf = require('../webpack.config');
  const webpack = require('webpack');
  const webpackMiddleware = require('webpack-dev-middleware');
  app.use(webpackMiddleware(webpack(webpackConf), { serverSideRender: true }));
}
else {
  app.use(express.static(path.resolve(__dirname + '/../dist')));
}

app.use(morgan('dev'));
app.use('/api', cors());

app.use('/api/contacts', contactRoutes);
app.use('/api/societes', societeRoutes);

app.use('/api', (req, res) => {
  res.statusCode = 404;
  res.json({
    msg: 'Not Found'
  });
});

app.use('/api', (err, req, res) => {
  res.statusCode = 500;
  res.json({
    msg: err.message
  });
});


// On est en dev si pas de variable d'environnement PORT
if (!process.env.PORT) {
  app.use((req, res) => {
    const entryPoints = ['inline','polyfills','sw-register','styles','vendor','main'];

    const stats = res.locals.webpackStats.toJson();
    const chunks = stats.chunks.sort(function sort(left, right) {
      let leftIndex = entryPoints.indexOf(left.names[0]);
      let rightindex = entryPoints.indexOf(right.names[0]);
      if (leftIndex > rightindex) {
        return 1;
      }
      else if (leftIndex < rightindex) {
        return -1;
      }
      else {
        return 0;
      }
    });

    fs.readFile(path.resolve(__dirname + '/../client/index.html'), (err, data) => {
      let content = data.toString();
      const bodyRegExp = /(<\/body\s*>)/i;

      content = content.replace(bodyRegExp, chunks.map(chunk => `<script src="${chunk.files[0]}"></script>`).join('\n') + '\n$1');

      res.send(content);
    });
  });
}
else {
  app.use((req, res) => {
    res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
  });
}

app.listen(port, () => {
  console.log('Server started on port ' + port);
});
