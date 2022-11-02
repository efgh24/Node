const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);


const os = require('os');
var totalMemory = os.totalmem()
var freeMemory = os.freemem()

console.log('Total Memory: '+ totalMemory);
console.log('Free Memory: '+ freeMemory);

// Template String
// ES6 / ES2015: EcmaScript 6

console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)

// Package File System

const fs = require('fs');

const files = fs.readdirSync('./');
console.log(`Files: ${files}`)

fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
})

fs.readdir('$', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
})