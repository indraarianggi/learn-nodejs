const express = require('express');
const users = require('./users');

var server = express();

// setting the port
server.set('port', process.env.PORT || 3000);

// basic routing
server.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

server.get('/users', (request, response) => {
    response.json(users);
});


// binding to a port
server.listen(3000, () => {
    console.log('Express server started at port 3000');
});