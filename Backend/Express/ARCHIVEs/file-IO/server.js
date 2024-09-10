// Node File System Module

const fs = require('fs');

//Async
fs.readFile('./RebelMoon.txt', (err, data) => {
    if (err) {
        console.log("Error: ", err);
    }
    console.log("\nAsync:\n" + data.toString());   // UTF-8
});

//Sync
const file = fs.readFileSync('./RebelMoon.txt');
console.log("\nSync:\n", file.toString());   // UTF-8


//Append - Async
fs.appendFile('./theDream.txt', "Some dreams to live by...\n", err => {
    if (err) {
        console.log("Error: ", err);
    }
})

//Write
fs.writeFile("./Life.txt", "Some moments to live by...\n", err => {
    if (err) {
        console.log("Error: ", err);
    }
});

fs.writeFile("./Forever.txt", "Nothing lasts forever...\n", err => {
    if (err) {
        console.log("Error: ", err);
    }
});

fs.writeFile("./TheEnd.txt", "Just another human lost to the mists of time...\n", err => {
    if (err) {
        console.log("Error: ", err);
    }
});

//Comment this!
fs.writeFile("./Changes.txt", "Birds fly in different directions...\n", err => { });    

//Delete
fs.unlink("./Changes.txt", err => {
    if (err) {
        console.log("Error: ", err);
    }
    console.log("Inception...")
})
