// binary search algorithm

// Create a function that takes a sorted array and a target value. Return the index of the target value in the array. If the target value is not in the array, return -1.


let theArray = [3, 6, 9, 33, 66, 99, 36, 69, 96].sort()

// normal search, O(n!)
function search(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }
    }
    return -1
}



// binary search algorithm, O(log n)
function binarySearch(arr, target){
    
}



// console.log(theArray)
// console.log(search(theArray, 99))
console.log(binarySearch(theArray, 99))
