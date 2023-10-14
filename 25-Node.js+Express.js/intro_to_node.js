console.log('Hello World...');
console.log(__dirname);
console.log(__filename);

const a=3;
const b=6;

setTimeout(() => {
    console.log('Inside of callback, '+(a+b));
}, 3000);

// Process.exit();   is used to exit the process. It is used to exit the process when the process is not required to run further.
