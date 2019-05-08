const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // import json web token

const Users = require('../auth/auth-model');

// Import Secrets

const secrets = require('../config/secrets');

// Register

router.post('/register', (req, res) => {
    const user = req.body;

    if (!user.username || !user.password) {
        res.status(400).json({ errorMessage: 'New users require a username and password.' })
    } else {
        const hash = bcrypt.hashSync(user.password, 10);
        user.password = hash;
        
        Users.addUser(user)
            .then(saved => {
                res.status(201).json(saved)
            })
            .catch(err => {
                res.status(500).json({ error: err, message: 'This username is taken.' })
            })
    }
})

// Login

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findUserBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user); // generate token
                res.status(201).json({ message: `Welcome ${user.username}!`, token })
            } else {
                res.status(401).json({ errorMessage: 'Incorrect username and/or password.' })
            }
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'Internal server error, could not log in.' })
        })
})

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }
    const options = {
        expiresIn: '1hr'
    }
    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router;