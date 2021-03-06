const express = require('express');
const router = express.Router();

// Importar express validator

const { body } = require('express-validator/check');

const proyectosController = require('../controllers/proyectosController')

module.exports = function() {
    // Ruta para el home
    router.get('/', proyectosController.proyectosHome);
    router.get('/nuevo-proyecto', proyectosController.formularioProyectos);
    router.post('/nuevo-proyecto',
        body('nombre').not().isEmpty().trim().escape(),
        proyectosController.nuevoProyecto);
    return router;
}