const express = require('express');
const { PORT } = require('./config.js');
const { pool } = require('./models/db.js');
const router = require('./routes/taller3m.routes.js');
const insercionRoutes = require('./routes/insercion.routes.js');
const registroRoutes = require('./routes/insercion.routes.js');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/bienvenida.html', (req, res) => {
  res.sendFile(__dirname + '/bienvenida.html');
});

app.use('/api', router);
app.use('/api', insercionRoutes);
app.use('/api', registroRoutes);
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');  //llamar login
});

app.get('/bienvenida.html', (req, res) => {
  res.sendFile(__dirname + '/bienvenida.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});