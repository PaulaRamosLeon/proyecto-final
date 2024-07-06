const listaProductos = document.querySelectorAll(".cesta__producto");
const precioTotal = document.querySelector(".cesta__total");


// Sumar y restar cantidades
listaProductos.forEach(producto => {
    const botonMenos = producto.querySelectorAll(".cantidad__boton")[0];
    const botonMas = producto.querySelectorAll(".cantidad__boton")[1];
    const cantidad = producto.querySelector(".cantidad__valor");

    botonMenos.addEventListener("click", () =>{
        cantidad.innerText--;

        if(cantidad.innerText==0) {
           producto.remove();
        }

        calcularTotal();
    });

    botonMas.addEventListener("click", ()=> {
        cantidad.innerText++;
        calcularTotal();
    })
});

// Precio
function calcularTotal() {
    let total = 0;
    listaProductos.forEach(producto => {
        const cantidad = producto.querySelector(".cantidad__valor").innerText;

        const precio = producto.querySelector(".precio").innerText;

        total = total + cantidad*precio;
    });
    precioTotal.innerText= total;
}

calcularTotal();