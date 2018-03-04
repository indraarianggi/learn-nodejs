const http = require('http');

var server = http.createServer();

server.on('request', (request, response) => {
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write('Hello World');
    response.end();
});

server.listen(3000, () => {
    console.log('Node server created at port 3000');
});