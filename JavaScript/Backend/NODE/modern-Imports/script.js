import { secondNumber } from "./module.js";     // .js is important to add here!

const a = 64;
const b = secondNumber;

console.log(a);
console.log(b);
console.log(a, '+', b, '=', a + b);


// Specify   "type": "module"   in package.json for .js module imports!
