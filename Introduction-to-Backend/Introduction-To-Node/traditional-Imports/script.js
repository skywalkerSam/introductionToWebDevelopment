const importModule = require('./module')

const smallNumber = 64;
const largeNumber = importModule.largeNumber;

console.log(smallNumber);
console.log(largeNumber);
console.log(smallNumber, '+', largeNumber, '=', smallNumber + largeNumber)


// a long time ago, Javascript was not built for module imports. So, Node had to come up with its own way of importing modules i.e. commonJS Module Imports.

// Finally, Javascript got its import functionality and, with Ecma Script 6 (ES6) Node accepted the Javascript way of importing modules i.e. Modern Imports. (Node v12.0 or later)


// Oh, man... cool story, huh!  😂🤣😊😊🤯😁\
