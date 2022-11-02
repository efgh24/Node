function sayHello(name) {
  console.log('Hello ' + name);
}
sayHello('E');
//console.log(window); this will error out because in node there is no window
// node has other objects that work with browsers
// node module system
// os
// fs - filesystem
// events
// http

// window -> Node has global
// setTimeout()
// clearTimeout()
// setInterval()
// clearTimeout()

var message = '';
console.log(global.message);
console.log(module);

//global.message returns undefined because of variable scoping

const logger = require('./logger'); //store as a const, rather than var because overwrite
console.log(logger);
logger.log('message');

//const log = require('./logger'); //store as a const, rather than var because overwrite
//log('message');
