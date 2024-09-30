document.addEventListener("DOMContentLoaded", () => {
  const pioneersSection = document.getElementById("pioneers-section");
  const investingSection = document.getElementById("investing-section");
  const careersSection = document.getElementById("careers-section");
  const investingBtn = document.getElementById("investing-btn");
  const careersBtn = document.getElementById("careers-btn");
  const innerInvestingBtn = document.getElementById("inner-investing-btn");
  const innerCareersBtn = document.getElementById("inner-careers-btn");
  const ellipse = document.getElementById("ellipse-img");
  const footerInvestingBtn = document.getElementById("footer-investing");
  const footerCareersBtn = document.getElementById("footer-careers");

  function showSectionFromPioneers(sectionToShow) {
    pioneersSection.classList.add("hidden");
    investingSection.classList.add("hidden");
    careersSection.classList.add("hidden");
    sectionToShow.classList.remove("hidden");

    anime({
      targets: sectionToShow.querySelectorAll(
        ".left-container-form, .left-container-text"
      ),
      translateX: [-100, 0],
      opacity: [0, 1],
      duration: 300,
      easing: "linear",
    });

    anime({
      targets: sectionToShow.querySelectorAll("form"),
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 800,
      easing: "easeOutElastic(1, .8)",
    });
  }

  function switchInnerSection(sectionToShow, sectionToHide) {
    sectionToHide.classList.add("hidden");
    sectionToShow.classList.remove("hidden");

    anime({
      targets: sectionToHide.querySelector(".left-container-text"),
      opacity: [1, 0],
      duration: 800,
      easing: "linear",
    });

    anime({
      targets: sectionToShow.querySelector(".left-container-text"),
      opacity: [0, 1],
      duration: 800,
      easing: "linear",
    });
  }

  function showPioneersSection() {
    investingSection.classList.add("hidden");
    careersSection.classList.add("hidden");
    pioneersSection.classList.remove("hidden");

    anime({
      targets: "#pioneers-left",
      opacity: [0, 1],
      duration: 800,
      easing: "linear",
    });

    anime({
      targets: "#pioneers-right",
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 800,
      easing: "easeOutQuad",
    });

    anime({
      targets: ellipse,
      translateX: [50, 0],
      opacity: [0, 1],
      duration: 400,
      easing: "linear",
    });
  }

  investingBtn.addEventListener("click", () =>
    showSectionFromPioneers(investingSection)
  );
  careersBtn.addEventListener("click", () =>
    showSectionFromPioneers(careersSection)
  );

  footerInvestingBtn.addEventListener("click", () =>
    showSectionFromPioneers(investingSection)
  );

  footerCareersBtn.addEventListener("click", () => {
    showSectionFromPioneers(careersSection);
  });

  innerInvestingBtn.addEventListener("click", () =>
    switchInnerSection(investingSection, careersSection)
  );
  innerCareersBtn.addEventListener("click", () =>
    switchInnerSection(careersSection, investingSection)
  );

  document.querySelectorAll(".go-back").forEach((btn) => {
    btn.addEventListener("click", showPioneersSection);
  });

  // Navbar buttons
  document.querySelectorAll(".investing-navbar-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      setTimeout(() => {
        showSectionFromPioneers(investingSection);
      }, 100);
    });
  });

  document
    .querySelectorAll(".careers-navbar-btn, .contact-navbar-btn")
    .forEach((btn) => {
      btn.addEventListener("click", (e) => {
        setTimeout(() => {
          showSectionFromPioneers(careersSection);
        }, 100);
      });
    });
});
