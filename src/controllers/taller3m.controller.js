const { pool } = require('../models/db.js');

const gettaller3m = async (req, res) => {
    try {
        pool.query('SELECT * FROM usuarios', (error, results) => {
            if (error) {
                console.error('Error querying MySQL', error);
                return res.status(500).json({ error: 'Error querying MySQL' });
            }
            res.json(results);
        });
    } catch (error) {
        console.error('Error querying MySQL', error);
        res.status(500).json({ error: 'Error querying MySQL' });
    }
};

module.exports = { gettaller3m };