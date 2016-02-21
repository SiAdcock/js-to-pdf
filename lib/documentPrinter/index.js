const MemoryFS = require('memory-fs');
const createWriteStream = require('./createWriteStream');
const createPDFDocument = require('./pdfmake/');

module.exports = function documentPrinterAdaptor({badgesData, customerData}) {
  const fs = new MemoryFS();
  const outfilePath = '/output.pdf';
  const writeStream = createWriteStream({ outfilePath, fs });
  const document = createPDFDocument({badgesData, customerData});

  document.pipe(writeStream);
  document.end();

  return document;
};
