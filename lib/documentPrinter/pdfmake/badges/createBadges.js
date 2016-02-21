const getCoords = require('./getCoords');
const createBadge = require('./createBadge');

module.exports = function drawBadges(badgesData) {
  const startX = 50;
  const startY = 50;
  const spacingY = 150;
  const spacingX = 150;
  const badgeRadius = 50;
  const badgesPerRow = 3;

  const canvas = badgesData.map((badge, index) => {
    const coords = getCoords({index, startX, spacingX, startY, spacingY, badgesPerRow});

    return createBadge({
      x: coords.x,
      y: coords.y,
      radius: badgeRadius,
      color: badge.color
    });
  });

  return {
    canvas
  };
};
