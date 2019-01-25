var http = require('http'); 

var server = http.createServer(function (req, res) {   
        (req.url == '/') 
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('<html><body><h1>This is my First Node JS Page</h1><h2>Quick example of how Node is able to reponse to client request</body></html>');
        res.end();
    
    });
    server.listen(5000); 