const express = require('express');
const server = express();
const debug = require('debug')('pdf:server');
const createRouter = require('./routes');

server.use(createRouter());
server.listen(8080, () => {
  debug('Server listening on port 8080');
});
