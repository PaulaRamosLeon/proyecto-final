// Página del carrito

// -----------------------------------------
// 1. Declaramos variables y constantes
// -----------------------------------------

const listaProductos = document.querySelectorAll(".cesta__producto");
const precioTotal = document.querySelector(".cesta__total");

// -----------------------------------------
// 2. Definimos funciones
// -----------------------------------------

function calcularTotal() {
    let total = 0;
    listaProductos.forEach(producto => {
        const cantidad = producto.querySelector(".cantidad__valor").innerText;

        const precio = producto.querySelector(".precio").innerText;

        total = total + cantidad*precio;
    });
    precioTotal.innerText= total;
}


// -----------------------------------------
// 3. Event listeners para añadir y quitar unidades de un producto
// -----------------------------------------

listaProductos.forEach(producto => {
    const botonMenos = producto.querySelectorAll(".cantidad__boton")[0];
    const botonMas = producto.querySelectorAll(".cantidad__boton")[1];
    const cantidad = producto.querySelector(".cantidad__valor");

    botonMenos.addEventListener("click", () =>{
        cantidad.innerText--;

        // Cuando se quita la ultima unidad del producto, se quita el producto
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

// -----------------------------------------
// 4. Código que se ejecuta al cargar la página
// -----------------------------------------

// Al entrar al carrito, calculamos el precio total
calcularTotal();