var fs = require('fs');

fs.readFile('input.txt', function(err, data) {
    // jika error
    if (err) {
        return console.log(err);
    }
    
    // jika berhasil
    console.log(data.toString());
});

console.log("Program Ended");