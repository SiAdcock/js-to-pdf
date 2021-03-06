const getRowIndex = (index, badgesPerRow) => {
  return Math.floor(index / badgesPerRow);
};
const getColIndex = (index, badgesPerRow) => {
  return index % badgesPerRow;
};
const getYPos = (index, startY, spacingY, badgesPerRow) => {
  return startY + (getRowIndex(index, badgesPerRow) * spacingY);
};
const getXPos = (index, startX, spacingX, badgesPerRow) => {
  return startX + (getColIndex(index, badgesPerRow) * spacingX);
};

module.exports = function getCoords({index, startX, spacingX, startY, spacingY, badgesPerRow}) {
  return {
    x: getXPos(index, startX, spacingX, badgesPerRow),
    y: getYPos(index, startY, spacingY, badgesPerRow)
  };
};
