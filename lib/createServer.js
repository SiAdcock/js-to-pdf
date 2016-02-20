const express = require('express');
const debug = require('debug')('pdf:server');

module.exports = function createServer(port) {
  const app = express();

  app.listen(port, () => {
    debug(`Server listening on port ${port}`);
  });

  return app;
};
