// A Promise...
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve("It Works!")
    } else {
        reject("Error! Something Went Wrong :(")
    }
})

// Single Promise
promise.then(result => console.log(result))

// Chaining Promises
promise
    .then(result => result + "!")
    .then(result1 => result1 + "?")
    .catch(() => console.log("Error!"))
    .then(result3 => result3 + '#')
    .then(result2 => {
        console.log(result2 + '$')
})


// Running JS in browser console sucks!
