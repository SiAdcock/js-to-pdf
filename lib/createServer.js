const express = require('express');
const routes = require('./routes');

module.exports = function createServer(port) {
  const app = express();

  app.use(routes);

  return app;
};
