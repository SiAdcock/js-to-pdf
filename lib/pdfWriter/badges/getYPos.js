const getRowIndex = (index, badgesPerRow) => {
  return Math.floor(index / badgesPerRow);
};

module.exports = function getYPos(index, startY, spacingY, badgesPerRow) {
  return startY + (getRowIndex(index, badgesPerRow) * spacingY);
};
