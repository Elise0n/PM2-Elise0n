const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true, min: 1900, max: 2099 },
  director: { type: String, required: true },
  duration: { type: String, required: true }, // ej: "2h 16min"
  genre: {
    type: [String],
    required: true,
    validate: {
      validator: (val) => val.length > 0,
      message: 'Debe seleccionar al menos un género.'
    }
  },
  rating: { type: Number, required: true, min: 0, max: 10 },
  poster: { type: String, required: true }
});

module.exports = mongoose.model('Movie', movieSchema);
