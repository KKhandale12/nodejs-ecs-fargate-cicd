const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1 style="color: blue; font-family: Arial;">Hello from ECS Fargate! (v1)</h1>');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
