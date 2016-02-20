const fs = require('fs');

module.exports = function createWriteStream(path) {
  return fs.createWriteStream(path);
};
