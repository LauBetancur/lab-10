import { cargarInformacion } from './utils.js';

document.addEventListener('DOMContentLoaded', async () => {
    const data = await cargarInformacion();
    const productosContainer = document.getElementById('productos');
    const cartCounter = document.getElementById('cart-counter');
    let contadorProductos = 0;

    data.forEach(producto => {
        const productoCard = document.createElement('div');
        productoCard.classList.add('items');

        const imagen = new Image();
        imagen.src = producto.image;
        imagen.alt = producto.name;
        imagen.width = 200;
        imagen.height = 200;

        const nombreProducto = document.createElement('p');
        nombreProducto.textContent = producto.name;
        nombreProducto.classList.add('nombre-producto');

        const precioProducto = document.createElement('p');
        precioProducto.textContent = `$${producto.price}`;
        precioProducto.classList.add('precio-producto');

        const botonAgregar = document.createElement('button');
        botonAgregar.textContent = 'Agregar al Carrito';
        botonAgregar.addEventListener('click', () => {
            contadorProductos++;
            cartCounter.textContent = contadorProductos;
        });

        productoCard.appendChild(imagen);
        productoCard.appendChild(nombreProducto);
        productoCard.appendChild(precioProducto);
        productoCard.appendChild(botonAgregar);

        productosContainer.appendChild(productoCard);
    });
});
