// Simple promise example
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(console.log)


// Async Await example
async function fetchUsers() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await users.json()
    console.log(data)
}

// Don't forget to call the function!

// Not Working!!! - Review needed!
urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]


const getData = async function() {
    const [users, posts, albums] = await Promise.all
        (urls.map(url => fetch(url)
        .then(response => response.json())
    ))
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
}
