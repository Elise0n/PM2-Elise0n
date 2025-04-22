const express = require('express');
const { obtenerPeliculas, agregarPelicula } = require('../controllers/movieController');
const validarPelicula = require('../middlewares/validarPelicula');

const router = express.Router();

router.get('/', obtenerPeliculas);
router.post('/', validarPelicula, agregarPelicula);
router.delete('/:id', eliminarPelicula);
router.put('/:id', actualizarPelicula);

const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
const validateMovie = require('../middlewares/validateMovie');

// Crear una nueva película
router.post('/', validateMovie, async (req, res, next) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    next(err);
  }
});

// Otras rutas...

module.exports = router;
