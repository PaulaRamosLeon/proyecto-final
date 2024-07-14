/* Buscador */

// -----------------------------------------
// 1. Declaramos variables y constantes
// -----------------------------------------

const librosCatalogo = document.querySelectorAll(".catalogo__libro");
const buscador = document.querySelector(".buscador__input");


// -----------------------------------------
// 2. Definimos funciones
// -----------------------------------------

function buscar(tituloBuscar){
    librosCatalogo.forEach(libro => {
        const titulo = libro.querySelector(".libro__titulo").innerHTML;

        if(titulo.toLowerCase().includes(tituloBuscar.toLowerCase())){
            libro.style.display='block';
        }
        else {
            libro.style.display='none';
        }
    });
}

// -----------------------------------------
// 3. Añadimos event listener a la caja de busqueda
// -----------------------------------------

buscador.addEventListener("keyup", ()=> {
    buscar(buscador.value);
});