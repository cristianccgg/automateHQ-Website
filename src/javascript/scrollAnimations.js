document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".element");
  const evaProElement = document.querySelector(".eva-pro");
  const educationElement = document.querySelector(".education");
  const educationPElement = document.querySelector(".education-p");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("element")) {
            anime({
              targets: entry.target,
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 800,
              easing: "easeInSine",
            });
          } else if (entry.target.classList.contains("eva-pro")) {
            anime({
              targets: entry.target,
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 1500,
              easing: "easeInSine",
            });
          } else if (entry.target.classList.contains("education")) {
            anime({
              targets: entry.target,
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 500,
              easing: "easeInOutSine",
            });
          } else if (entry.target.classList.contains("education-p")) {
            anime({
              targets: entry.target,
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 500,
              easing: "easeInOutSine",
              delay: 800,
            });
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(element);
  observer.observe(evaProElement);
  observer.observe(educationElement);
  observer.observe(educationPElement);
});
