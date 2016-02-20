module.exports = function addCoverPage(doc, addressLines) {
  const startX = 100;
  const startY = 100;
  const spacingY = 50;
  const addressStartY = 200;

  doc.font('fonts/PalatinoBold.ttf')
    .fontSize(25)
    .text('Designs for customer:', startX, startY)
    .text('=====================', startX, startY + spacingY)
    .fontSize(18);

  addressLines.forEach((line, index) => {
    doc.text(line, startX, addressStartY + (index * spacingY));
  });

  return doc;
};
