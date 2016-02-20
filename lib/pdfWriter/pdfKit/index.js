const doc = require('./createDocument')();
const addCoverInfo = require('./addCoverInfo');
const drawBadges = require('./badges/drawBadges');

module.exports = function pdfKit({writeStream, customerDetails, badgesData}) {
  //set output stream
  doc.pipe(writeStream);

  //draw cover info on implicitly added page
  addCoverInfo(doc, customerDetails.addressLines);

  //add pages, draw badges
  drawBadges(doc, badgesData);

  //write PDF file
  doc.end();

};
