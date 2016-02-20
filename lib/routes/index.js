const express = require('express');
const appRouter = express.Router();
const badgesController = require('../controllers/badges');

appRouter.get('/badges', badgesController);

module.exports = appRouter;
