const getCoords = require('./getCoords');
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
    const coords = getCoords({index, startX, spacingX, startY, spacingY, badgesPerRow});

    drawBadge(doc, {
      x: coords.x,
      y: coords.y,
      radius: badgeRadius,
      color: badge.color
    });
  });

  return doc;
};
