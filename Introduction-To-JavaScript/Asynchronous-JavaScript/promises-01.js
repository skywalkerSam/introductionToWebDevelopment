const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve("It Works!")
    } else {
        reject("Error! Something Went Wrong :(")
    }
})

const promise0 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Hi")
})

const promise01 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Hii")
})

const promise02 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Hiii")
})

const promise03 = new Promise((resolve, reject) => {
    setTimeout = (resolve, 6000, "Hiiii")
})


Promise.all([promise0, promise01, promise02, promise03])
    .then(values => {
        console.log(values);
    })
