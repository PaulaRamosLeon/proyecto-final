const btnNovedades = document.querySelector("#novedades__boton");
const btnRecomendados = document.querySelector("#recomendado__boton");
const novedades = document.querySelector(".contenedor__novedades");
const recomendados = document.querySelector(".contenedor__recomendados");


//Mostrar novedades
btnNovedades.addEventListener("click", () => {
    novedades.style.display="grid";
    recomendados.style.display="none";

    btnNovedades.classList.add("novedades__boton--btnActivo");
    btnNovedades.classList.remove("novedades__boton--btnInactivo");
    btnRecomendados.classList.remove("recomendado__boton--btnActivo");
    btnRecomendados.classList.add("recomendado__boton--btnInactivo");
});


// Mostrar recomendados
btnRecomendados.addEventListener("click", () => {
    recomendados.style.display="grid";
    novedades.style.display="none";

    btnNovedades.classList.remove("novedades__boton--btnActivo");
    btnNovedades.classList.add("novedades__boton--btnInactivo");
    btnRecomendados.classList.remove("recomendado__boton--btnInactivo");
    btnRecomendados.classList.add("recomendado__boton--btnActivo");
});