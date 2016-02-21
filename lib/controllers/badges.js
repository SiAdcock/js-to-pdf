const createPDFKitDocument = require('../documentPrinter/');
const badgesData = require('../../data/badges.json');
const customerData = require('../../data/customer.json');

module.exports = function badgesController(req, res) {
  const document = createPDFKitDocument({badgesData, customerData});

  res.set('Content-Type', 'application/pdf');
  document.pipe(res);
};
