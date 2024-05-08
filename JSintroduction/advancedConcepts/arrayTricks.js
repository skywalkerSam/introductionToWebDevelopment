/** Arrays
 * 
 * Arrays are used to store multiple values in a single variable.
 * 
 * Arrays are a special type of objects. The `typeof` operator in JavaScript returns "object" for arrays.
 * 
 * `_` is a convention used when the parameter is not going to be used in the function.
 * 
 * [...Array(100).keys()]: The `...` is the spread operator, which takes the iterator returned by `Array(100).keys()` and spreads its values into **a new array**.
 * 
 */


// undefined
let undefArray = Array(100);
console.log(undefArray);  // [ <100 empty items> ]

// array
let someArray = [3, 6, 9, 33, 66, 99, 36, 69, 96];
// console.log(someArray);

// console.log(typeof (someArray))  // object

// array with a hundred items
let anotherArray = Array(100).fill('STUFF');
// console.log(anotherArray);

console.log(typeof (Array))     // function

// range ( 1 - 100 )
let rangedArray = Array(100).fill(0).map((_, i) => ++i)
// console.log(rangedArray);

// range ( 0 - 99 )
let anotherRangedArray = [...Array(100).keys()];
// console.log(anotherRangedArray);

// Set() - removes duplicates




