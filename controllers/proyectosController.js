const Proyectos = require('../models/Proyectos');
const slug = require('slug');

exports.proyectosHome = (req, res) => {
    res.render('index', {
        nombrePagina: 'Proyectos'
    });
}

exports.formularioProyectos = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    });
}

exports.nuevoProyecto = async(req, res) => {
    // Enviar a la consola lo que el usuario escriba
    // console.log(req.body)

    // Validar que tengamos algo en el input
    const { nombre } = req.body;

    let errores = [];

    if (!nombre) {
        errores.push({ 'texto': 'Agregar un Nombre al proyecto' });
    }

    // Si hay errores

    if (errores.length > 0) {
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo Proyecto',
            errores
        });
    } else {
        // No hay errores
        // Insertar en la BD.
        const url = slug(nombre).toLowerCase();
        const proyecto = await Proyectos.create({ nombre, url });
        res.redirect('/');
    }
}