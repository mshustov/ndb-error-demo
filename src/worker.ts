const http = require('http');
const { logger } = require('./logger');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
    logger('finished request');
}).listen(process.env.PORT, '127.0.0.1');

console.log(`Server running at http://127.0.0.1:${process.env.PORT}/`);