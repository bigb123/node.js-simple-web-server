var http = require('http'); 

var listeningPort = 80;

var server = http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>Nodejs is hosting this page</p></body></html>');
    res.end();
    // process.exit();  // server will provide one answer and exit the process
});

server.listen(listeningPort); 

console.log('Node.js web server at port ' + listeningPort + ' is running..')