// binarySearch


let theAnotherArray = ['Sam', 'Starboy', 'Trish', 'Stargirl', 'Life', 'Universe', '&', 'Whatever', 'tf', 'lies', 'beyond...', 'wtf, right?', 'Origins', 'Eternity', 'The Beginning of the end', 'Singularity', 'FML', 'Fuck', 'Just', 'Fuckin\'', 'Die', 'Already', '...']

// lowerCased + sorted
theArray = theAnotherArray.map((value) => value.toLowerCase()).sort()


function binarySearch(arr, target, start = 0, end = arr.length - 1) {

    let pointerIndex = Math.floor((start + end) / 2);
    let indexValue = arr[pointerIndex]
    console.log(start, end, pointerIndex, indexValue)

    // failed
    if (start > end) {
        console.log('\nNot Found!!')
        return -1;
    }

    // found
    if (indexValue === target) {
        console.log(`${target} found at ${pointerIndex} :)`)
        return pointerIndex;
    }

    // overshoot
    if (indexValue > target) {
        return binarySearch(arr, target, start, pointerIndex - 1)
    }

    // undershoot
    if (indexValue < target) {
        return binarySearch(arr, target, pointerIndex + 1, end)
    }
}


console.log(binarySearch(theArray, 'fml'))
// console.log(theArray)



// the point of self-destruction.

// i don't even believe half the things i see.

// life...