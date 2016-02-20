module.exports = function createWriteStream({fs, path}) {
  return fs.createWriteStream(path);
};
