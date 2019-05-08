// Imports

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Import Routers

const usersRouter = require('../users/users-router');
const authRouter = require('../auth/auth-router');

const server = express();

// Global Middleware

server.use(express.json());
server.use(helmet());
server.use(cors());

// Configure Routes

server.get('/', (req, res) => {
    res.send('Hi there!')
})
server.use('/api/users', usersRouter);
server.use('/api/auth/', authRouter);

module.exports = server;