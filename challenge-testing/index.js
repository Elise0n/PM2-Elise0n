class CarritoCompra {
    constructor() {
      this.carrito = [];
    }
  
    agregarProducto(producto) {
      this.carrito.push(producto);
    }
  
    calcularTotal() {
      return this.carrito.reduce((acc, p) => acc + p.precio, 0);
    }
  
    aplicarDescuento(porcentaje) {
      const total = this.calcularTotal();
      return total - (total * (porcentaje / 100));
    }
  }
  
  module.exports = CarritoCompra;
  