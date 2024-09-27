const hambIcon = document.getElementById("hambIcon");
const closeIcon = document.getElementById("closeIcon");
const menu = document.getElementById("menu");
const menuDesktop = document.getElementById("menu-desktop");

// Función para verificar si la pantalla es lo suficientemente ancha
const isDesktop = () => window.innerWidth >= 768; // Ajusta el tamaño según tus necesidades

hambIcon.addEventListener("click", () => {
  menu.classList.toggle("hidden"); // Muestra el menú móvil
  if (isDesktop()) {
    // Solo mostrar menú desktop si es una pantalla de escritorio
    menuDesktop.classList.remove("hidden"); // Asegúrate de que el menú no esté oculto
    menuDesktop.classList.add("flex"); // Mostrar el menú desktop
  }
  hambIcon.classList.add("hidden"); // Ocultar ícono hamburguesa
  closeIcon.classList.remove("hidden"); // Mostrar ícono de cerrar
});

closeIcon.addEventListener("click", () => {
  menu.classList.add("hidden"); // Oculta el menú móvil
  if (isDesktop()) {
    // Solo ocultar menú desktop si es una pantalla de escritorio
    menuDesktop.classList.remove("flex"); // Ocultar menú desktop
    menuDesktop.classList.add("hidden"); // Asegúrate de que el menú esté oculto
  }
  hambIcon.classList.remove("hidden"); // Mostrar ícono hamburguesa
  closeIcon.classList.add("hidden"); // Ocultar ícono de cerrar
});
