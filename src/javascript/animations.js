document.addEventListener("DOMContentLoaded", function () {
  const typingElement = document.querySelector(".typing-animation");

  // Detectar cuando termina la animación de escritura
  typingElement.addEventListener("animationend", function (event) {
    // Verificar si la animación que terminó fue la de escritura (typing)
    if (event.animationName === "typing") {
      typingElement.classList.add("done"); // Agregar la clase que quita el cursor
    }
  });
});

const images = document.querySelectorAll(".hero-image");
let currentIndex = 0;

function showNextImage() {
  // Ocultar la imagen actual
  images[currentIndex].classList.remove("active");

  // Incrementar el índice
  currentIndex++;

  // Si el índice excede el número de imágenes, reiniciar y mostrar la segunda imagen
  if (currentIndex >= images.length) {
    currentIndex = 1; // Reiniciar desde la segunda imagen
  }

  // Mostrar la nueva imagen
  images[currentIndex].classList.add("active");

  // Establecer el retraso para la próxima imagen
  setTimeout(showNextImage, 1500); // 1500ms después de mostrar la imagen
}

// Iniciar la animación después de 3500ms
setTimeout(() => {
  images[currentIndex].classList.add("active"); // Mostrar la primera imagen
  setTimeout(showNextImage, 3500); // Iniciar el ciclo después de 3500ms
}, 3500);
