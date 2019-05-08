const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../auth/auth-model');

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
                res.status(201).json({ message: `Welcome ${user.username}!` })
            } else {
                res.status(401).json({ errorMessage: 'Incorrect username and/or password.' })
            }
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'Internal server error, could not log in.' })
        })
})

module.exports = router;