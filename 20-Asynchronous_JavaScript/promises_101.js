const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve("It Works!")
    } else {
        reject("Error! Something Went Wrong :(")
    }
})


promise.then(result => console.log(result))
