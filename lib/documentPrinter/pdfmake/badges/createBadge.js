module.exports = function createBadge(badge) {
  return {
    type: 'ellipse',
    x: badge.x,
    y: badge.y,
    color: badge.color,
    fillOpacity: 0.5,
    r1: badge.radius,
    r2: badge.radius
  };
};
