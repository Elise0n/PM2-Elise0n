const { getAllMovies, createMovie } = require('../services/movieService');

// Obtener todas las películas
const obtenerPeliculas = async (req, res) => {
  try {
    const peliculas = await getAllMovies();
    res.json(peliculas);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener películas', detalle: err.message });
  }
};

// Crear nueva película
const agregarPelicula = async (req, res) => {
  try {
    const { title, year, director, duration, genre, rating, poster } = req.body;

    if (!title || !year || !director || !duration || !genre || !rating || !poster) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    const nueva = await createMovie({ title, year, director, duration, genre, rating, poster });
    res.status(201).json({ mensaje: 'Película creada correctamente', pelicula: nueva });
  } catch (err) {
    res.status(500).json({ error: 'Error al crear la película', detalle: err.message });
  }
};

const eliminarPelicula = async (req, res) => {
  try {
    const { id } = req.params;
    await eliminarPorId(id);
    res.json({ mensaje: 'Película eliminada con éxito' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar la película', detalle: err.message });
  }
};
const actualizarPelicula = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizados = req.body;

    const peliculaActualizada = await actualizarPeliculaPorId(id, datosActualizados);
    res.json({ mensaje: 'Película actualizada con éxito', pelicula: peliculaActualizada });
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar la película', detalle: err.message });
  }
};


module.exports = {
  obtenerPeliculas,
  agregarPelicula
};
