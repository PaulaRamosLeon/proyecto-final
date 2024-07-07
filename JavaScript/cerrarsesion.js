const btnCerrarDialogo = document.querySelector(".dialog__btn");
const dialogo = document.querySelector(".dialog");
const btnCerrarSesion = document.getElementById("dropdown__sesion");

btnCerrarDialogo.addEventListener("click", () => {
    dialogo.close();
});

btnCerrarSesion.addEventListener("click", () => {
    dialogo.show();
});