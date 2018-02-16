/**
 * Piping adalah mekanisme dimana output dari suatu stream
 * menjadi input untuk stream yang lain
 * 
 */

var fs = require('fs');

// create readable stream
var readerStream = fs.createReadStream('input.txt');


// create writable stream
var writerStream = fs.createWriteStream('output_piping.txt');


// pipe the read and write operations
// read input.txt and then write data to output_piping.txt
readerStream.pipe(writerStream);


console.log("Program Ended.");