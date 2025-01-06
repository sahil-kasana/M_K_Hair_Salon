// Dynamically set the current year
document.getElementById("current-year").textContent = new Date().getFullYear();

//  nav bar script
const menuBtn = document.getElementById("menu-btn");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  // Toggle the mobile menu visibility
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("active");

  // Toggle the icons
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// Hide the menu and reset icons on scroll
window.addEventListener("scroll", () => {
  if (!mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("active");
    hamburgerIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
});

//  slider script
const sliderImages = document.getElementById("slider-images");
const progressBar = document.querySelector("#progress-bar div");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;
const slideCount = sliderImages.children.length;

// Function to update slider position and progress bar
const updateSlider = (index) => {
  sliderImages.style.transform = `translateX(-${index * 100}%)`;
  progressBar.style.width = `${((index + 1) / slideCount) * 100}%`;
};

// Auto-slide functionality
let autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlider(currentIndex);
}, 2000);

// Manual slide navigation
const handleNavigation = (direction) => {
  clearInterval(autoSlide);
  currentIndex = (currentIndex + direction + slideCount) % slideCount;
  updateSlider(currentIndex);
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider(currentIndex);
  }, 2000);
};

prevBtn.addEventListener("click", () => handleNavigation(-1));
nextBtn.addEventListener("click", () => handleNavigation(1));

//  Booking script
document.addEventListener("DOMContentLoaded", () => {
  const textPath = document.querySelector("#textPath");
  let offset = 20;

  function animateText() {
    offset += 0.2; // Adjust speed
    if (offset > 100) offset = 0; // Reset the animation
    textPath.setAttribute("startOffset", `${offset}%`);
    requestAnimationFrame(animateText);
  }

  animateText();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});