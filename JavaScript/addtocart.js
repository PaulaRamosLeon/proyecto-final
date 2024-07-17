
const botonesAgregar = document.querySelectorAll(".libro__comprar");

botonesAgregar.forEach(button => {
    button.addEventListener("click", () =>{
        var producto = {
            titulo: button.dataset.titulo,
            precio: button.dataset.precio,
            img: button.dataset.img
        };
        var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert("¡Producto añadido con éxito!")
    });
});

// Para borrar el carrito, localStorage.removeItem('carrito')