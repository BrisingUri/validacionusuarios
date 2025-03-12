const { Router } = require('express');
const { getInsercion } = require("../controllers/insercion.controller.js");

const router = Router();

router.get('/registro', getInsercion);

module.exports = router;