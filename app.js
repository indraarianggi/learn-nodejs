/**
 * Custom Event
 */

// import module
var fs = require('fs');

/**
 Synchronous process
 
// Create directory
fs.mkdirSync('assets');

// Delete directory
fs.rmdirSync('assets');

*/


/**
 Asynchronous process
*/

// Create directory
fs.mkdir('assets', function() {
    fs.readFile('readMe.txt', 'utf8', function(err, data) {
        fs.writeFile('./assets/writeMe.txt', data + " [output of writing file]");
    });
});


// Delete a file there is in the folder first
fs.unlink('./assets/writeMe.txt', function() {
    // then delete the folder/directory
    fs.rmdir('assets');
});
