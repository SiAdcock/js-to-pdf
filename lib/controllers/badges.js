const MemoryFS = require('memory-fs');
const createPDFKitDocument = require('../pdfWriter/pdfKit');
const createWriteStream = require('../createWriteStream');
const badgesData = require('../../data/badges.json');

module.exports = function badgesController(req, res) {
  const fs = new MemoryFS();
  const customerDetails = {
    addressLines: ['Simon Adcock', '14 Waffle Road', 'Maple Park']
  };
  const outfilePath = '/output.pdf';
  const writeStream = createWriteStream({ outfilePath, fs });
  const document = createPDFKitDocument({badgesData, customerDetails});

  res.set('Content-Type', 'application/pdf');
  document.pipe(writeStream);
  document.end();
  document.pipe(res);
};
