const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Mayuri@29$19',
    database: 'anonymous_chat',
    waitForConnections: true,
    connectionLimit: 10,
});

module.exports = pool;