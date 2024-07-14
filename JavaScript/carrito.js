// Página del carrito
// Primero cargamos desde local storage
const cestaInfo = document.querySelector(".cesta__info");
cargarDesdeLocalStorage();

// -----------------------------------------
// 1. Declaramos variables y constantes
// -----------------------------------------

const listaProductos = document.querySelectorAll(".cesta__producto");
const precioTotal = document.querySelector(".cesta__total");
// -----------------------------------------
// 2. Definimos funciones
// -----------------------------------------

function calcularTotal() {
    // Cada vez que calculamos el total tenemos que buscar el elemento, sino no va.

    let total = 0;
    listaProductos.forEach(producto => {
        const cantidad = producto.querySelector(".cantidad__valor").innerText;

        const precio = producto.querySelector(".precio").innerText;

        total = total + cantidad*precio;
    });
    precioTotal.innerText= total;
}

function cargarDesdeLocalStorage(){
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.forEach(producto => {
        cestaInfo.innerHTML = `
        <div class="cesta__producto">
            <img src="${producto.img}" alt="${producto.titulo}" class="producto__img">
            <div class="producto__info">
                <p class="producto__titulo">${producto.titulo}</p>
                <div class="producto__cantidad">
                    <p>Cantidad: <span class="cantidad__valor">1</span></p>
                    <button class="cantidad__boton">-</button>
                    <button class="cantidad__boton">+</button>
                </div>
                <p class="producto__precio">Precio: <span class="precio">${producto.precio}</span>€</p>
            </div>
        </div>
        ` + cestaInfo.innerHTML
    })
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

// Al entrar al carrito,  calculamos el precio total
calcularTotal();