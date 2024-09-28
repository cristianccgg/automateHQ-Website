const images = document.querySelectorAll(".hero-image");
let currentIndex = 0;

// Función para mostrar la siguiente imagen
function showNextImage() {
  const currentImage = images[currentIndex];

  // Remover la clase active de la imagen actual
  currentImage.classList.remove("active");
  currentImage.classList.add("prev"); // Marcar la imagen actual como anterior

  // Calcular el siguiente índice
  const nextIndex = (currentIndex + 1) % images.length;
  const nextImage = images[nextIndex];

  // Agregar la clase active a la imagen siguiente
  nextImage.classList.add("active");

  // Ocultar la primera imagen después de la primera animación
  if (currentIndex === 0) {
    setTimeout(() => {
      currentImage.style.display = "none"; // Oculta la primera imagen
    }, 600); // Debe coincidir con la duración de la transición
  }

  // Esperar el tiempo de la transición para cambiar la posición
  setTimeout(() => {
    currentImage.classList.remove("prev"); // Remover la clase de la imagen anterior
  }, 600); // Debe coincidir con la duración de la transición

  currentIndex = nextIndex; // Actualizar el índice actual
}

// Cambia de imagen cada 3 segundos
setInterval(showNextImage, 3000);
