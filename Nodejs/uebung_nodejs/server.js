const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response status code and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.end('Hello World!\n');
});

// Start the server
server.listen(3456, 'localhost', () => {
  console.log('Server running at http://localhost:3456/');
});