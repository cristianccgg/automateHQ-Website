// Obtener los elementos del DOM
const hambIcon = document.getElementById("hambIcon");
const closeIcon = document.getElementById("closeIcon");
const menu = document.getElementById("menu");

// Agregar un event listener al ícono hamburguesa
hambIcon.addEventListener("click", () => {
  menu.classList.toggle("hidden"); // Mostrar/ocultar el menú
  hambIcon.classList.add("hidden"); // Ocultar ícono hamburguesa
  closeIcon.classList.remove("hidden"); // Mostrar ícono de cerrar
});

// Agregar un event listener al ícono de cerrar
closeIcon.addEventListener("click", () => {
  menu.classList.toggle("hidden"); // Mostrar/ocultar el menú
  hambIcon.classList.remove("hidden"); // Mostrar ícono hamburguesa
  closeIcon.classList.add("hidden"); // Ocultar ícono de cerrar
});
