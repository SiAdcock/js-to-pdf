const PDFDocument = require('pdfkit');
const addCoverInfo = require('./addCoverInfo');
const drawBadges = require('./badges/drawBadges');
module.exports = function pdfKit({customerDetails, badgesData}) {
  const doc = new PDFDocument();

  addCoverInfo(doc, customerDetails.addressLines);
  drawBadges(doc, badgesData);

  return doc;
};
