const slidesSection = document.querySelector(".slides");

// Logic for changing slides depending on scrolledValue
const slides = slidesSection.querySelectorAll(".slide");
let scrolledValue = 0;
const changeSlide = () => {
  const index = scrolledValue / 10;

  const prevSlide = slides[index - 1];
  const currentSlide = slides[index];
  const nextSlide = slides[index + 1];

  prevSlide?.classList.remove("show");
  currentSlide?.classList.add("show");
  nextSlide?.classList.remove("show");
};

//  Logic for changing scrollValue on mouse or touchpad scroll
slidesSection.addEventListener("wheel", (e) => {
  const scrollDown = e.deltaY > 0;
  if (scrollDown && scrolledValue < (slides.length - 1) * 10) scrolledValue++;
  else if (!scrollDown && scrolledValue !== 0) scrolledValue--;

  if (scrolledValue % 10 === 0) changeSlide();
});

// Logic for changing scrollValue on touch devices
let touchStartY = 0;
slidesSection.addEventListener("touchstart", (e) => {
  touchStartY = e.touches[0].clientY;
});

slidesSection.addEventListener("touchmove", (e) => {
  const touchEndY = e.touches[0].clientY;
  const deltaY = touchEndY - touchStartY;

  // Swipe from bottom to top
  if (deltaY < 0 && scrolledValue < (slides.length - 1) * 10) scrolledValue++;
  // Swipe from top to bottom
  else if (deltaY > 0 && scrolledValue !== 0) scrolledValue--;

  if (scrolledValue % 10 === 0) changeSlide();
  touchStartY = touchEndY;
});
