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

*Binary search* is a faster way to find an item in a sorted array with **O(log n)** time complexity, compared to a regular loop with **O(n)** time complexity.

- An ***efficient** way to find an *item* in a sorted array

- **Divide and Conquer** approach

- [**Time Complexity**](https://en.wikipedia.org/wiki/Time_complexity) of `O(log n)`, **Logarithmic**

<img alt='bigOcomplexityChart' src='./Resources/memes/bigOcomplexityChart.jpg' width=600 />

- `O(1)` **Constant**, **theBest*
- `O(n)` **Linear**, *Good*
- `O(n log n)` **Logarithmic**, *Fair* Trade
- `O(n^2)` **Quadratic**, *Bad*
- `O(2^n)` **Exponential**, *Horrible*
- `O(n!)` **Factorial**, *Worst*

<img alt='comparisonComputationalComplexity' src='./Resources/memes/comparisonComputationalComplexity.svg' width=600 />

### *normalSearch, `O(n!)`

```javascript
// normal search, O(n!)
function search(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }
    }
    return -1;
}
```

### *binarySearch, `O(log n)`

```javascript

```
