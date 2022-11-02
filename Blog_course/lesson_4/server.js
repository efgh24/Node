const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // set head content type
  res.setHeader('Content-Type', 'text/html');
//   res.write('<head><link rel="stylesheet" href="#"></head>');
//   res.write('<p>ellllloo arrry!</p>');
//   res.write('<p>youre a wizard!</p>');
//   res.end();
  // send an html file
//   fs.readFile('./views/index.html', (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     }
//     //res.write(data);
//     res.end(data);
//   });
  // routing
  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-us':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
  }

  // send html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  });

});

// first argument is port
// second argument is localhost (default)
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});