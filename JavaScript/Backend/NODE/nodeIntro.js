// fs, http, nodemon

console.log('Hello World...');
console.log(process.platform)
console.log(__dirname);     
console.log(__filename);

// Johnny-Five: The Javascript Robotics & IoT Platform.

const a=3;
const b=6;

setTimeout(() => {
    console.log((a+b));
}, 6000);   // 6sec. wait time!

// Process.exit() / .exit:   Exit the process/console. 


// globalThis: exists in node as the browser's window object, as well as in the browser for a unified codebase integration (ES2020)
