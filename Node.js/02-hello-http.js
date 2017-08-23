const http = require('http');

const server = http.createServer();

server.on('request', function(req, res) {
  res.setHeader('Content-type', 'application/json');
  switch (req.url) {
    case '/api/contacts':
      res.write(JSON.stringify([{prenom: 'Romain'}]));
      break;
    case '/api/contacts/1':
      res.write(JSON.stringify({prenom: 'Romain'}));
      break;
    default:
      res.statusCode = 404;
      res.write(JSON.stringify({msg: 'Not Found'}));
      break;
  }
  res.end();
});

server.listen(1234);
