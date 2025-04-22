const { body, validationResult } = require('express-validator');

const validateMovie = [
  body('title').notEmpty().withMessage('El título es obligatorio'),
  body('director').notEmpty().withMessage('El director es obligatorio'),
  body('year').isInt({ min: 1888 }).withMessage('Año inválido'),
  body('duration').notEmpty().withMessage('La duración es obligatoria'),
  body('genre').isArray({ min: 1 }).withMessage('Debe haber al menos un género'),
  body('rating').isFloat({ min: 0, max: 10 }).withMessage('Rating debe estar entre 0 y 10'),
  body('poster').isURL().withMessage('El poster debe ser una URL válida'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = validateMovie;
