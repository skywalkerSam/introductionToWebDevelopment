// Node runtime platform ( Linux, Windows, Mac  )
console.log(process.platform);


// Process id
console.log(process.pid)


/* Environment variables: 

- Mostly used in production environments to keep things private, secure and dynamic! 

- It's a good practice to store sensitive information like secrets and keys in environment variables, rather than hardcoding 'em into your applications

    - process.env
    - process.env.PORT
    - process.env.DATABASE_URL
    - process.env.SECRET_KEY
    - process.env.API_KEY
    - process.env.SECRET
    - process.env.TOKEN
    - process.env.JWT_SECRET

*/

// console.log(process.env)

const PORT = process.env.PORT || 3000
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/test'

const app = require('http').createServer((req, res) => {res.send('Hello!')})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    console.log(`Database URL is ${DATABASE_URL}`)
})


/* Setting up environment variables:

BASH: 
    - PORT=3000 node notes.js     ( server.js )
    - DATABASE_URL=postgres://localhost:5432/prod node notes.js

Again, setting up env variables inside windows is a shitshow, use WSL!

*/

