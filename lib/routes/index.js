const badgesController = require('../controllers/badges');
const router = require('express').Router();

module.exports = function routes() {
  router.get('/badges', badgesController);

  return router;
};
