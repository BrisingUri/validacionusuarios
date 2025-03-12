const { Router } = require('express');
const { gettaller3m } = require("../controllers/taller3m.controller.js");
const router = Router();

router.get('/taller3m', gettaller3m);

module.exports = router;