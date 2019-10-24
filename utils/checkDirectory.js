const fs = require('fs');

function checkDirectory(directory, callback) {  
  fs.stat(directory, function(err, stats) {
    if (err && err.errno === 34) {
      console.log('Path to which you try to write the file is not exist in current file system');
      console.log('Write valid path!');
      console.log('Press Control + C to quit');
    } else {
      callback(err);
    }
  });
};

module.exports = checkDirectory;