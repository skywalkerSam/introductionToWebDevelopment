// purpose: test nodemon module

const importOne = require('./module.js');     // .js is important to add here!

const thePrefix = 512;
const thePostfix = importOne.secretNumber

console.log(thePrefix + thePostfix)
