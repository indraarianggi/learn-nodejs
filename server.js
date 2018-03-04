const net = require('net');
const fs = require('fs');

var filename = process.argv[2];

var server = net.createServer((connection) => {
    console.log('Subscriber connected');
    connection.write(`watching ${filename} for changes`);

    let watcher = fs.watch(filename, (err, data) => {
        connection.write(`${filename} has changed`)
    });

    connection.on('close', () => {
        console.log('Subscriber disconnected');
        watcher.close();
    });

});

server.listen(3000, () => {
    console.log('Listening for subscriber');
});
