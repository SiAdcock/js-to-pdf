const PDFDocument = require('pdfkit');

module.exports = function createDocument() {
  return new PDFDocument();
};
