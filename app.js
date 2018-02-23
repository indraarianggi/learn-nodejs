/**
 * Readable Streams
 */

// import module
var fs = require('fs');


var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8'); // 'utf8' => second parameter to serve the data in string

var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');


// First read data from readMe.txt, (*if event 'data'/data is received -> fire this function)
myReadStream.on('data', function(chunk) {
    console.log("new chunk received: ");
    
    // then write data received to writeMe.txt
    myWriteStream.write(chunk);
});
