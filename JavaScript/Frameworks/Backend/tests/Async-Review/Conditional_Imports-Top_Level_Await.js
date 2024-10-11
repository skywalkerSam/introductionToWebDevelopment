const a = 1024;
let b;

if (true) {
    const {theNumber} = await import('./module1.js');      // Top Level Await
    b = theNumber;
}

console.log(a, b);
