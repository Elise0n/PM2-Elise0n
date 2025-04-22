module.exports = (req, res, next) => {
    const { title, year, director, duration, genre, rating, poster } = req.body;
  
    if (!title || !year || !director || !duration || !genre || !rating || !poster) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }
  
    if (typeof year !== 'number' || year < 1900 || year > 2099) {
      return res.status(400).json({ error: 'El año debe ser un número entre 1900 y 2099.' });
    }
  
    if (!Array.isArray(genre) || genre.length === 0) {
      return res.status(400).json({ error: 'Debe seleccionar al menos un género.' });
    }
  
    if (typeof rating !== 'number' || rating < 0 || rating > 10) {
      return res.status(400).json({ error: 'La calificación debe estar entre 0 y 10.' });
    }
  
    next(); // todo bien, sigue al controlador
  };
  