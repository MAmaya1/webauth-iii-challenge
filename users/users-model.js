const db = require('../database/dbConfig');

module.exports = {
    getUsers
}

function getUsers() {
    return db('users')
        .select('id', 'username', 'password')
}