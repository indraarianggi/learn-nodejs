/**
 * Creating a Web Client using Node
 */

// Import module
var http = require('http'); 

// Options (konfigurasi) yang digunakan oleh request
var options = {
    host: 'localhost',
    port: '8081',
    path: '/index.html'
}

// Fungsi callback digunakan untuk menangani response
var callback = function(response) {
    // update stream dgn data scr terus menerus
    var body = '';

    response.on('data', function(data) {
        body += data;
    });

    response.on('end', function() {
        // Data telah lengkap diterima
        console.log(body);
    });
}


// Membuat request ke server
var req = http.request(options, callback);

req.end();