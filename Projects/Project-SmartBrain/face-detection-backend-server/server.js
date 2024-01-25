//Purpose: face-detection-backend

const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const port = 3333;
const saltRounds = 10;

const knex = require('knex')
const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'postgres',
        password: 'notpostgres',
        database: 'prod'
    }
});

app.get('/', (req, res) => {
    res.json("Welcome to Face Detection API...");
});

app.post('/signin', (req, res) => {
    const { email, password } = req.body;

    db.select('email', 'hash').from('login').where({ email })
        .then(hash => {
            hash = hash[0].hash;
            if (hash.length) {
                bcrypt.compare(password, hash, function (err, result) {
                    if (result) {
                        return db.select('*').from('users').where({ email })
                            .then(user => {
                                res.json(user[0]);
                            })
                            .catch(err => res.status(400).json("Error Signing In...!"));
                    } else {
                        res.status(400).json("Wrong Credentials, Try Again...!");
                    }
                })
            }
        })
    .catch(err => res.status(400).json("User not found... Try Signing Up!"));
});

app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, saltRounds, function (err, hash) {
        db.transaction(trx => {
            trx.insert({
                hash: hash,
                email: email,
            })
                .into('login')
                .returning('email')
                .then(loginEmail => {
                    return trx('users')
                        .returning('*')
                        .insert({
                            email: loginEmail[0].email,
                            name: name,
                            joined: new Date()
                        })
                        .then(user => {
                            res.json(user[0]);
                            // console.log(user[0]);
                        })
                })
                .then(trx.commit)
                .catch(trx.rollback)
        })
            .catch(err => res.status(400).json("User already exists... Try Signing In!"));   
    })
});

app.get('/profile/:userId', (req, res) => {
    const { userId } = req.params;

    db.select('*').from('users').where({
        id: userId
    })
        .then(user => {
            (user.length) ? res.json(user[0])
                : res.status(400).json("User not found...!");
        })
        .catch(err => res.status(400).json("Error while getting user info..."));
});

app.put('/image', (req, res) => {
    const { id } = req.body;
    db('users').where({ id })   
        .returning('entries')
        .increment('entries', 1)
        .then(entries => {
            (entries.length) ? res.json(entries[0].entries)
                : res.status(400).json("Entry not found...!");
        })
        .catch(err => res.status(400).json("Error updating entries..."));
});

app.listen(port, () => {
    console.log(`\nServer running on: http://localhost:${port} \n\nPress Ctrl+C to stop.`)
})
