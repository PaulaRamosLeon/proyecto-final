
const botonesAgregar = document.querySelectorAll(".libro__comprar, .libro__masinfo");

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
    });

});