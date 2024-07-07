const botonHamburguesa = document.querySelector('.navbar__hamburguesa');
const menu = document.querySelector('.navbar__menu');

botonHamburguesa.addEventListener("click", () =>{
    if(menu.style.display == 'none'){
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
})