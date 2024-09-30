document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".hero-image");
  const headings = document.querySelectorAll("h1");
  const h1sContainer = document.querySelector(".h1s-container");
  let currentIndex = 0;

  // Inicialmente oculta el contenedor
  h1sContainer.style.opacity = "0";

  function showNextImage() {
    const currentImage = images[currentIndex];
    const currentHeading = headings[currentIndex];

    currentImage.classList.remove("active");
    currentImage.classList.add("prev");
    currentHeading.style.display = "none";

    const nextIndex = currentIndex === images.length - 1 ? 1 : currentIndex + 1;
    const nextImage = images[nextIndex];
    const nextHeading = headings[nextIndex];

    nextImage.classList.add("active");
    nextHeading.style.display = "block";

    if (currentIndex === 0) {
      setTimeout(() => {
        currentImage.style.display = "none";
      }, 600);
    }

    setTimeout(() => {
      currentImage.classList.remove("prev");
    }, 600);

    currentIndex = nextIndex;
  }

  // Inicializa mostrando solo el primer heading e imagen
  images[0].classList.add("active");
  headings[0].style.display = "block";

  for (let i = 1; i < images.length; i++) {
    images[i].classList.remove("active");
    headings[i].style.display = "none";
  }

  // Inicia la animación después de 3500ms
  setTimeout(() => {
    showNextImage();
    setInterval(showNextImage, 1500);
  }, 3500);

  // Transición para mostrar el contenedor después de 2000ms
  setTimeout(() => {
    h1sContainer.style.opacity = "1";
    h1sContainer.style.transition = "opacity 0.5s ease-in-out";
  }, 2000);
});
