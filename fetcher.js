const request = require('request');
const fs = require('fs');
const readline = require('readline');
const getFilesizeInBytes = require('./utils/getFileSize');
const checkDirectory = require('./utils/checkDirectory');

const args = process.argv.slice(2);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

request(args[0], (error, response, body) => {

  error ? console.log(error) : null;

  if (response.statusCode !== 200) {
    console.log("Not found, bad request");
    return;
  }

  checkDirectory(args[1], function(error) {  
    if(error) {
      console.log('Path to which you try to write the file is not exist in current file system');
      console.log('Write valid path!');
      console.log('Press Control + C to quit');
    } else {

      fs.access(args[1], fs.constants.F_OK, (err) => {
        if (err) {
          fs.writeFile(args[1], body, function(error) {
      
        if(error) {
            return console.log(error);
        }
        console.log(`Downloaded and saved ${getFilesizeInBytes(args[1])} bytes to ${args[1]}`);
      }); 
        } else {
          console.log(`${args[1]}  exist`);
            rl.question('File is already exist, do you want to re-write it(Y/N)?', (answer) => {
              if ( answer === "Y") {
                fs.writeFile(args[1], body, function(error) { 
                  if(error) {
                      return console.log(error);
                  }        
                  console.log(`Downloaded and saved ${getFilesizeInBytes(args[1])} bytes to ${args[1]}`);
                }); 
                console.log(`Ok, it was re-writed`);
              } else {
                console.log(`File never been saved`);
              }
            rl.close();
          });
        }
      });
    }
  });
});