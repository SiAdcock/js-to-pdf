const MemoryFS = require('memory-fs');
const pdfKit = require('../pdfWriter/pdfKit');
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
  const doc = pdfKit({writeStream, badgesData, customerDetails});

  res.set('Content-Type', 'application/pdf');
  doc.pipe(res);
};
