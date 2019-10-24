const fs = require('fs');

function getFileSizeInBytes(filename) {
  const stats = fs.statSync(filename)
  const fileSizeInBytes = stats["size"]
  return fileSizeInBytes
};

module.exports = getFileSizeInBytes;