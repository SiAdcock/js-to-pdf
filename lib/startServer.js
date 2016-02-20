const server = require('./createServer')();
const debug = require('debug')('pdf:server');

server.listen(8080, () => {
  debug('Server listening on port 8080');
});
