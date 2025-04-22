const Movie = require('../models/Movie');

// Obtener todas las películas
const getAllMovies = async () => {
  return await Movie.find();
};

// Crear una nueva película
const createMovie = async (movieData) => {
  const nuevaPelicula = new Movie(movieData);
  return await nuevaPelicula.save();
};

const eliminarPorId = async (id) => {
  return await Movie.findByIdAndDelete(id);
};

module.exports = {
  getAllMovies,
  createMovie,
  eliminarPorId
};

const actualizarPeliculaPorId = async (id, datos) => {
  return await Movie.findByIdAndUpdate(id, datos, { new: true });
};


module.exports = {
  getAllMovies,
  createMovie
};
