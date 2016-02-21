const PDFPrinter = require('pdfmake');
const createCoverPage = require('./createCoverPage');
const createBadges = require('./badges/createBadges');
const defineStyles = require('./defineStyles');

module.exports = function pdfmake({customerData, badgesData}) {
  const fonts = {
    Roboto: {
      normal: 'fonts/Roboto-Regular.ttf',
      bold: 'fonts/Roboto-Medium.ttf',
      italics: 'fonts/Roboto-Italic.ttf'
    }
  };
  const printer = new PDFPrinter(fonts);
  const content = [
    createCoverPage(customerData),
    createBadges(badgesData)
  ];
  const styles = defineStyles();
  const docDefinition = { content, styles };

  return printer.createPdfKitDocument(docDefinition);
};
