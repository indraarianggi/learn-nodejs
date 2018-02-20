/**
 * Serving Static Files
 * 
 * modify server.js file to add functionality to handle static files
 */

var express = require('express');

var app = express();

// pass the name of the directory where you keep your static assets
app.use(express.static('public'));


app.get('/', function (req, res) {
    res.send("Hello World");
});


var server = app.listen(8081, function() {

    var host = server.address().address;
    var port = server.address().port;


    console.log("Example app listening at http://%s:%s", host, port);


});