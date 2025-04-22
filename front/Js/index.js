$(document).ready(() => {
  const contenedor = $('#contenedor-peliculas');
  const modalEditar = new bootstrap.Modal(document.getElementById('modalEditar'));

  function renderPeliculas(data) {
    contenedor.empty();

    data.forEach(p => {
      const tarjeta = `
        <div class="col-md-4">
          <div class="card h-100 shadow">
            <img src="${p.poster}" class="card-img-top" alt="${p.title}">
            <div class="card-body">
              <h5 class="card-title">${p.title}</h5>
              <p class="card-text">
                <strong>Director:</strong> ${p.director}<br/>
                <strong>Año:</strong> ${p.year}<br/>
                <strong>Duración:</strong> ${p.duration}<br/>
                <strong>Género:</strong> ${p.genre.join(', ')}<br/>
                <strong>Rating:</strong> ${p.rating}/10
              </p>
              <div class="d-flex justify-content-between">
                <button class="btn btn-primary btn-sm editar" data-id='${JSON.stringify(p)}'>Editar</button>
                <button class="btn btn-danger btn-sm eliminar" data-id="${p._id}">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      `;
      contenedor.append(tarjeta);
    });
  }

  // Cargar películas
  $.ajax({
    url: 'http://localhost:3000/movies',
    method: 'GET',
    success: function (data) {
      renderPeliculas(data);
    },
    error: function (err) {
      console.error('❌ Error al cargar películas:', err);
      alert('No se pudieron cargar las películas.');
    }
  });

  // Eliminar película
  contenedor.on('click', '.eliminar', async function () {
    const id = $(this).data('id');
    if (confirm('¿Estás seguro de que querés eliminar esta película?')) {
      try {
        await axios.delete(`http://localhost:3000/movies/${id}`);
        alert('🎬 Película eliminada correctamente');
        location.reload();
      } catch (err) {
        console.error(err);
        alert('❌ Error al eliminar la película');
      }
    }
  });

  // Editar - Cargar datos en el modal
  contenedor.on('click', '.editar', function () {
    const data = $(this).data('id');

    $('#edit-id').val(data._id);
    $('#edit-title').val(data.title);
    $('#edit-year').val(data.year);
    $('#edit-director').val(data.director);
    $('#edit-duration').val(data.duration);
    $('#edit-rating').val(data.rating);
    $('#edit-poster').val(data.poster);
    $('#edit-genre').val(data.genre.join(', '));

    modalEditar.show();
  });

  // Guardar edición
  $('#form-editar').on('submit', async function (e) {
    e.preventDefault();

    const id = $('#edit-id').val();
    const payload = {
      title: $('#edit-title').val(),
      year: parseInt($('#edit-year').val()),
      director: $('#edit-director').val(),
      duration: $('#edit-duration').val(),
      genre: $('#edit-genre').val().split(',').map(g => g.trim()),
      rating: parseFloat($('#edit-rating').val()),
      poster: $('#edit-poster').val()
    };

    try {
      await axios.put(`http://localhost:3000/movies/${id}`, payload);
      modalEditar.hide();
      alert('✅ Película editada correctamente');
      location.reload();
    } catch (err) {
      console.error(err);
      alert('❌ Error al editar película');
    }
  });
});
