const pdfKit = require('../pdfWriter/pdfKit');
const writeStream = require('../createWriteStream')('output/output.pdf');
const badgesData = require('../../data/badges.json');
const customerDetails = {
  addressLines: ['Simon Adcock', '14 Waffle Road', 'Maple Park']
};

module.exports = function badesController(req, res) {
  pdfKit({writeStream, badgesData, customerDetails});

  res.send('Done badges things');
};
