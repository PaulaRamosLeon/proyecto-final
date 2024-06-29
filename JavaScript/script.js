//TABS NOVEDADES-RECOMENDADOS//
 // Paso 1: Declarar variables y elementos
 //const listaBotones = document.querySelectorAll(".tabs-button");
 //const listaContenidos = document.querySelectorAll(".tabs-contenido");

 const botonNovedades = document.querySelector(".novedades__boton");
 const botonRecomendado = document.querySelector(".recomendado__boton");
 const listaBotones =document.querySelector(".contenedor__botones");

 // Paso 2: Funciones
 listaBotones.forEach(boton => {
     boton.addEventListener("click", () => {
         //   const id = boton.getAttribute("data-tab"); // getAttribute y setAttribute es un método  que te permite leer el atributo. con SET puedes escribir

         //  boton.setAttribute("caja","importante");

         // leer el atributo "data-tab"
         const id = boton.dataset.tab;
         const target = document.getElementById(id);

         // quito el u-visible de todos
         listaContenidos.forEach(pagina => {
             pagina.classList.remove("u-visible");
         });
         // le quito el button-active a todos los botones
         listaBotones.forEach(boton => {
             boton.classList.remove("button-active");
         });
         // agrego la clase u-visible al que le hice click
         target.classList.add("u-visible");

         // agregar la clase button-active al que le hice click
         boton.classList.add("button-active");


     });
 });
