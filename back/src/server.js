const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const movieRoutes = require('./routes/movieRoutes');

dotenv.config();

const app = express();

// Conexión con MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch((err) => console.error('❌ Error conectando a MongoDB:', err.message));

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use('/movies', movieRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('🎬 API de películas lista');
});

// Manejo de errores genérico
app.use((err, req, res, next) => {
  console.error('💥 Error no capturado:', err.message);
  res.status(500).json({ error: 'Error interno del servidor' });
});

module.exports = app;
