const express = require('express');
const routes = require('./routes');
const path = require('path');

// Crear la conección a la base de datos
const db = require('./config/db');

// Importal el modelo
require('./models/Proyectos');

db.sync()
    .then(() => console.log('Conectado al Servidor'))
    .catch((error) => console.log(error))

// Crear una app de express
const app = express();

// Donde cargar los archivos estaticos
app.use(express.static('public'));

// Habilitar pug
app.set('view engine', 'pug');

// Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

// Habilitar bodyParser para leer datos del formulario
// bodyParser deprecated
app.use(express.urlencoded({ extended: true }));

app.use('/', routes());

app.listen(3000);