var fs = require('fs');

var data = "Learn Node.js Awesome";


// create writable stream
var writerStream = fs.createWriteStream('output.txt');


// write data to stream with UTF8 encoding
writerStream.write(data, 'UTF8');


// mark the end of file
writerStream.end();


// handle stream events => finish and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err) {
    console.log(err.stack);
});


console.log("Program Ended.");