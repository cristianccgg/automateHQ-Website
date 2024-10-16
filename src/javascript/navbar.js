const hambIcon = document.getElementById("hambIcon");
const closeIcon = document.getElementById("closeIcon");
const menu = document.getElementById("menu");
const menuDesktop = document.getElementById("menu-desktop");
const navLinks = document.querySelectorAll("#menu a");

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

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    setTimeout(() => {
      closeMenu();
    }, 300);
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
