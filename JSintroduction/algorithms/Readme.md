# ALGORITHMS

Solving basic algorithms with plain JavaScript...

<img alt='*theTest' src='./Resources/memes/theTest.webp' width=300 />

## [🥣 Cumulative Sum](https://fireship.io/courses/js/algo-sum/)

- Using **reducer**

```javascript
// reducer
function cumSum(arr) {
    let summed = arr.reduce((acc, curr) => { return acc + curr }, 0)
    return summed;
}

console.log(cumSum(theArray))
```

<!-- ![debugging101](./Resources/memes/debugging101.png) -->

<img src='./Resources/memes/debugging101.png' alt='debugging101' width='300' />

- Using **for loop**

```javascript
// for loop
function cumSummed(arr) {
    let summed = 0;
    for (let i = 0; i < arr.length; i++) {
        // console.log(i, summed)
        summed += arr[i];
    }
    return summed
}

console.log(cumSummed(theArray))
```

- Using **forEach**

```javascript
// forEach
function cummedSum(arr) {
    let summed = 0;
    arr.forEach((v) => {summed += v})
    // console.log(summed)      // debugging101 lol ;)
    return summed;
}

console.log(cummedSum(theArray))
```

<img alt='*timeDilation' src='./Resources/memes/timeDilation.jpg' width=300 />

## [🔪 Binary Search](https://fireship.io/courses/js/algo-binary-search/)


