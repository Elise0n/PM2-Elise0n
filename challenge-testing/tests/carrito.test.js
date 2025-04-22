const CarritoCompra = require('../index');

describe('CarritoCompra', () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  test('debe agregar productos al carrito', () => {
    carrito.agregarProducto({ nombre: 'Camiseta', precio: 20 });
    expect(carrito.carrito.length).toBe(1);
  });

  test('debe calcular el total correctamente', () => {
    carrito.agregarProducto({ nombre: 'Camiseta', precio: 20 });
    carrito.agregarProducto({ nombre: 'Pantalón', precio: 30 });
    expect(carrito.calcularTotal()).toBe(50);
  });

  test('debe aplicar descuento correctamente', () => {
    carrito.agregarProducto({ nombre: 'Zapatillas', precio: 100 });
    expect(carrito.aplicarDescuento(10)).toBe(90);
  });
});
