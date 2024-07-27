const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send a response body as hello world, The game might crash because of the response
    res.end('Hello, World!\n');
});

server.listen(80, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:80/');
});
