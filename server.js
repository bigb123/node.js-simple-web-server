var http = require('http'); // 1 - Import Node.js core module

var listeningPort = 8080;

var server = http.createServer(function (req, res) {   // 2 - creating server

    res.writeHead(200, { 'Content-Type': 'text/html' }); 
    // set response content    
    res.write('<html><body><p>Nodejs is hosting this page</p></body></html>');
    res.end();

});

server.listen(listeningPort); //3 - listen for any incoming requests

console.log('Node.js web server at port ' + listeningPort + ' is running..')