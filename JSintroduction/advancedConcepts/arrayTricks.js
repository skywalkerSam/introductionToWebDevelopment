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
// console.log(uniqueArray);


// imperative way... ( for of )
for (let i of someArray) {
    // console.log(i);
}

// for of with index and values ( .entries() )
for (let [i, val] of someArray.entries()) {
    console.log(i, val);
}


// for in ( NOT recommended for arrays!! ), Objects only!
let person = { firstName: 'Sam', lastName: 'Skywalker', age: 21 };

for (let key in person) {
    // it does not guarantee the order of properties
    console.log(key, person[key]);
}


// declarative way... ( .forEach() )
someArray.forEach((val) => { console.log(val) });

// index and values
// someArray.forEach((val, i) => {console.log(val, i)});
// the values are in opposite order of the for of loop for some reason...


// .map(), creates a new array!
let mappedArray = someArray.map((val) => { return (val * val) });
console.log(someArray);    // the original array is unchanged
console.log(mappedArray);

// .filter()
let oddNumbers = someArray.filter((val) => { return (val % 2 !== 0) });
console.log(oddNumbers);

// .find()
let firstOddNumber = someArray.find((val) => { return ( val % 2 !== 0) });
console.log(firstOddNumber);

let firstEvenNumber = someArray.find((val) => {return (val % 2 === 0)});
console.log(firstEvenNumber)

// .findIndex()
let firstOddNumberIndex = someArray.findIndex((val) => { return ( val % 2 !== 0) });
console.log(firstOddNumberIndex);

// .reduce()
let summed = someArray.reduce(( accumulator, currentValue) => { return accumulator + currentValue}, 0);
console.log(summed);

let product = someArray.reduce(( acc, val) => { return acc * val}, 1)
console.log(product);




