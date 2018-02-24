/**
 * Basic Routing
 */

// import module
var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res) {

    console.log('request was made: ' + req.url);

    // basic routing
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/contact-us') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if (req.url === '/api/users') {
        var users = [
            {
                name: 'Indra',
                job: 'Programmer',
                age: 22
            },
            {
                name: 'Arianggi',
                job: 'UI/UX Designer',
                age: 22
            }
        ]

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }

});


server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');