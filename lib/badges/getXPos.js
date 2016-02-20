module.exports = function getXPos(index, startX, spacingX, badgesPerRow) {
  return startX + (spacingX * (index % badgesPerRow));
};
