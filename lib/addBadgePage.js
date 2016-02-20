const getRowIndex = (index, badgesPerRow) => {
  return Math.floor(index / badgesPerRow);
};
const getXPos = (index, startX, spacingX, badgesPerRow) => {
  return startX + (spacingX * (index % badgesPerRow));
};
const getYPos = (index, startY, spacingY, badgesPerRow) => {
  return startY + (getRowIndex(index, badgesPerRow) * spacingY);
};

module.exports = function addBadgePage(doc, badgeData) {
  const startX = 100;
  const startY = 100;
  const spacingY = 150;
  const spacingX = 150;
  const badgeRadius = 50;
  const badgesPerRow = 3;

  doc.addPage();
  badgeData.forEach((badge, index) => {
    const x = getXPos(index, startX, spacingX, badgesPerRow);
    const y = getYPos(index, startY, spacingY, badgesPerRow);

    doc.circle(x, y, badgeRadius)
      .fill(badge.color);
  });

  return doc;
};
