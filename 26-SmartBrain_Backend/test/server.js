// face-detection: backend

const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const port = 3333;
const saltRounds = 10;

// not a real db ;)
const db = {
    users: [
        {
            id: '0',
            name: 'sam',
            email: 'sam@skywalkersam.dev',
            password: 'sam',
            joined: new Date(),
            entries: 0,
        },
        {
            id: '1',
            name: 'starboy',
            email: 'starboy@skywalkersam.dev',
            // password: 'starboy',
            joined: new Date(),
            entries: 0,
        }
    ],
    login: [
        {
            id: '0',
            hash: '',
            email: 'sam@skywalkersam.dev',
        },
        {
            id: '1',
            hash: '',
            email: 'starboy@skywalkersam.dev',
        }
    ]
}


app.get('/', (req, res) => {
    res.json(db.users);
});

app.post('/signin', (req, res) => {

    if (req.body.email === db.users[0].email && req.body.password === db.users[0].password) {
        // res.json("Signing In...");
        res.json(db.users[0]);
    } else {
        res.status(400).json("Error signing in...");
    }

    // const { email, password } = req.body;
    // if (email in db.users) {
    //     bcrypt.compare(password, hash, function(err, result) {
    //         console.log(result); 
    //     });
    // }

});


app.post('/signup', (req, res) => {

    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json("Error signing up...");
    }

    bcrypt.hash(password, saltRounds, function(err, hash) {
        db.users.push({
            id: '2',
            name: name,
            email: email,
            // password: hash,
            joined: new Date(),
            entries: 0,
        });

    res.json(db.users[db.users.length - 1]);
    // res.json("Signed Up Successfully...");
    });

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
app.put('/image', (req, res) => {      
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

// tbh, never thought that i'd be here but, here i am ;) 
// 12024.01.04.0441
