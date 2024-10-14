const hambIcon = document.getElementById("hambIcon");
const closeIcon = document.getElementById("closeIcon");
const menu = document.getElementById("menu");
const menuDesktop = document.getElementById("menu-desktop");
const navLinks = document.querySelectorAll("#menu a"); // Seleccionamos todos los enlaces dentro del menú

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

// Función para cerrar el menú
function closeMenu() {
  menu.classList.add("hidden");
  hambIcon.classList.remove("hidden");
  closeIcon.classList.add("hidden");
}

// Agregar un evento a cada enlace en el menú para cerrar el menú cuando se haga clic
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Permitir que el enlace navegue, pero cerrar el menú con un pequeño retraso
    setTimeout(() => {
      closeMenu();
    }, 300); // Pequeño retraso para asegurar que la navegación ocurra primero
  });
});

window.addEventListener("resize", () => {
  if (isMobileView()) {
    menuDesktop.classList.add("hidden");
  } else {
    if (!menuDesktop.classList.contains("hidden")) {
      menuDesktop.classList.add("hidden");
    }
  }
});
