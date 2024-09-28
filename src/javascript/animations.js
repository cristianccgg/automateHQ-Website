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
