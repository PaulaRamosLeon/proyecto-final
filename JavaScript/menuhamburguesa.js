// Menú hamburguesa (solo visible en movil)

// -----------------------------------------
// 1. Declaramos variables y constantes
// -----------------------------------------

const botonHamburguesa = document.querySelector('.navbar__hamburguesa');
const menu = document.querySelector('.navbar__menu');

// -----------------------------------------
// 2. Añadimos event listeners
// -----------------------------------------

botonHamburguesa.addEventListener("click", () =>{
    if(menu.style.display == 'none'){
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
})