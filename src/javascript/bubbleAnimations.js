document.addEventListener("DOMContentLoaded", function () {
  const typingElement = document.querySelector(".typing-animation");
  const speechBubble = document.querySelector(".speech-bubble");

  speechBubble.style.width = "0";

  anime({
    targets: speechBubble,
    width: "100%",
    duration: 4000, // Reduced to match the new typing speed
    easing: "steps(40)",
    delay: 0,
  });

  typingElement.addEventListener("animationend", function (event) {
    if (event.animationName === "typing") {
      typingElement.classList.add("done");
    }
  });
});
