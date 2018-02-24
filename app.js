/**
 * Express
 */

var express = require('express');

var app = express();

// tell express that use ejs as view engine
app.set('view engine', 'ejs');


// use middleware to serve static file
app.use('/assets', express.static('assets'));


// routing with express
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

// route params
app.get('/profile/:name', function(req, res) {
    // prepare object data
    var moreData = {age: 22, job: 'Programmer', hobbies: ['programming', 'reading', 'drawing']};

    // render view and pass the data to view (profile.ejs)
    res.render('profile', {person: req.params.name, data: moreData});
});

// set port
app.listen(3000);