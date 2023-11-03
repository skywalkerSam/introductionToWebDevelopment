const response = await fetch("https://jsonplaceholder.typicode.com/albums")      // Top Level Await
const data = await response.json()      
console.log(data)


//  Top Level Await
    //  NO* async function() required!
    