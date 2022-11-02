//console.log(__filename);
//console.log(__dirname);

const EventEmitter = require('events');
//const emitter = new EventEmitter();

var url = 'https://mylogger.io/log';

class Logger extends EventEmitter {
  log(message) {
    // Send an HTTP request
    console.log(message);
  
    // Raise an event
    this.emit('messageLogged', {id: 1, url: 'https://'});
  }
}





// the message is private because it is scoped to this module
module.exports = Logger;

