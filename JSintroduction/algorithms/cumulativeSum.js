// Cumulative Sum


let theArray = [3, 6, 9, 33, 66, 99, 36, 69, 96]

// reducer
function cumSum(arr) {
    let summed = arr.reduce((acc, curr) => { return acc + curr }, 0)
    return summed;
}

console.log(cumSum(theArray))



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



