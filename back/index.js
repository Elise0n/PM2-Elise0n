const express = require('express');
const app = express();
const moviesRouter = require('./routes/movies');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use('/movies', moviesRouter);

// Middleware de manejo de errores
app.use(errorHandler);

module.exports = app;
