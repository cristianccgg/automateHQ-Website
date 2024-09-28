document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".hero-image:not(.first-image)"); // Selecciona solo las imágenes que no son la primera
  let currentIndex = 0;

  function showNextImage() {
    // Ocultar la imagen actual
    images[currentIndex].classList.remove("active");

    // Incrementar el índice
    currentIndex++;

    // Si el índice excede el número de imágenes, reiniciar y mostrar la primera imagen
    if (currentIndex >= images.length) {
      currentIndex = 0; // Reiniciar desde la primera imagen
    }

    // Mostrar la nueva imagen
    images[currentIndex].classList.add("active");
  }

  // Iniciar la animación después de 3500 ms
  setTimeout(() => {
    // Mostrar la primera imagen (que ya está visible)
    images[0].classList.add("active"); // Asegúrate de que la primera imagen no se oculte
    setInterval(showNextImage, 1500); // Cambiar la imagen cada 1500 ms
  }, 3500);
});
