const hambIcon = document.getElementById("hambIcon");
const closeIcon = document.getElementById("closeIcon");
const menu = document.getElementById("menu");
const menuDesktop = document.getElementById("menu-desktop");

const isDesktop = () => window.innerWidth >= 768;
const isMobileView = () => window.innerWidth <= 1102;

hambIcon.addEventListener("click", () => {
  menu.classList.toggle("hidden");

  if (isDesktop()) {
    if (!menuDesktop.classList.contains("hidden")) {
      menuDesktop.classList.add("hidden");
    } else {
      menuDesktop.classList.remove("hidden");
      menuDesktop.classList.add("flex");
    }
  }

  hambIcon.classList.add("hidden");
  closeIcon.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
  menu.classList.add("hidden");

  if (isDesktop()) {
    menuDesktop.classList.add("hidden");
  }

  hambIcon.classList.remove("hidden");
  closeIcon.classList.add("hidden");
});

// Escucha el evento de redimensionamiento de la ventana
window.addEventListener("resize", () => {
  if (isMobileView()) {
    menuDesktop.classList.add("hidden");
  } else {
    // Si está en vista de escritorio y el menú está visible, ocúltalo
    if (!menuDesktop.classList.contains("hidden")) {
      menuDesktop.classList.add("hidden");
    }
  }
});
