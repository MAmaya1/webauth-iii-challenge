const server = require('./api/server');

require('dotenv').config();

const port = 5000;

server.listen(port, () => {
    console.log(`\n *** Server Listening on port ${port} *** \n`)
});