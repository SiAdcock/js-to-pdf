const MemoryFS = require('memory-fs');
const createPDFKitDocument = require('../pdfWriter/pdfKit');
const createWriteStream = require('../createWriteStream');
const badgesData = require('../../data/badges.json');
const customerDetails = {
  addressLines: ['Simon Adcock', '14 Waffle Road', 'Maple Park']
};

module.exports = function badesController(req, res) {
  const fs = new MemoryFS();
  const outfilePath = '/output.pdf';
  const writeStream = createWriteStream({
    path: outfilePath,
    fs
  });
  const document = createPDFKitDocument({badgesData, customerDetails});

  res.set('Content-Type', 'application/pdf');
  document.pipe(writeStream);
  document.end();
  document.pipe(res);
};
