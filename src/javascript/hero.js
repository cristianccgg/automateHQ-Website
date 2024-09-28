const images = document.querySelectorAll(".hero-image");
const headings = document.querySelectorAll("h1");
let currentIndex = 0;

function showNextImage() {
  const currentImage = images[currentIndex];
  const currentHeading = headings[currentIndex];

  currentImage.classList.remove("active");
  currentImage.classList.add("prev");
  currentHeading.style.display = "none";

  // Calculate the next index, wrapping around to 1 (not 0) when reaching the end
  const nextIndex = currentIndex === images.length - 1 ? 1 : currentIndex + 1;
  const nextImage = images[nextIndex];
  const nextHeading = headings[nextIndex];

  nextImage.classList.add("active");
  nextHeading.style.display = "block";

  // Hide the first image after it transitions out
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

// Initialize by showing only the first image and heading
images[0].classList.add("active");
headings[0].style.display = "block";

for (let i = 1; i < images.length; i++) {
  images[i].classList.remove("active");
  headings[i].style.display = "none";
}

// Start the animation after 3500ms for the first image
setTimeout(() => {
  showNextImage();
  // Then continue with 1500ms intervals for subsequent images
  setInterval(showNextImage, 1500);
}, 3500);
