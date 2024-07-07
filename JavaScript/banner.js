// -----------------------------------------
// 1. Declaramos variables y constantes
// -----------------------------------------

// Slider
const sliderImages = document.querySelector(".banner__imagenes");
const listImages = document.querySelectorAll(".banner__imagen");

// Botones
const btnPrev = document.querySelector(".banner__atras");
const btnNext = document.querySelector(".banner__siguiente");

let imgIndex = 0; // índice de imagen actual
const totalImages = listImages.length; // total de imágenes


// EventListeners
btnNext.addEventListener("click", nextImagen);
btnPrev.addEventListener("click", prevImagen);

// -----------------------------------------
// 2. Funciones
// -----------------------------------------

function nextImagen() {
    imgIndex++;
    if (imgIndex >= totalImages) {
        imgIndex = 0;
    }
    actualizarSlider();

}

function prevImagen() {
    imgIndex--;
    if (imgIndex < 0) {
        imgIndex = totalImages;
    }
    actualizarSlider();

}

function actualizarSlider() {
   //const width = sliderImages.clientWidth; //el ancho de la pantalla
   const width = listImages[0].width;
    sliderImages.style.transform = `translateX(${-width * imgIndex}px)`;


}


// -----------------------------------------
// Crear intervalos
// -----------------------------------------

let intervalos;
agregarIntervalo();

/* sliderImages.addEventListener("mouseover", () => {
    clearInterval(intervalos);
});

sliderImages.addEventListener("mouseout", () => {
    agregarIntervalo()
}); */

function agregarIntervalo() {
    intervalos = setInterval(nextImagen, 5000);
}