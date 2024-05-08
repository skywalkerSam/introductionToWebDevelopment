/** Arrays
 * 
 * Arrays are used to store multiple values in a single variable.
 * 
 * Arrays are a special type of objects. The `typeof` operator in JavaScript returns "object" for arrays.
 * 
 * 
 * `_` is a convention used when the parameter is not going to be used in the function.
 * 
 * 
 * [...Array(100).keys()]: The `...` is the spread operator, which takes the iterator returned by `Array(100).keys()` and spreads its values into **a new array**.
 * 
 * 
 * using `new` before Set() bc it's a constructor function, and we need to create a new instance of it.
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


//push
someArray.push(3, 6, 9);        // add to the end of the array
// console.log(someArray);


// Set(), remove duplicates.
let uniqueArray = [...new Set(someArray)];      // convert it back to an array
console.log(uniqueArray);

// imperative way...
// for of


// for in, DON'T use it!


// declarative functional way...
// .forEach()


// .map()


// .filter()


// .find()


// .findIndex()


// .reduce()





