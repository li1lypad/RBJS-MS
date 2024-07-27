const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the file path
const filePath = path.join(__dirname, 'rb3', 'ps3', 'live', 'dlc_store', 'na', 'dlc_top_ps3_eng.dta');

const server = http.createServer((req, res) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    console.log('Headers:', req.headers);
    
    try {
        if (req.method === 'GET' && req.url === '/rb3/ps3/live/dlc_store/na/dlc_top_ps3_eng.dta?pid=515') {
            
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.error('Error reading file:', err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Server Error\n');
                    return;
                }
                
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(data);
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found\n');
        }
    } catch (error) {
        console.error('Error handling request:', error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error\n');
    }
});

server.listen(80, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:80/');
});
