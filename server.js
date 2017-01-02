var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Worlasdasdd\n');
}).listen(8080, '172.30.193.69');
console.log('Server running at http://127.0.0.1:1337/');
