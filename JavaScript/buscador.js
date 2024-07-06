/* Buscador */

// Definir constantes

const librosCatalogo = document.querySelectorAll(".catalogo__libro");
const buscador = document.querySelector(".buscador__input");

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

buscador.addEventListener("keyup", ()=> {
    buscar(buscador.value);
});