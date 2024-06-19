const maria = require('mysql');

const conn = maria.createConnection({
    host : '127.0.0.1',
    port : 3306,
    user:'root',
    password:'123456',
    database: 'node_js'
});

module.exports = conn;