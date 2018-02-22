/**
 * Create a Server
 */

// import module
var http = require('http');


var server = http.createServer(function(req, res) {
    // get url request
    console.log("request was made: " + req.url);

    // response header
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // send response to teh client
    res.end("Hello World!");
});

// set listening port
server.listen(3000, '127.0.0.1');

console.log("Listening to port 3000");