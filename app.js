/**
 * Readable Streams
 */

// import module
var http = require('http');



var server = http.createServer(function(req, res) {
    console.log('request was made: ' + req.url);

    res.writeHead(200, {'Content-Type': 'application/json'});

    // Prepare json data
    var myObj = {
        name: 'Indra',
        job: 'Programmer',
        age: 22
    }

    // Send json as response to client
    res.end(JSON.stringify(myObj));

});


server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');