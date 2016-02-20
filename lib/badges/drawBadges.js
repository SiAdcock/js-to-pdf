const getXPos = require('./getXPos');
const getYPos = require('./getYPos');
const drawBadge = require('./drawBadge');
const addPage = require('../addPage');

module.exports = function drawBadges(doc, badges) {
  const startX = 100;
  const startY = 100;
  const spacingY = 150;
  const spacingX = 150;
  const badgeRadius = 50;
  const badgesPerRow = 3;

  addPage(doc);
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
