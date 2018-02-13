// Creating First Node.js Application

// ===== Step 1 : Import Required Module ===== //
var http = require("http");


// ===== Step 2 : Create Server ===== //
// buat server di post 8081
http.createServer(function (request, response) {

    // send the HTTP header
    // HTTP status: 200 (OK)
    // Content type: text/plain
    response.writeHead(200, {'Content-Type':'text/plain'});

    // send response body as "Hello World!"
    response.end('Hello World!\n');

}).listen(8081);

// console will print the message
console.log('Server running at http://127.0.0.1:8081/');


// ===== Step 3 : Execute / Start The Server ===== //
// using command: $ node [filename.js]


// ===== Step 4 : Make s Request to Node.js Server ===== //
// Open http://127.0.0.1:8081/ in any browser
// Hello World! will appear

// To stop the program: CTRL + C