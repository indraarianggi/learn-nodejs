/**
 * Chaining adalah mekanisme untuk menghubungkan output dari satu stream
 * ke stream yang lain, dan membuat rantai operasi beberapa stream.
 * 
 * Hal ini normalnya menggunakan operasi piping.
 * 
 */

var fs = require('fs');
var zlib = require('zlib');


// Compress the file input.txt to input_chaining.txt.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input_chaining.txt.gz'));


console.log("File Compressed.");