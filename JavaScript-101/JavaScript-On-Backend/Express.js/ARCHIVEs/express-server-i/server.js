// My first ever express server ;)

const express = require('express');
const app = express();
const port = 3000;

//Middleware
app.use((req, res, next) => {
    console.log("Incoming Request...")
    console.log("Method: " + `${req.method}`);
    console.log("Path: " + `${req.path}`);
    next();
})
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + 'public'));

//GET
app.get('/', (req, res) => {
    const title = "<h1>Rebel Moon: A Child of Fire</h1><br>";
    res.send(title);
})

app.get('/user', (req, res) => {
    const user = {
        name: "Sam",
        hobby: "Exploration"
    }
    res.send(user);
})

//POST
app.post('/user', (req, res) => {
    console.log(req.body);
    res.send("Request Successful...");
})

//RESTful: GET, POST, PUT, DELETE
app.get("/rest", (req, res) => {
    console.log(req.headers);    //information about the request/client
    console.log(req.query);     //query string through url: http://localhost:3000/rest/?name=Hello&home=World
    // console.log(req.body);


    res.send("GET Request Successful...");
})



app.listen(port, () => {
    console.log("Server Running On: http://localhost:3000");
})
