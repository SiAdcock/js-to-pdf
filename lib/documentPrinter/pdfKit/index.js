const PDFDocument = require('pdfkit');
const addCoverInfo = require('./addCoverInfo');
const drawBadges = require('./badges/drawBadges');

module.exports = function pdfKit({customerData, badgesData}) {
  const doc = new PDFDocument();

  addCoverInfo(doc, customerData.addressLines);
  drawBadges(doc, badgesData);

  return doc;
};
