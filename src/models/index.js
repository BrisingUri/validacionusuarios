
//1. Importación de dependencias
const mysql = requiere('mysql');
const session = require('express-session');
const bodyParser = require('body-parser');
//express-session: Proporciona funcionalidad para manejar
//body-parser: Se usa para procesar los datos de las solicitudes


app.use(myconection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'richie_1967',
    port: 3306,
    database: '',
}, 'single'));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.listen(app.get('port'), () => {
    console.log('listening on port', app.get('port'));
});

app.use('/', loginRoutes);

app.get('/', (req, res) => {
    if (req.session.loggedin) {
        let name = req.session.name;

        res.render('home', {name });
    } else {
        res.redirect('/login');
    }
});
