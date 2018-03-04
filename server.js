const express = require('express');

var server = express();

server.set('port', process.env.PORT || 3000);

// basic routing
server.get('/', (request, response) => {
    response.send('Home Page');
});

server.get('/about', (request, response) => {
    response.send('About Page');
});


// express error handling middleware
server.use((request, response) => {
    response.type('text/plain');
    response.status(505);
    response.send('Error Page');
})

// binding to a port
server.listen(3000, () => {
    console.log('Express server started at port 3000');
});