var express = require('express');
var fs = require('fs');

var app = express();

// Perform main menu (index.hml) with access http://127.0.0.1:8081/ on browser
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});

// Show all user in users.json file
app.get('/listUsers', function(req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data) {
        console.log(data);

        res.end(data);
    });
});


// Add a user to users.json file (static)
var user = {
    "user5" : {
        "name" : "candra",
        "password" : "password5",
        "profession" : "student",
        "id" : 5
    }
}

app.post('/addUser', function(req, res) {
    // First read existing users
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data) {
        data = JSON.parse(data);
        data["user5"] = user["user5"];

        console.log(data);
        res.end(JSON.stringify(data));
    });
});


// Show user detail (static)
app.get('/:id', function(req, res) {
    // First read existing users
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data) {
        users = JSON.parse(data);
        var user = users["user" + req.params.id];

        console.log(user);
        res.end(JSON.stringify(user));
    });
});


// Delete a user from users.json (static)
app.delete('/deleteUser', function(req, res) {
    // First read existing users
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data) {
        data = JSON.parse(data);
        delete data["user" + 2];

        console.log(data);
        res.end(JSON.stringify(data));
    });
});



var server = app.listen(8081, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening http://%s:%s", host, port);
});