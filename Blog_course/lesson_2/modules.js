// using xyz imports both people and ages
// const xyz = require('./people');

const { people, ages } = require('./people');

// console.log(xyz.people); 
// console.log(xyz.ages); 

// Since an empty object importing people is only used xyz is no longer defined

console.log(ages);
console.log(people);

const os = require('os');
console.log(os.platform(), os.homedir());