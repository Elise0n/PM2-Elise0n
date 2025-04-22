document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-pelicula');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const year = parseInt(document.getElementById('year').value);
    const director = document.getElementById('director').value.trim();
    const duration = document.getElementById('duration').value.trim();
    const genreSelect = document.getElementById('genre');
    const rating = parseFloat(document.getElementById('rating').value);
    const poster = document.getElementById('poster').value.trim();

    // Obtener múltiples géneros seleccionados
    const genre = Array.from(genreSelect.selectedOptions).map(opt => opt.value);

    if (!title || !year || !director || !duration || !genre.length || isNaN(rating) || !poster) {
      return alert('⚠️ Todos los campos deben estar completos.');
    }

    if (year < 1900 || year > 2099) {
      return alert('⚠️ Año inválido.');
    }

    if (rating < 0 || rating > 10) {
      return alert('⚠️ Calificación debe estar entre 0 y 10.');
    }

    const nuevaPelicula = {
      title,
      year,
      director,
      duration,
      genre,
      rating,
      poster
    };

    try {
      await axios.post('http://localhost:3000/movies', nuevaPelicula);
      alert('🎉 Película agregada correctamente');
      form.reset();
    } catch (err) {
      console.error(err);
      alert('❌ Error al guardar la película');
    }
  });
});
