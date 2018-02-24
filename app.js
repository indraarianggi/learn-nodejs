/**
 * Express
 */

var express = require('express');

var app = express();


// routing with express
app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/contact', function(req, res) {
    res.send('Find me on linkedIn');
});

// route params
app.get('/profile/:name', function(req, res) {
    res.send('You requested to see profile with the name of ' + req.params.name);
});

// set port
app.listen(3000);