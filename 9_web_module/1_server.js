/**
 * Creating a Web Server using Node
 */

// Import module
var http = require('http');
var fs = require('fs');
var url = require('url');



// Membuat server di port 8081
http.createServer(function (request, response) {
    // Parse request yang berisi nama file
    var pathname = url.parse(request.url).pathname;

    // Cetak nama file yang direquest
    console.log("Request for " + pathname + " received.");

    // Membaca file yang direquest dari sistem file
    fs.readFile(pathname.substr(1), function(err, data){
        if (err) {
            // jika error
            console.log(err);
            // HTTP Status: 404 (NOT FOUND)
            // Content Type: text/html
            response.writeHead(404, {'Content-Type':'text/html'});
        } else {
            // jika berhasil (halaman ditemukan)
            // HTTP Status: 200 (OK)
            // Content Type: text/html
            response.writeHead(200, {'Content-Type':'text/html'});

            // Tulis konten dari file ke response body
            response.write(data.toString());
        }

        // Kirimkan response body
        response.end();
    });

}).listen(8081); // => port 8081


// Cetak pesan
console.log("Server running at http://127.0.0.1:8081/");