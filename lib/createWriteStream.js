module.exports = function createWriteStream({fs, outfilePath}) {
  return fs.createWriteStream(outfilePath);
};
