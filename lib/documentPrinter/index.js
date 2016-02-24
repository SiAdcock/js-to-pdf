const MemoryFS = require('memory-fs');
const createWriteStream = require('./createWriteStream');
const createDocument = require('./imageAssembler/');

module.exports = function documentPrinterAdaptor({badgesData, customerData}) {
  const fs = new MemoryFS();
  const outfilePath = '/output.pdf';
  const writeStream = createWriteStream({ outfilePath, fs });
  const document = createDocument({badgesData, customerData});

  //document.pipe(writeStream);
  //document.end();

  return document;
};
