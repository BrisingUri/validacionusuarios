const { pool } = require("../models/db.js");

const getInsercion = async (req, res) => {
    try {
        const [result] = await pool.query('INSERT INTO usuarios (idaut, usuario, password) VALUES ("7", "max", "max")');
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Usuario registrado', error });
    }
};

module.exports = { getInsercion };