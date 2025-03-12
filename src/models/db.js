const mysql = require('mysql');

const pool = mysql.createPool({
   host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'taller3m',
});

pool.query('SELECT 1', (error, results, fields) => {
    if (error) {
        console.error('Error connecting to MySQL', error);
    } else {
        console.log('Connected to MySQL');
    }
});

pool.on('error', (err) => {
    console.error('MySQL error', err);
});

module.exports = { pool };