// Botón cerrar sesión

// -----------------------------------------
// 1. Declaramos variables y constantes
// -----------------------------------------

const btnCerrarDialogo = document.querySelector(".dialog__btn");
const dialogo = document.querySelector(".dialog");
const btnCerrarSesion = document.getElementById("dropdown__sesion");

// -----------------------------------------
// 2. Añadimos event listeners
// -----------------------------------------

btnCerrarDialogo.addEventListener("click", () => {
    dialogo.close();
});

btnCerrarSesion.addEventListener("click", () => {
    dialogo.show();
});