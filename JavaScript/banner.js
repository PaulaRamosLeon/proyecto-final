// Banner de la página de inicio 

// -----------------------------------------
// 1. Declaramos variables y constantes
// -----------------------------------------

// Slider
const sliderImages = document.querySelector(".banner__imagenes");
const listImages = document.querySelectorAll(".banner__imagen");

// Botones. Para que los botones funcionen:
const btnPrev = document.querySelector(".banner__atras");
const btnNext = document.querySelector(".banner__siguiente");

// A cada imagen se le añade el enlace que esté en su misma posición
const enlaces = ["./descubriendoelmundo.html", "#", "./carton.html"];

let imgIndex = 0; // índice de imagen actual
const totalImages = listImages.length; // total de imágenes


// EventListeners
btnNext.addEventListener("click", nextImagen);
btnPrev.addEventListener("click", prevImagen);

// -----------------------------------------
// 2. Funciones
// -----------------------------------------

// Para pasar a la siguiente imagen
function nextImagen() {
    imgIndex++;
    if (imgIndex >= totalImages) {
        imgIndex = 0;
    }
    actualizarSlider();

}

// Para volver a la imagen anterior
function prevImagen() {
    imgIndex--;
    if (imgIndex < 0) {
        imgIndex = totalImages;
    }
    actualizarSlider();

}

function actualizarSlider() {
    const width = listImages[0].width;
    sliderImages.style.transform = `translateX(${-width * imgIndex}px)`;


}

function agregarIntervalo() {
    intervalos = setInterval(nextImagen, 5000);
}

// -----------------------------------------
// Crear intervalos. Cada 5 segundos, la imagen del banner pasa a la siguiente y, cuando llega a la última, vuelve a empezar. 
// -----------------------------------------

let intervalos;
agregarIntervalo();

for (let i = 0; i < listImages.length; i++) {
    listImages[i].addEventListener("click", () => { window.location = enlaces[i] });
}

// -----------------------------------------
// Descomentar estas lineas para que, al hacer hover, el banner pare de deslizar
// -----------------------------------------

/* sliderImages.addEventListener("mouseover", () => {
    clearInterval(intervalos);
});

sliderImages.addEventListener("mouseout", () => {
    agregarIntervalo()
}); */

