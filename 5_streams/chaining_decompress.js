var fs = require('fs');
var zlib = require('zlib');


// Decompress the file input_chaining.txt.gz to output_chaining.txt
fs.createReadStream('input_chaining.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('output_chaining.txt'));


console.log("File Decompressed.");