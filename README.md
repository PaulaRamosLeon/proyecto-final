# VALKIRIA

Valkiria es una tienda online de una editorial de libros infantiles y juveniles.


## Páginas del proyecto

El proyecto deberá contar con:
[x] Inicio (index.html)
[x] Catálogo de productos
[x] Páginas de producto individual
[x] Carrito de compras
[x] Página de pago
[x] Confirmación de pedido
[x] Efectos o módulos como añadir productos a un carrito de compras, sliders de productos destacados, carruseles, efectos de scroll, menú, etc. (JS)

El proyecto cuenta con los siguientes archivos HTML:
- Inicio/Índex
- Catálogo de productos
- Buscador
- Cátalogo por colección
- 30 páginas de producto
- Carrito de compra
- Pago/pedido en proceso de envío
- Formulario de registro
- Sobre nosotros
- Términos y condiciones

Encontramos dos archivos CSS:
- Uno general, para toda la página (styles.css)
- Uno para el catálogo

En JavaScript se ha desarrollado:
- Opción de añadir productos al carrito
- Banner en la página de inicio + botones para moverlos adelante y atrás
- Buscador de productos
- Carrito de compra al que se le pueden añadir y eliminar productos, al mismo tiempo que suma el precio total de los productos del carrito
- Menú hamburguesa para dispositivos de tamaño reducido

### JavaScript

- Slider / Carrousel de imágenes: Se trata de una variable de tipo número que aumenta, disminuye o cambia para controlar la posición de las imágenes dentro de un contenedor, junto con funciones asociadas. Además, puede incluir funciones para activar la reproducción automática (setInterval), pausar el desplazamiento al pasar el cursor sobre las imágenes, detectar eventos de usuario como clics...

- Menú desplegable: Consiste en un conjunto de elementos HTML y CSS que se muestran u ocultan dinámicamente en respuesta a la interacción del usuario. El JavaScript asociado puede incluir funciones para controlar la apertura y cierre del menú mediante variables booleanas, así como para gestionar la animación de transición entre los estados visible y oculto añadiendo y eliminando clases o usando style. Parallax: Implica mover los elementos de la página a diferentes velocidades mientras se desplaza el usuario, creando una sensación de profundidad y dinamismo. Esto se logra mediante funciones JavaScript que ajustan las propiedades de posición y transformación de los elementos en función del desplazamiento vertical de la página usando window.Scroll o Intersección Observer.

- Pestañas / Acordeones: Implica la creación de secciones desplegables donde el número de botones de activación coincide con el número de elementos de contenido correspondientes. Al hacer clic en un botón, se activa la pestaña asociada mediante la adición de clases CSS que revelan el contenido oculto. Del mismo modo, al hacer clic nuevamente en el mismo botón, se quitan estas clases para ocultar el contenido de la pestaña. Este comportamiento se controla mediante funciones JavaScript que gestionan la adición y eliminación dinámica de clases en respuesta a los eventos de usuario.