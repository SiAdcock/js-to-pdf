const PDFPrinter = require('pdfmake');

module.exports = function pdfKit({customerData, badgesData}) {
  const fonts = {
    Roboto: {
      normal: 'fonts/Roboto-Regular.ttf',
      bold: 'fonts/Roboto-Medium.ttf',
      italic: 'fonts/Roboto-Italic.ttf'
    }
  };
  const printer = new PDFPrinter(fonts);
  const docDefinition = {
    content: [
      'First paragraph',
      'Another paragraph'
    ]
  };
  const doc = printer.createPdfKitDocument(docDefinition);

  return doc;
};
