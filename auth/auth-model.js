const db = require('../database/dbConfig');

module.exports = {
    findUserBy,
    getUserById,
    addUser
}

function findUserBy(username) {
    return db('users')
        .where(username)
}

async function addUser(user) {
    const [id] = await db('users').insert(user);
    return getUserById(id);
}

function getUserById(id) {
    return db('users')
        .where({ id })
        .first();
}