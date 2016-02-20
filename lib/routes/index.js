const express = require('express');
const appRouter = express.Router();

appRouter.get('/badges', (req, res) => {
  res.send('I heard you want badges?');
});

module.exports = appRouter;
