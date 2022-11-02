const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});
logger.log('message');



//const emitter = new EventEmitter();

//class defines properties ex. Human
// object is an instance of class ex. Adam and Eve

// Register a listener
//emitter.addListener
// emitter.on('messageLogged', function(arg){ //e for event, or Eventargs
//     console.log('Listener Called', arg);
// });

// Get rid of function and add arrow
// emitter.on('messageLogged', (arg) => { //e for event, or Eventargs
//     console.log('Listener Called', arg);
// });

// Raise an event
//emitter.emit('messageLogged', {id: 1, url: 'https://'});

// Raise: logging (data: message)

// const log = require('./logger'); //store as a const, rather than var because overwrite
// log('message');