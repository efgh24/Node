console.log(__filename);
console.log(__dirname);

var url = 'https://mylogger.io/log';
function log(message) {
  // Send an HTTP request

  console.log(message);
}
// the message is private because it is scoped to this module
module.exports.log = log;
