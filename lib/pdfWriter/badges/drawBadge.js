module.exports = function drawBadge(doc, badge) {
  doc.circle(badge.x, badge.y, badge.radius)
    .fill(badge.color);

  return doc;
};
