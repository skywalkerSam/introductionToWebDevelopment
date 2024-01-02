// face-detection backend

const express = require('express');


const app = express();

app.use(express.json());

const port = 3000;

// not a real database );
const db = {
    users: [
        {
            id: '0',
            name: 'sam',
            email: 'sam@abc.com',
            password: 'sam',
            joined: new Date(),
            entries: 0,
        },
        {
            id: '1',
            name: 'starboy',
            email: 'starboy@abc.com',
            password: 'starboy',
            joined: new Date(),
            entries: 0,
        }
    ]
}


app.get('/', (req, res) => {
    res.json(db.users);
});

app.post('/signin', (req, res) => {
    if (req.body.email === db.users[0].email && req.body.password === db.users[0].password) {
        res.json("Signing In...");
    } else {
        res.status(400).json("Error signing in...");
    }

});


app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    db.users.push({
        id: '2',
        name: name,
        email: email,
        password: password,
        joined: new Date(),
        entries: 0,
    });
    res.json(db.users[db.users.length - 1].name + "! Signed Up Successfully...");
});

app.get('/profile/:userId', (req, res) => {
    const { userId } = req.params;
    let status = false;
    db.users.forEach(user => {
        if (user.id === userId) {
            status = true;
            return res.json(user);
        }
    });
    if (!status) {
        return res.status(400).json("Error getting user info...");
    }
});

// PUT
app.post('/image/:userId', (req, res) => {      
    const { userId } = req.params;
    let status = false;
    db.users.forEach(user => {
        if (user.id === userId) {
            status = true;
            user.entries++;
            return res.json(user.entries);
        }
    });
    if (!status) {
        return res.status(400).json("Error updating entries...");
    }
});

app.listen(port, () => {
    console.log(`\nServer running on: http://localhost:${port} \n\nPress Ctrl+C to stop.`)
})


/*
API Endpoints:

/ - GET - root/home
/signin - POST - signin
/signup - POST - signup
/profile/:userId - GET - user
/image - PUT - image

*/ 