var fs = require('fs');


// Asynchronous read
fs.readFile('input.txt', function(err, data) {
    if (err) {
        // jika terjadi error
        return console.error(err);
    }

    // jika berhasil
    console.log("Asynchronous read: " + data.toString());
});


// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());


console.log("Program Ended.");