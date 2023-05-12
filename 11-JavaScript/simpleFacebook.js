// create a simple facebook.com backend using JS

const database = [
    {username:"helloworld", password:"helloworld"},
    {username:"hello", password:"hello"},
    {username:"hello", password:"world"}
];

const newsfeed = [
    {username:"helloworld", timeline:"Hello, Mr. Hello World!"},
    {username:"hello", timeline:"Hello, Mr. Hello!"},
    {username:"hello", timeline:"Hello, Mr. Hello The Second!"}
];


function isUserValid(username, password) {
    for (let i=0; i<database.length; i++) {
        if (database[i].username === username && 
            database[i].password === password) {
            return true;}
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsfeed)
    } else {
        alert("Sorry, wrong username and password!");
    }
}
        
var usernamePrompt = prompt("Enter your username: ");
var passwordPrompt = prompt("Enter your password: ");

signIn(usernamePrompt, passwordPrompt);
