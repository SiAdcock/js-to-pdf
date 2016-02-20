const drawBadge = require('./drawBadge');
const getRowIndex = (index, badgesPerRow) => {
  return Math.floor(index / badgesPerRow);
};
const getXPos = (index, startX, spacingX, badgesPerRow) => {
  return startX + (spacingX * (index % badgesPerRow));
};
const getYPos = (index, startY, spacingY, badgesPerRow) => {
  return startY + (getRowIndex(index, badgesPerRow) * spacingY);
};

module.exports = function addBadgePages(doc, badges) {
  const startX = 100;
  const startY = 100;
  const spacingY = 150;
  const spacingX = 150;
  const badgeRadius = 50;
  const badgesPerRow = 3;

  doc.addPage();
  badges.forEach((badge, index) => {
    drawBadge(doc, {
      x: getXPos(index, startX, spacingX, badgesPerRow),
      y: getYPos(index, startY, spacingY, badgesPerRow),
      radius: badgeRadius,
      color: badge.color
    });
  });

  return doc;
};
