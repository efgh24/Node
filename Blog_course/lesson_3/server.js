const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request made');
});

// first argument is port
// second argument is localhost (default)
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});