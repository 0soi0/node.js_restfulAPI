const mariadb = require("mariadb/callback");

const conn = mariadb.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'node_js',
    connectionLimit: 5
});

module.exports.conn = conn